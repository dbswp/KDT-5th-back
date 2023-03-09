// @ts-check

const exp = require('constants');
const { raw } = require('express');
const express = require('express');

const app = express();
const userRouter = express.Router();
const PORT = 4000;

const USER = {
    1: {
        id: 'dbswp',
        name: '윤제',
    },
};
const USERARR = [
    {
        id: 'dbswp',
        name: '윤제',
        email: '0000@naver.com'
    },
    {
        id: 'dbswp123',
        name: '뽀로로',
        email: '1111@naver.com'
    },
]

app.set('view engine', 'ejs')
console.log(__dirname)
app.use('/css', express.static(__dirname+'/views/css'))
// app.use('/css', express.static('views/css'))
// app.use('/js',express.static('js'))
app.use(express.static('js'))
// userRouter가 처리하게 넘
app.use('/users', userRouter);

// http://localhost:4000/users
// http://127.0.0.1:4000/users
// userRouter.get('/', (req,res) => {
//     res.send('회원 목록')
// })

// data에 원하는 값 넣어주기
// userRouter.use('/',(req,res,next)=>{
//     req.data = {};
//     req.data.reqDataName = "윤제"
//     next();
// })

userRouter.get('/', (req,res) => {
    // res.send(req.data)
    res.send(USER)
})
userRouter.get('/id/:id', (req,res) => {
    const userData = USER[req.params.id]
    if(userData) return res.send(userData)
    else return res.send('ID를 못찾겠어요')
})
userRouter.post('/add', (req,res) => {
    if (!req.query.id || !req.query.name) return res.send('존재하지 않는 id입니다.')
    const newUser = {
        id: req.query.id,
        name: req.query.name,
    }
    USER[Object.keys(USER).length+1] = newUser
    res.send('회원 등록 완료')
    // if (req.query.id && req.query.name) {
    //     const newUser = {
    //         id: req.query.id,
    //         name: req.query.name,
    //     }
    //     USER[Object.keys(USER).length+1] = newUser
    //     res.send('회원 등록 완료')
    // } else return res.send('Unexpected query')
})
userRouter.put('/modify/:id', (req,res,next) => {
    if (!req.query.id || !req.query.name) return res.send('존재하지 않는 id입니다')
    const newUser = {
        id: req.query.id,
        name: req.query.name,
    }

    // USER[req.params.id].id = req.query.id
    // USER[req.params.id].name = req.query.name
    // USER[req.params.id] = {
    //     id: req.query.id,
    //     name: req.query.name,
    // }
    USER[Object.keys(USER).length] = newUser
    // USER의 키값에 새로운 query값 집어넣기
    console.log(USER[req.params.id])
    res.send('회원 정보 수정 완료')
})
userRouter.delete('/delete/:id', (req,res) => {
    if (req.params.id in USER) {
        delete USER[req.params.id]
        res.send('회원 삭제 완료')
    } else {
        res.send('잘못된 입력 값')
    }
})

userRouter.get('/show', (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'})
    res.write('<h1>hello, Dynamic Web page</h1>')
    for (let i =0; i < USERARR.length; i++) {
        res.write(`<h2>USER id is ${USERARR[i].id}</h2>`)
        res.write(`<h2>USER id is ${USERARR[i].name}</h2>`)
    }
    res.end('');
})

userRouter.get('/ejs', (req,res) => {
    // 그려주는 파일 정의
    const userCounts = USERARR.length
    res.render('index', {USERARR, userCounts})
})

//서버 전체에대한 명령어
app.use('/', (req,res) => {
    res.send('Hello, express world')
})


app.listen(PORT, () => {
    console.log(`${PORT} 번에서 서버 실행`);
});