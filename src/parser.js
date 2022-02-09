import yaml from 'js-yaml';

const parse = (data, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown data format: '${dataFormat}'!`);
  }
};

export default parse;
