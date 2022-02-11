/* eslint-disable no-undef */
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
// import { test, expect } from 'jest';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixedPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixedPath(filename), 'utf-8');

const json = readFile('result-json.txt');
const stylish = readFile('result-stylish.txt');

test('test-json', () => {
  const filepath1 = getFixedPath('file1.json');
  const filepath2 = getFixedPath('file2.json');
  expect(genDiff(filepath1, filepath2)).toBe(json);
});

test('test-yml', () => {
  const filepath1 = getFixedPath('file1.yml');
  const filepath2 = getFixedPath('file2.yml');
  expect(genDiff(filepath1, filepath2)).toBe(stylish);
});
