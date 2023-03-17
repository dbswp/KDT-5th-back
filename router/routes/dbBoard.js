const express = require('express');
const boardDB = require('../../controller/boardContoroller');

const router = express.Router();

// 로그인 확인용 미들웨어
const isLogin = (req, res, next) => {
  if (req.session.login) {
    next();
  } else {
    res.send('로그인 해주세요.<br><a href="/login">로그인 페이지로 이동</a>');
  }
};

// 게시판 페이지 호출
router.get('/', isLogin, (req, res) => {
  if (req.session.login === true) {
    boardDB.getAllArticles((data) => {
      const ARTICLE = data;
      const articleCounts = ARTICLE.length;
      const { userID } = req.session;
      res.render('db_board', { ARTICLE, articleCounts, userID });
    });
  } else {
    res.status(400);
    res.send(
      '로그인이 필요한 서비스 입니다.! <br><a href="/login">로그인 페이지로 이동</a>',
    );
  }
});

// 글쓰기 페이지 호출
router.get('/write', isLogin, (req, res) => {
  res.render('db_board_write');
});
// 데이터 베이스에 글쓰기
router.post('/write', isLogin, (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.writeArticle(req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글쓰기 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 글 수정 모드로 이동
router.get('/modify/:id', isLogin, (req, res) => {
  boardDB.getArticles(req.params.id, (data) => {
    if (data.length > 0) {
      res.render('db_board_modify', { selectedArticle: data[0] });
    } else {
      const err = new Error('해당 ID 값을 가지는 게시글이 없습니다.');
      err.statusCode = 500;
      throw err;
    }
  });
});
// 글 수정
router.post('/modify/:id', isLogin, (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.modifyArticle(req.params.id, req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('해당 ID 값을 가지는 게시글이 없습니다.');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 글삭제
// get, post에서만 redirect 가능
router.delete('/delete/:id', isLogin, (req, res) => {
  boardDB.deleteArticle(req.params.id, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/dbBoard');
      // res.status(200).send('삭제 성공');
    } else {
      const err = new Error('해당 ID 값을 가지는 게시글이 없습니다.');
      err.statusCode = 500;
      throw err;
    }
  });
});

router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    res.send(data);
  });
});

module.exports = router;
