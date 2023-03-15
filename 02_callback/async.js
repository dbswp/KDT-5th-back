const lucky = false;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합나다.');
  setTimeout(() => {
    console.log('3years ago');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('아...망했어요');
    }
  }, 1000);
});

// const howMuch = async () => {
//   try {
//     const result = await promise;

//     if (result) {
//       console.log(`기다림의 보상으로 ${result}원을 벌었습니다.`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// async가 붙은 함수 내부에는 await 키워드 사용
// await은 promise가 결과(resolve, reject)를 가져다 줄때까지 기다린다.

const howMuch = async () => {
  try {
    const result = await promise;
    if (result) {
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
};

howMuch();
