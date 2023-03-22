const express = require('express');
const { registerUser } = require('../../controller/userController');

const router = express.Router();

// 회원가입 페이지로 이동
router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', registerUser);

// 회원가입 기능 구현
// router.post('/', async (req, res) => {
//   const duplicatedUser = await userDb.userCheck(req.body.id);
//   if (!duplicatedUser) {
//     const registerResult = await userDb.registerUser(req.body);
//     if (registerResult) {
//       res.status(200);
//       res.send('회원 가입 성공! </br> <a href="/login">로그인으로 이동</a>');
//     } else {
//       res.status(500);
//       res.send('회원 가입 실패! </br> <a href="/register">로그인으로 이동</a>');
//     }
//   } else {
//     res.status(400);
//     res.send(
//       '회원 가입 실패! 동일한 ID를 가진 회원이 존재합니다.</br> <a href="/register">회원가입으로 이동</a>',
//     );
//   }
// });

// 서버에서 사용
module.exports = router;
