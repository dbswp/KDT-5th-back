// @ts-check

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일 쓰기 테스트7777';

fs.writeFile('test3.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('writefile succeed');
  }
});
