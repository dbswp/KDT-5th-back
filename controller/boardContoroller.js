// const connection = require('./dbConnect');
const { ObjectId } = require('mongodb');
const mongoClient = require('./mongoConnect');

// const mongooseConnect = require('./mongooseConnect');
// require('./mongooseConnect')
// const로 변수를 받아오지 않아도 require로만으로도 불러올 수 있다.
// const board = require('../models/board');
// mongooseConnect();

const UNEXPECTED_MSG = '<br><a href="/">메인 페이지로 이동</a>';

const getAllArticles = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');

    const allArticleCursor = board.find({});
    const ARTICLE = await allArticleCursor.toArray();

    res.render('db_board', {
      ARTICLE,
      articleCounts: ARTICLE.length,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

const writeArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');

    console.log(req.file);

    const newArticle = {
      USERID: req.session.userId,
      TITLE: req.body.title,
      CONTENT: req.body.content,
      IMAGE: req.file ? req.file.filename : null,
    };
    await board.insertOne(newArticle);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

const getArticles = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    const selectedArticle = await board.findOne({
      _id: ObjectId(req.params.id),
    });
    res.status(200);
    res.render('db_board_modify', { selectedArticle });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

const modifyArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    const modify = {
      TITLE: req.body.title,
      CONTENT: req.body.content,
    };

    if (req.file) modify.IMAGE = req.file.filename;

    await board.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: modify,
      },
    );
    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

const deleteArticles = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    await board.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.status(200).json('삭제성공');
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

module.exports = {
  getAllArticles,
  writeArticle,
  getArticles,
  modifyArticle,
  deleteArticles,
};
