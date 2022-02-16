/* eslint-disable no-undef */
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixedPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixedPath(filename), 'utf-8');

const json = readFile('result-json.txt');
const stylish = readFile('result-stylish.txt');
const plain = readFile('result-plain.txt');

test.each([{
  file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', expected: stylish,
}, {
  file1: 'file1.json', file2: 'file2.json', format: 'plain', expected: plain,
}, {
  file1: 'file1.json', file2: 'file2.json', format: 'json', expected: json,
},
])('test-diffs', ({
  file1, file2, format, expected,
}) => {
  const filepath1 = getFixedPath(file1);
  const filepath2 = getFixedPath(file2);
  expect(genDiff(filepath1, filepath2, format)).toBe(expected);
});
