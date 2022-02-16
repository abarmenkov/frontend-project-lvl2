import _ from 'lodash';

const variables = {
  added: '+ ',
  removed: '- ',
  indentType: ' ',
};

const getIndent = (depth, spaces = 4) => {
  const indentSize = depth * spaces;
  const indent = variables.indentType.repeat(indentSize);
  const bracketIndent = indent.slice(0, -4);
  const indentForChaned = indent.slice(0, -2);
  return { indent, bracketIndent, indentForChaned };
};

const stringify = (currentValue, depth) => {
  if (!_.isPlainObject(currentValue)) return `${currentValue}`;
  const { indent, bracketIndent } = getIndent(depth);
  const lines = Object
    .entries(currentValue)
    .map(([key, value]) => `${indent}${key}: ${stringify(value, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (data) => {
  const iter = (currentValue, depth) => {
    const { indent, indentForChaned } = getIndent(depth);
    const lines = currentValue
      .flatMap((item) => {
        switch (item.type) {
          case 'nested':
            return `${indent}${item.key}: {\n${iter(item.children, depth + 1)}\n${indent}}`;
          case 'added':
          case 'removed':
            return `${indentForChaned}${variables[item.type]}${item.key}: ${stringify(item.value, depth + 1)}`;
          case 'different':
            return [
              `${indentForChaned}${variables.removed}${item.key}: ${stringify(item.value, depth + 1)}`,
              `${indentForChaned}${variables.added}${item.key}: ${stringify(item.value2, depth + 1)}`,
            ];
          case 'unchanged':
            return `${indent}${item.key}: ${stringify(item.value, depth + 1)}`;
          default:
            throw new Error(`Type ${item.type} is not supported!`);
        }
      });
    return lines.join('\n');
  };
  return `{\n${iter(data, 1)}\n}`;
};

export default stylish;
