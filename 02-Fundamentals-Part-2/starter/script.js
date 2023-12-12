// arrow functions
// const birthYear = 1988
// const calAge = birthYear => 2037 - birthYear;
// const age = calAge(1988);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1988, 'Souvik'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

const calAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(bYear, firstName) {
    const age = calAge(bYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1988, 'Souvik'));
console.log(yearsUntilRetirement(1970, 'Tom'));

