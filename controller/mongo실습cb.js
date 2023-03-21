const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://dbswp980427:18-76037445@cluster0.r56i4hp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const member = client.db('kdt5').collection('member');
  member.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
  });
  member.insertMany(
    [
      { name: '장경은', age: 27 },
      { name: '송수빈', age: 26 },
      { name: '박지원', age: 26 },
      { name: '윤제', age: 26 },
      { name: '김계환', age: 36 },
    ],
    (insertManyErr, inserManyResult) => {
      if (insertManyErr) throw insertManyErr;
      member.insertOne(
        { name: '양재연', age: 28 },
        (insertOneErr, insertOneResult) => {
          if (insertOneErr) throw insertOneErr;
          member.deleteOne(
            { name: '김계환' },
            (deleteOneErr, deleteOneResult) => {
              if (deleteOneErr) throw deleteOneErr;
              member.updateOne(
                { name: '양재연' },
                { $set: { name: '김계환', age: 36 } },
                (updateOneErr, updateOneResult) => {
                  if (updateOneErr) throw updateOneErr;
                  const findC = member.find({ age: { $gte: 25 } });
                  findC.toArray((toArrErr, ArrData) => {
                    if (toArrErr) throw toArrErr;
                    console.log(ArrData);
                  });
                },
              );
            },
          );
        },
      );
    },
  );
});
