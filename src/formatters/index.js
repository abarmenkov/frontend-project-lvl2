import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatDiff = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish;
    case 'json':
      return json;
    case 'plain':
      return plain;
    default:
      throw new Error(`Unsupported format: '${formatName}'!`);
  }
};

export default formatDiff;
