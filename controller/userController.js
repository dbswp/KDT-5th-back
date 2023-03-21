const connection = require('./dbConnect');
const mongoClient = require('./mongoConnect');

const userDb = {
  // 중복회원 확인
  userCheck: async (userID) => {
    try {
      const client = await mongoClient.connect();
      const user = client.db('kdt5').collection('user');
      const findUser = await user.findOne({ id: userID });
      if (!findUser) return false;
      return findUser;
    } catch (err) {
      console.error(err);
    }
  },

  registerUser: async (newUser) => {
    try {
      const client = await mongoClient.connect();
      const user = client.db('kdt5').collection('user');

      await user.insertOne(newUser);
      return true;
    } catch (err) {
      console.error(err);
    }
  },
};

module.exports = userDb;
