import applySandhi from '../index';
import fs from 'fs';
import { parse } from 'csv/dist/umd/sync';


const contents = fs.readFileSync('./src/lib/tests/asht.csv','utf8');
const rows = parse(contents, {
  columns: true,
  skip_empty_lines: true
});

describe('Rule Based Corpus - Internal', () => {

  rows.forEach(row => {
    const split = row.Split.split('+');
    test(`it works for ${row.Word}`, () => {
      const combined = applySandhi(...split);
      expect(combined).toEqual(row.Word);
    });
  });
  
});

