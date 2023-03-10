// export const animals = ['dog','cat']

// export const showAnimals = () => {
//     animals.map((el) => console.log(el))
// }

const animals = ['dog','cat']

const showAnimals = () => {
    animals.map((el) => console.log(el))
}
export {animals, showAnimals}
// export {animals as ani, showAnimals as show}
// 이름 별경 가능 as 사용해서
// export default 사용하면 import 시 구조분해 안해도 됨
// es6를 node.js에서 사용하고 싶으면 package.json에 "type":"module" 추가 