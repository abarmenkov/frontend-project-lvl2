import stylish from './stylish.js';
import plain from './plain.js';

const formatDiff = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    default:
      throw new Error(`Unsupported format: '${formatName}'!`);
  }
};

export default formatDiff;
