import fs from 'fs';
import path from 'path';
import compareObj from './formDiff.js';
import parse from './parser.js';

const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const getFileContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  // const fullPath = path.resolve(`${process.cwd()}${filePath}`);
  const data = fs.readFileSync(fullPath, 'utf-8');
  return data;
};

const getParsedContent = (filePath) => parse(getFileContent(filePath), getFileFormat(filePath));

const getDiff = (filePath1, filePath2) => {
  const data1 = getParsedContent(filePath1);
  const data2 = getParsedContent(filePath2);
  const diff = compareObj(data1, data2);
  return diff;
};

export default getDiff;
