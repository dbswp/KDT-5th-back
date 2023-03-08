// @ts-check

const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  const str = 'Hello, Here is backend.!';
  const json = JSON.stringify(str);
  res.send(json);
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중입니다.`);
});
