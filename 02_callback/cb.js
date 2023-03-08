// const func1 = (callback) => {
//   console.log('1번 함수');
//   callback();
// };

// const func2 = (callback) => {
//   console.log('2번 함수');
//   callback();
// };

// const func3 = () => {
//   console.log('3번 함수');
// };

// func1(func3);

// const func1 = (callback) => {
//   console.log('1번 함수');
//   callback(func3);
// };

// const func2 = (callback) => {
//   console.log('2번 함수');
//   callback();
// };

// const func3 = () => {
//   console.log('3번 함수');
// };

// func1(func2);

// const func1 = (callback) => {
//   console.log('1번 함수');
//   callback();
// };

// const func2 = (callback) => {
//   console.log('2번 함수');
//   callback();
// };

// const func3 = () => {
//   console.log('3번 함수');
// };
// // 익명함수 만들기
// func1(() => {
//   console.log('2번인척 하는 새로 만든 익명 함수');
// });

// const multiplication = (num, callback) => {
//   let answer = 0;
//   // 일정시간 후에 작동하는 함수
//   setTimeout(() => {
//     answer = num * num;
//     callback(answer);
//   }, 2000);
// };

// const say = (result) => {
//   console.log(result);
// };

// multiplication(3, say);
