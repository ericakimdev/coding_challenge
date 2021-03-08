/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var srtStrengthArr = [];

for (let i = 0; i < N; i++) {
    var pi = parseInt(readline());
    srtStrengthArr.push(parseInt(pi));
}

var minDiff = Number.MAX_SAFE_INTEGER;
srtStrengthArr = srtStrengthArr.sort(function (a, b) {
    return b - a  //dscending order
});

for (var i = 0; i < N; i++) {
    var diff = srtStrengthArr[i] - srtStrengthArr[i + 1];
    if (diff < minDiff) {
        minDiff = diff;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(minDiff);


// Sort numbers in an array in ascending order:
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});

// other way 1
//  read in an array of all of the horses and sort them ascending
var horses = new Array(parseInt(readline())).fill(1).map((x) => +readline()).sort((a, b) => a - b);

//  compare each horse to the next one and store the differences in a new array
//  we need to slice off the first value since it is always null 
var differences = horses.map((current, index, array) => Math.abs(current - array[index - 1])).slice(1);

// minus returns the difference between two numbers
// Math.abs return the absolute value of a number

//  sort the differences ascending and print the lowest
print(differences.sort((a, b) => a - b)[0]);

// other way 2
print(
    Array(+(r = readline)())
        .fill()
        .map(a => r())
        .sort(s = (a, b) => a - b)
        .map((c, i, a) => c - a[i - 1])
        .sort(s)
    [0]
);

