/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
var inputs = readline().split(' ');
// const n = 6;
// var inputs = ['3', '2', '4', '2', '1', '5'];

var maxLoss = 0;
var currVal = inputs[0] || 0;

for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);

    for (var j = i + 1; j < n; j++) {
        var possibleLoss = inputs[j] - inputs[i];
        if (possibleLoss < maxLoss) {
            maxLoss = possibleLoss;
        }
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(maxLoss);