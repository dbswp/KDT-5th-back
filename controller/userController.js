const mongooseConnect = require('./mongooseConnect');
// require('./mongooseConnect')
// const로 변수를 받아오지 않아도 require로만으로도 불러올 수 있다.
const User = require('../models/user');
// mongooseConnect();
const REG_UNEXPECTED_MSG =
  '알 수 없는 문제 발생 </br><a href="/register">회원가입으로 이동</a>';
const REG_USERCHECK_MSG =
  '동일한 ID를 가지는 회원이 존재합니다. </br><a href="/register">회원가입으로 이동</a>';
const REG_SUCCESS_MSG =
  '회원 가입 성공! </br><a href="/login">로그인으로 이동</a>';

const LOGIN_USERCHECK_MSG =
  '동일한 ID를 가지는 회원이 존재하지 않습니다.. </br><a href="/register">회원가입으로 이동</a>';
const LOGIN_WRONGPW_MSG =
  '비밀번호가 다릅니다.! </br><a href="/login">로그인으로 이동</a>';
const LOGIN_WRONGREGI_MSG =
  '알 수 없는 문제 발생 </br><a href="/register">회원가입으로 이동</a>';

// 회원 가입
// 몽구스 삽입은 create, 뒤에 {} = One, 뒤에 [] = Many
const registerUser = async (req, res) => {
  try {
    // const duplicatedUser = await User.findOne({ id: req.body.id });
    // else문 대신에 if문에서 아닌 조건을 걸어주고, return으로 함수 끝
    // if (duplicatedUser) return res.status(400).send(REG_USERCHECK_MSG);
    await User.create(req.body);
    res.status(200).send(REG_SUCCESS_MSG);
  } catch (err) {
    console.error(err);
    res.status(500).send(REG_UNEXPECTED_MSG);
  }
};

const loginUser = async (req, res) => {
  try {
    const duplicatedUser = await User.findOne({ id: req.body.id });
    if (!duplicatedUser) return res.status(400).send(LOGIN_USERCHECK_MSG);
    if (duplicatedUser.password !== req.body.password)
      return res.status(400).send(LOGIN_WRONGPW_MSG);
    req.session.login = true;
    req.session.userId = req.body.id;

    res.cookie('user', req.body.id, {
      maxAge: 1000 * 30,
      httpOnly: true,
      signed: true,
    });

    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(LOGIN_WRONGREGI_MSG);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
