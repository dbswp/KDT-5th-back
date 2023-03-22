const express = require('express');
const { loginUser } = require('../../controller/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', loginUser);

// router.post('/', (req, res) => {
//   userDb.userCheck(req.body.id, (data) => {
//     if (data.length > 0) {
//       // 회원정보가 들어있는 data[0]
//       if (data[0].PASSWORD === req.body.password) {
//         // 백엔드 세션을 생성하는 코드
//         req.session.login = true;
//         req.session.userId = req.body.id;

//         // 로그인 쿠키 발행
//         // user라는 이름에 회원정보 담기
//         res.cookie('user', req.body.id, {
//           maxAge: 1000 * 30,
//           httpOnly: true,
//           signed: true,
//         });

//         res.status(200);
//         res.redirect('/dbBoard');
//       } else {
//         res.status(400);
//         res.send(
//           '비밀번호가 다릅니다. <br><a href="/login">로그인 페이지로 이동</a>',
//         );
//       }
//     } else {
//       res.status(400);
//       res.send(
//         '해당 ID가 존재하지 않습니다. <br><a href="/login">로그인 페이지로 이동</a>',
//       );
//     }
//   });
// });

router.get('/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.clearCookie('user');
    res.redirect('/login');
  });
});

module.exports = router;
