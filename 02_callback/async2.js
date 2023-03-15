// await 연습

const fs = require('fs').promises;

const main = async () => {
  let data = await fs.readFile('./test1.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('./test2.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('./test3.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('./test4.txt', 'utf-8');
  console.log(data.toString());
};

main();
