const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.cookie('alert', true, {
//     expires: new Date(Date.now() + 1000 * 60),
//     // maxAge: 1000 * 60 // 쿠키의 생성 시간을 기준으로 밀리 세컨드 단위로 생존시간을 결정
//     httpOnly: true,
//     // 통신시에만 읽을 수 있음( 브라우저에 저장되어 있긴하지만 )
//   });
//   console.log(req.cookies);
//   res.render('cookie');
// });

router.get('/', (req, res) => {
  res.render('cookie');
});

router.get('/cook', (req, res) => {
  console.log('hi');
  res.cookie('alert', true, {
    maxAge: 1000 * 5,
    // maxAge: 1000 * 60 // 쿠키의 생성 시간을 기준으로 밀리 세컨드 단위로 생존시간을 결정
    httpOnly: false,
    // 통신시에만 읽을 수 있음( 브라우저에 저장되어 있긴하지만 )
  });
  res.status(200);
  res.json('쿠키 굽기 성공!');
});

module.exports = router;
