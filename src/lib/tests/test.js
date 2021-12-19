import fs from 'fs';
import { parse } from 'csv/dist/umd/sync';
const obj = jest.requireActual('../index');
// jest.disableAutomock()
//import applySandhi from '../index';

console.log(Object.keys(obj));
const combine = obj.default.combine;
const contents = fs.readFileSync('./src/lib/tests/rbcInternal.csv','utf8');
const rows = parse(contents, {
  columns: true,
  skip_empty_lines: true
});

describe('Rule Based Corpus - Internal', () => {

  // rows.forEach(row => {
  //   const split = row.Split.split('+');
  //   test(`it works for ${row.Word}`, () => {
  //     const combined = applySandhi(...split);
  //     expect(combined).toEqual(row.Word);
  //   });
  // });

  test(`it works for ${rows[0].Word}`, () => {
    const split = rows[0].Split.split('+');
    console.log('split row', split);
    const combined = combine(...split);
    expect(combined).toEqual(rows[0].Word);
  });
  
});

