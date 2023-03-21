const { MongoClient, ServerApiVersion } = require('mongodb');
// eslint-disable-next-line operator-linebreak
const uri =
  'mongodb+srv://dbswp980427:18-76037445@cluster0.r56i4hp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
