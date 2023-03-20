const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://dbswp980427:18-76037445@cluster0.r56i4hp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  // client를 불러와 kdt5라는 스키마를 생성후 collection으로 테이블 생성
  // perform actions on the collection object
  // {}를 비운이유는 모든데이터를 삭제한다는 뜻, (조건, 콜백)
  test.deleteMany({}, (deleteerr, deleteresult) => {
    if (deleteerr) throw deleteerr;
    console.log(deleteresult);
    test.insertOne(
      {
        name: 'dbswp',
        nickName: 'head',
      },
      (inserterr, insertresult) => {
        if (insertresult.acknowledged) {
          const findData = test.find({});
          findData.toArray((err, data) => {
            console.log(data);
          });
        }
      },
    );
  });
});
