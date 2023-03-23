const express = require('express');
const multer = require('multer');
const fs = require('fs');

const {
  getAllArticles,
  writeArticle,
  getArticles,
  modifyArticle,
  deleteArticles,
} = require('../../controller/boardContoroller');

const router = express.Router();

// 파일 업로드 설정
const dir = './uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now());
  },
});
const limits = {
  filesize: 1024 * 1024 * 2,
};

const upload = multer({ storage, limits });

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

// 로그인 확인용 미들웨어
const isLogin = (req, res, next) => {
  if (req.session.login || req.signedCookies.user) {
    next();
  } else {
    res.status(400);
    res.send('로그인 해주세요.<br><a href="/login">로그인 페이지로 이동</a>');
  }
};
//  게시판 페이지 호출
router.get('/', isLogin, getAllArticles);

//  글쓰기 페이지 호출
router.get('/write', isLogin, (req, res) => {
  res.render('db_board_write');
});

// 데이터 베이스에 글쓰기
router.post('/write', isLogin, upload.single('img'), writeArticle);

// 글수정 페이지로 이동
router.get('/modify/:id', isLogin, upload.single('img'), getArticles);
router.post('/modify/:id', isLogin, upload.single('img'), modifyArticle);

// 글 삭제
router.delete('/delete/:id', isLogin, deleteArticles);

module.exports = router;
