const numbers = [3, 4, 12, 56, 23, 18, 1, 0, 4, 5];
console.log(numbers);

// const smallNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//         smallNumbers.push(numbers[i]);
//     }
// }

// const smallNumber = numbers.filter(function(item) {
//     return item > 10;
// });

// const surprisedNumbers = [];
// numbers.forEach(function(item) {
//     surprisedNumbers.push(item + "!");
// })

const surprisedNumbers = numbers.map(function(item) {
    if (item > 10 ) {
        return item + "!";
    }
    return item + "";
});

const names = ["Bob", "Sarah", "Joe", "Louie"];

const namesLi = names.map(item => "<li>" + item + "</li>");

console.log(namesLi)
