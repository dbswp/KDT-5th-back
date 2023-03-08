const funcHell = (callback) => {
  callback();
};

funcHell(() => {
  console.log('1번인척하는 함수');
  funcHell(() => {
    console.log('2번인척하는 함수');
    funcHell(() => {
      console.log('3번인척하는 함수');
    });
  });
});
