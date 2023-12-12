// arrow functions
// const birthYear = 1988
// const calAge = birthYear => 2037 - birthYear;
// const age = calAge(1988);
// console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, 'Souvik'));
