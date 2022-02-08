const parse = (data, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown data format: '${dataFormat}'!`);
  }
};

export default parse;
