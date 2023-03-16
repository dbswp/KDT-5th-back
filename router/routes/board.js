const express = require('express');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content: 'larem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'title2',
    content: 'larem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

// 페이지를 보여주는 미들웨어
// 페이지 요청은 get방식으로
// localhost:4000/board/
router.get('/', (req, res) => {
  res.render('board', { ARTICLE, articleCounts: ARTICLE.length });
});

// 글쓰기
// 글쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('board_write');
});
// 글 추가
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newArticle);
    res.redirect('/board');
  } else {
    const err = new Error('글 등록 실패');
    err.statusCode = 400;
    throw err;
  }
});

// 글 수정
// 글 수정 모드로 이동
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});
router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('글 수정 실패');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
  ARTICLE.splice(arrIndex, 1);
  res.send('삭제 완료');
});

module.exports = router;
