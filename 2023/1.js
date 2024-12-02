// split calibration document by line
let calibration_document = document.getElementById("puzzle-1");
const lines = calibration_document.innerText.split(" ");

// PART 1

let calibration_values = [];
// convert lines to calibration values
lines.forEach(line => {
    let line_copy = line.split("");
    let a = "";
    while (isNaN(a = line_copy.shift())) {
    };
    line_copy = line.split("").reverse();
    let b = "";
    while (isNaN(b = line_copy.shift())) {
    };
    calibration_values.push(Number(`${a}${b}`));
});
// add all calibration values
let sum1 = 0;
calibration_values.forEach(value => {
    sum1 += value;
});
console.log(sum1);

// PART 2

// convert lines to calibration values
calibration_values = [];
lines.forEach(line => {
    let line_copy = line;
    // find first spelled word and add it as a number
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (let i = 0; i < words.length; i++) {
        words[i] = line_copy.indexOf(words[i]) >= 0 ? line_copy.indexOf(words[i]) : 1000;
    };
    let first_num_i = Math.min.apply(Math, words);
    let first_num = words.indexOf(first_num_i);
    line_copy = line_copy.split("");
    line_copy.splice(first_num_i, 0, first_num);
    // find first digit
    let a = "";
    while (isNaN(a = line_copy.shift())) {
    };
    // find last spelled word and add it as a number
    line_copy = line.split("").reverse().join("");
    words = ['orez', 'eno', 'owt', 'eerht', 'ruof', 'evif', 'xis', 'neves', 'thgie', 'enin']
    for (let i = 0; i < words.length; i++) {
        words[i] = line_copy.indexOf(words[i]) >= 0 ? line_copy.indexOf(words[i]) : 1000;
    };
    let last_num_i = Math.min.apply(Math, words);
    let last_num = words.indexOf(last_num_i);
    line_copy = line_copy.split("");
    line_copy.splice(last_num_i, 0, last_num);
    let b = "";
    while (isNaN(b = line_copy.shift())) {
    };
    calibration_values.push(Number(`${a}${b}`));
});
// add all calibration values
sum = 0;
calibration_values.forEach(value => {
    sum += value;
});
console.log(sum);