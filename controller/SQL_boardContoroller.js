const connection = require('./dbConnect');

const boardDB = {
  // 모든 게시글 가져오기
  getAllArticles: (cb) => {
    connection.query('SELECT * FROM mydb.board;', (err, data) => {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },

  // 게시글 추가
  writeArticle: (newArticle, cb) => {
    connection.query(
      // controller에 저장되어있는 newArticle값 정확히 확인
      `INSERT INTO mydb.board (USERID, TITLE, CONTENT) VALUE ('${newArticle.id}','${newArticle.title}', '${newArticle.content}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },

  // 특정 id값을 가지는 게시글 찾기
  getArticles: (id, cb) => {
    connection.query(
      `SELECT * FROM mydb.board WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },

  // 특정 ID를 가지는 게시글 수정하는 컨트롤러
  modifyArticle: (id, modifyArticle, cb) => {
    connection.query(
      `UPDATE mydb.board SET TITLE = '${modifyArticle.title}', CONTENT = '${modifyArticle.content}' WHERE ID_PK = '${id}'`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },

  // 특정 ID를 가지는 게시글 삭제
  deleteArticle: (id, cb) => {
    connection.query(
      `DELETE FROM mydb.board WHERE ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = boardDB;
