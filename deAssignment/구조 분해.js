// 배열 구조 분해
// const today = new Date();
// console.log(today);

// const formattedDate = today.toISOString().substring(0, 10);
// console.log(formattedDate);

// const [year, month, day] = formattedDate.split('-');
// console.log(year, month, day);

// 객체 구조 분해
// const obj = {
//   firstName: '제',
//   lastName: '윤',
// };
// const { firstName, lastName } = obj;

// console.log(lastName, firstName);

const person = {
  name: 'lee',
  address: {
    zipCode: '03068',
    city: 'seoul',
  },
};

const {
  address: { city, zipCode },
} = person;

const { name, address } = person;

console.log(city);
console.log(zipCode);
console.log(name);
console.log(address);
