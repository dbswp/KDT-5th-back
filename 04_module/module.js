// 1
// const animalsModule = require('./animal')

// console.log(animalsModule)
// console.log(animalsModule.animals)
// animalsModule.showAnimals()

// 2
// 구조 분해 할당
const {animals, showAnimals} = require('./animal')
console.log(animals)
showAnimals()