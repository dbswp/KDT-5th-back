const { MongoClient, ServerApiVersion } = require('mongodb');
// eslint-disable-next-line operator-linebreak
const uri =
  'mongodb+srv://dbswp980427:18-76037445@cluster0.r56i4hp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const main = async () => {
  try {
    const db = await client.connect();

    const member = client.db('kdt5').collection('member');

    await member.deleteMany({});

    // err는 insertManyResult에 들어가지 않음
    await member.insertMany([
      { name: '장경은', age: 27 },
      { name: '송수빈', age: 26 },
      { name: '박지원', age: 26 },
      { name: '윤제', age: 26 },
      { name: '김계환', age: 36 },
    ]);
    await member.insertOne({ name: '양재연', age: 28 });
    await member.deleteOne({ name: '김계환' });
    await member.updateMany(
      { name: '양재연' },
      { $set: { name: '김계환', age: 36 } },
    );
    const findCursor = member.find({ age: { $gte: 27 } });
    const dataArr = await findCursor.toArray();
    console.log(dataArr);
  } catch (err) {
    console.error(err);
  }
};

main();
