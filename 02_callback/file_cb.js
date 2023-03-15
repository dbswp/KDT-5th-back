// const fs = require('fs');

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if (err) return console.log(err);

//   console.log('1번', data.toString());

//   fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) return console.log(err);

//     console.log('2번', data.toString());

//     fs.readFile('./test.txt', 'utf-8', (err, data) => {
//       if (err) return console.log(err);

//       console.log('3번', data.toString());

//       fs.readFile('./test.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err);

//         console.log('4번', data.toString());
//       });
//     });
//   });
// });

// promise사용해서 콜백지옥 해결
// resolve == true. reject == false
// 뎁스가 3이상인 코드는 효율적이지 못하다.
const fs = require('fs').promises;

fs.readFile('test.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
  })
  .catch((err) => {
    throw err;
  });
