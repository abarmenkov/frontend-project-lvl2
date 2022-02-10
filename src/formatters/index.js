import stylish from './stylish.js';

const formatDiff = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish;
    default:
      throw new Error(`Unsupported format: '${formatName}'!`);
  }
};

export default formatDiff;
