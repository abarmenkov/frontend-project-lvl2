import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatDiff = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'json':
      return json(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Unsupported format: '${formatName}'!`);
  }
};

export default formatDiff;
