const { MongoClient, ServerApiVersion } = require('mongodb');
// eslint-disable-next-line operator-linebreak
const { MONGO_DB_URL } = process.env;
console.log(MONGO_DB_URL);

const client = new MongoClient(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
