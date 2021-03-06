import fs from 'fs';
import path from 'path';
import formatDiff from './formatters/index.js';
import getDiff from './formDiff.js';
import parse from './parser.js';

const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const getFileContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  return data;
};

const getParsedContent = (filePath) => parse(getFileContent(filePath), getFileFormat(filePath));

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = getParsedContent(filePath1);
  const data2 = getParsedContent(filePath2);
  const diff = getDiff(data1, data2);

  return formatDiff(diff, formatName);
};

export default genDiff;
