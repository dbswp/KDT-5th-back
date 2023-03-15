// @ts-check

// 매개변수로서 callback함수 넣어줌
const buySync = (item, price, quantity, callback) => {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    callback(total);
  }, 1000);
};

// const pay = (tot) => {
//   console.log(`${tot} 원 지불하셨습니다.`);
// };

// 매개변수로서 실행할 함수 (pay) 호출
// buySync('포켓몬빵', 1000, 5, pay);

buySync('포켓몬빵', 1000, 5, (total) => {
  console.log(`${total}원을 지불하였습니다.`);
});
