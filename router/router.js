// @ts-check

// const exp = require('constants');
// const { raw } = require('express');

const express = require('express');

const app = express();
const PORT = 4000;

const userRouter = require('./routes/users')
// main.js에서 복잡하게 기능을 구현하는 코드는 빼서 모듈화

app.set('view engine', 'ejs')
// console.log(__dirname)
app.use(express.static('public'))
// app.use('/css', express.static('views/css'))
// app.use('/js',express.static('js'))
// app.use(express.static('js'))
// userRouter가 처리하게 넘
app.use('/users', userRouter);
// '/users'요청이 들어오면 userRouter가 다음값들 처리

//서버 전체에대한 명령어
app.use('/', (req,res) => {
    res.send('Hello, express world')
})

app.listen(PORT, () => {
    console.log(`${PORT} 번에서 서버 실행`);
});