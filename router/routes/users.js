// @ts-check

const express = require('express')

const router = express.Router()

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


router.get('/', (req,res) => {
    // res.send(USER)
    res.render('users', {USERARR, userCounts: USERARR.length})
})
router.get('/id/:id', (req,res) => {
    const userData = USER[req.params.id]
    if(userData) return res.send(userData)
    else return res.send('ID를 못찾겠어요')
})
router.post('/add', (req,res) => {
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
router.put('/modify/:id', (req,res,next) => {
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
router.delete('/delete/:id', (req,res) => {
    if (req.params.id in USER) {
        delete USER[req.params.id]
        res.send('회원 삭제 완료')
    } else {
        res.send('잘못된 입력 값')
    }
})

router.get('/show', (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'})
    res.write('<h1>hello, Dynamic Web page</h1>')
    for (let i =0; i < USERARR.length; i++) {
        res.write(`<h2>USER id is ${USERARR[i].id}</h2>`)
        res.write(`<h2>USER id is ${USERARR[i].name}</h2>`)
    }
    res.end('');
})

// router.get('/ejs', (req,res) => {
//     // 그려주는 파일 정의
//     const userCounts = USERARR.length
//     res.render('index', {USERARR, userCounts})
// })

// router와 관련된 기능들 모듈화
module.exports = router