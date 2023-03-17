const express = require('express');
const userDb = require('../../controller/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  userDb.userCheck(req.body.id, (data) => {
    if (data.length === 0) {
      //  진행 시켜 req.body에 newUser값
      userDb.registerUser(req.body, (result) => {
        if (result.affectedRows >= 1) {
          res.status(200);
          res.send(
            '회원 가입 성공! </br> <a href="/login">로그인으로 이동</a>',
          );
        } else {
          res.status(500);
          res.send(
            '회원 가입 실패! </br> <a href="/register">로그인으로 이동</a>',
          );
        }
      });
    } else {
      res.status(400);
      res.send(
        '회원 가입 실패! 동일한 ID를 가진 회원이 존재합니다.</br> <a href="/register">회원가입으로 이동</a>',
      );
    }
  });
});

module.exports = router;
