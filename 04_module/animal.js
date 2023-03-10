const animals = ['dog','cat']

// 1
// const showAnimals = () => {
//     animals.map((el) => console.log(el))
// }

// module.exports = {
//     animals,
//     showAnimals,
// }

// 2
exports.animals = animals
exports.showAnimals = function showAnimals() {
    animals.map((el) => console.log(el))
}