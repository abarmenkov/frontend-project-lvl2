import _ from 'lodash';

const getKeys = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return keys1.concat(keys2.filter((item) => !keys1.includes(item))).sort();
};

const compareObj = (obj1, obj2) => {
  const keys = getKeys(obj1, obj2);
  const result = keys
    .reduce((acc, key) => {
      if (!_.has(obj1, key)) {
        return [...acc, `+ ${key}: ${obj2[key]}`];
      }
      if (!_.has(obj2, key)) {
        return [...acc, `- ${key}: ${obj1[key]}`];
      }
      if (obj1[key] !== obj2[key]) {
        return [...acc, `- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`];
      }
      return [...acc, `  ${key}: ${obj1[key]}`];
    }, []).join('\n  ');
  return `{\n  ${result}\n}`;
};

export default compareObj;
