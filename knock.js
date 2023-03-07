const knockDoor = (time, name, callback) => {
  console.log('노크를 하고 기다립니다.');
  setTimeout(() => {
    // 실행하고싶은 코드
    callback(time, name);
  }, time * 1000);
};

const callName = (time, name) => {
  console.log(`${name} 이가 ${time}초 만에 문을 열고 나왔습니다..`);
};

knockDoor(3, '영식이', callName);
