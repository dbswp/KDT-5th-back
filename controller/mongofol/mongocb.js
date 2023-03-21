const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://dbswp980427:18-76037445@cluster0.r56i4hp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// insertOne
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   // client를 불러와 kdt5라는 스키마를 생성후 collection으로 테이블 생성
//   // perform actions on the collection object
//   // {}를 비운이유는 모든데이터를 삭제한다는 뜻, (조건, 콜백)
//   test.deleteMany({}, (deleteErr, deleteReuslt) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteReuslt);
//     test.insertOne(
//       {
//         name: 'pororo',
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// insertMany, deleteMany 삭제, 삽입 기능
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   // client를 불러와 kdt5라는 스키마를 생성후 collection으로 테이블 생성
//   // perform actions on the collection object
//   // {}를 비운이유는 모든데이터를 삭제한다는 뜻, (조건, 콜백)
//   // 실행시킨 {}가 실행되는데 걸리는 시간동안 (콜백)이 기다림
//   // 이후 콜백 실행(err, result)
//   test.deleteMany({}, (deleteErr, deleteReuslt) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteReuslt);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         // console.log(insertResult);
//         // deleteOne 조건을 만족하는 가장 첫번째 값 삭제
//         // $는 mongodb에 명령
//         test.deleteMany(
//           { age: { $gte: 5 } },
//           (deleteManyErr, deleteManyReuslt) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(insertResult);
//             console.log(deleteManyReuslt);
//           },
//         );
//       },
//     );
//   });
// });

// update 쿼리 수정기능
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   // client를 불러와 kdt5라는 스키마를 생성후 collection으로 테이블 생성
//   // perform actions on the collection object
//   // {}를 비운이유는 모든데이터를 삭제한다는 뜻, (조건, 콜백)
//   // 실행시킨 {}가 실행되는데 걸리는 시간동안 (콜백)이 기다림
//   // 이후 콜백 실행(err, result)
//   test.deleteMany({}, (deleteErr, deleteReuslt) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteReuslt);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         // console.log(insertResult);
//         // deleteOne 조건을 만족하는 가장 첫번째 값 삭제
//         // $는 mongodb에 명령
//         // test.updateOne(
//         //   { name: 'loopy' },
//         //   { $set: { name: '루피' } },
//         //   (updateErr, updateResult) => {
//         //     if (updateErr) throw updateErr;
//         //     console.log(updateResult);
//         //   },
//         // );
//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5살 이상인 친구들' } },
//           (updateManyErr, updateManyResult) => {
//             if (updateManyErr) throw updateManyErr;
//             console.log(updateManyResult);
//           },
//         );
//       },
//     );
//   });
// });

// find 검색기능
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   // client를 불러와 kdt5라는 스키마를 생성후 collection으로 테이블 생성
//   // perform actions on the collection object
//   // {}를 비운이유는 모든데이터를 삭제한다는 뜻, (조건, 콜백)
//   // 실행시킨 {}가 실행되는데 걸리는 시간동안 (콜백)이 기다림
//   // 이후 콜백 실행(err, result)
//   test.deleteMany({}, (deleteErr, deleteReuslt) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteReuslt);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;

//         const findCursor = test.find({ name: 'loopy' });
//         console.log(findCursor);
//         findCursor.toArray((toArrErr, ArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(ArrData);
//         });
//       },
//     );
//   });
// });
