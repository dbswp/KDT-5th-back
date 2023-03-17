const connection = require('./dbConnect');

const userDb = {
  // 중복회원 확인
  userCheck: (userID, cb) => {
    connection.query(
      `SELECT * FROM mydb.user WHERE USERID = '${userID}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },

  // 회원 가입 하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb.user (USERID, PASSWORD) VALUES ('${newUser.id}', '${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = userDb;
