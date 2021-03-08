/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var tempCloseZero = 100000;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526

    if (Math.abs(t) < Math.abs(tempCloseZero)) {
        tempCloseZero = t;
    }
    if (Math.abs(t) === Math.abs(tempCloseZero)) {
        tempCloseZero = (tempCloseZero > t) ? tempCloseZero : t;
    }
}

if (!n) {
    tempCloseZero = 0;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(tempCloseZero);

//other solutions
//var count = readline(); // the number of temperatures to analyse
//var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526
var temps = [10, -4, 7, -7, 5];

var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
console.error(sortedTemps);

var result = sortedTemps[0] || 0;

console.log(result);
