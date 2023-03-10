// @ts-check

// const exp = require('constants');
// const { raw } = require('express');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 4000;

const mainRouter = require('./routes/index')
// ./routes/users에서 기능을 정의해서 내보낸 모듈을 userRouter라는 이름의 변수를 선엉하여 담아주기
const userRouter = require('./routes/users')
const postRouter = require('./routes/post')
// main.js에서 복잡하게 기능을 구현하는 코드는 빼서 모듈화

// body-parser쓰는 기본 구조
// form data에서 값 받고싶으면 사용 
app.use(bodyParser.json()) // json 형태로 전달
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
// console.log(__dirname)
app.use(express.static('public'))
// app.use('/css', express.static('views/css'))
// app.use('/js',express.static('js'))
// app.use(express.static('js'))
// userRouter가 처리하게 넘
app.use('/', mainRouter)
app.use('/users', userRouter);
app.use('/post', postRouter)
// '/users'요청이 들어오면 userRouter가 다음값들 처리

//서버 전체에대한 명령어
app.use('/', (req,res) => {
    res.send('Hello, express world')
})

// err를 띄우는 미들웨어에는 4가지 인자를 다 작성해야한다.
// app에 오류를 띄우는 밀들웨어 작성
app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(err.statusCode)
    res.send(err.message + `<br/> <a href="/">홈으로</a>`)
})

app.listen(PORT, () => {
    console.log(`${PORT} 번에서 서버 실행`);
});