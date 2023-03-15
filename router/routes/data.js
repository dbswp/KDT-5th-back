const express = require('express');
const userDb = require('../../controller/userController');

const router = express.Router();

router.get('/', (req, res) => {
  userDb.getUsers((data) => {
    res.send(data);
  });
});

module.exports = router;
