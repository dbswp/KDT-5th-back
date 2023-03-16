// 모듈 불러올 때 require 코드 어느 곳에서나 불러올 수 있다.
const express = require('express');
// express.Router()를 사용하여 하ㅏ의 Router 모듈을 생성
const router = express.Router();

// const USER = {
//     1: {
//         id: 'dbswp',
//         name: '윤제',
//     },
// };
// USER[Object.keys(USER).length+1] = newUser

const USER = [
  {
    id: 'dbswp',
    name: '윤제',
    email: '0000@naver.com',
  },
  {
    id: 'dbswp123',
    name: '뽀로로',
    email: '1111@naver.com',
  },
];

router.get('/', (req, res) => {
  // res.send(USER)
  res.render('users', { USER, userCounts: USER.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) return res.send(userData);
  else {
    // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
    const err = new Error('해당 ID를 가진 회원이 없습니다.');
    err.statusCode = 404;
    throw err;
  }
});

router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
      const err = new Error('쿼리 입력이 잘못 되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
      const err = new Error('form태그 입력을 확인하세요');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이커가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

router.put('/modify/:id', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        // id 값은 이미 동일한 상태라 생략
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.end('회원정보 수정 완료');
    } else {
      const err = new Error('해당 ID를 가진 회원이 없습니다.');
      err.statusCode = 404;
      throw err;
    }
  } else {
    // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
    const err = new Error('쿼리 입력이 잘못 되었습니다.');
    err.statusCode = 404;
    throw err;
  }
  // USER['1'] 로 객체의 키값을 선언할 때는 [문자열로] 검색
  // USER[req.params.id].id = req.query.id
  // USER[req.params.id].name = req.query.name
  // USER[req.params.id] = {
  //     id: req.query.id,
  //     name: req.query.name,
  // }
});

// localhost:4000/users/delete
router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1);
    // splice(시작지점, 삭제할 개수)
    res.send('회원 삭제 완료');
  } else {
    // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
    const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다.');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.write('<h1>hello, Dynamic Web page</h1>');
  for (let i = 0; i < USER.length; i++) {
    res.write(`<h2>USER id is ${USER[i].id}</h2>`);
    res.write(`<h2>USER id is ${USER[i].name}</h2>`);
  }
  res.end('');
});

// router.get('/ejs', (req,res) => {
//     // 그려주는 파일 정의
//     const userCounts = USER.length
//     res.render('index', {USER, userCounts})
// })

// router와 관련된 기능들 모듈화하여 외부로 내보내기
// 최소한의 기능을 수행하는 단위?
// 모듈이 모여 -> 라이브러리 등등
module.exports = router;
