// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(...arr);

// const obj = {
//   name: 'dbswp',
//   status: '취함',
// };

// console.log(obj);
// console.log({ ...obj });

// const tetzData = {
//   name: 'dbswp',
//   age: 26,
// };

// const tetzInfo = {
//   nickName: 'chicken head',
//   status: 'cnlgka',
// };

// const tetz = {
//   ...tetzData,
//   ...tetzInfo,
// };

// console.log(tetz);

const tetz2 = {
  name: '이효리',
  gender: 'f',
  nickName: 'head',
  email: 'asdfasf@naver.co',
};

const { name, ...tetzInfo } = tetz2;
console.log(name, tetzInfo);

// const arr3 = [1, 2, 3, 4, 5, 6, 7];
// console.log(first, rest);

function spread(f, s, ...rest) {
  console.log(f);
  console.log(s);
  console.log(rest);
}
spread(1, 2, 3, 4, 5, 6, 7);
