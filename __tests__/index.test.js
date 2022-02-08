import { fileURLToPath } from 'url';
import path from 'path';
//import { test, expect } from 'jest';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixedPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filepath1 = getFixedPath('file1.json');
const filepath2 = getFixedPath('file2.json');
const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('test1', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});
