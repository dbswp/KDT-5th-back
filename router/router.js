// @ts-check

// const exp = require('constants');
// const { raw } = require('express');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();
const { PORT } = process.env;
// const PORT = process.env.PORT;
// const PORT = 4000;

const mainRouter = require('./routes/index');
// ./routes/users에서 기능을 정의해서 내보낸 모듈을 userRouter라는 이름의 변수를 선엉하여 담아주기
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');
// main.js에서 복잡하게 기능을 구현하는 코드는 빼서 모듈화
const dataRouter = require('./routes/data');
const boardRouter = require('./routes/board');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// body-parser쓰는 기본 구조
// form data에서 값 받고싶으면 사용
app.use(bodyParser.json()); // json 형태로 전달
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('dbswp'));
app.use(
  session({
    secret: 'dbswp', // secret값으로 암호화
    resave: false, // 변경사항이 없어도 다시 저장
    saveUninitialized: true, // 세션에 저장할 내역이 없더라도 처음부터 세션 생성
    // cookie: {
    //   maxAge: 1000 * 60 * 60,
    // },
  }),
);

app.set('view engine', 'ejs');
// console.log(__dirname)
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
// app.use('/css', express.static('views/css'))
// app.use('/js',express.static('js'))
// app.use(express.static('js'))
// userRouter가 처리하게 넘
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/post', postRouter);
app.use('/data', dataRouter);
app.use('/board', boardRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
// '/users'요청이 들어오면 userRouter가 다음값들 처리

// 서버 전체에대한 명령어
app.use('/', (req, res) => {
  res.send('Hello, express world');
});

// err를 띄우는 미들웨어에는 4가지 인자를 다 작성해야한다.
// app에 오류를 띄우는 밀들웨어 작성
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
