/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

var mtMap = {};
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.

    mtMap[EXT.toLowerCase()] = MT;
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.

    // no.1
    var fnameSplit = FNAME.split('.');

    if (fnameSplit.length > 1) {
        var ext = fnameSplit[fnameSplit.length - 1].toLowerCase();

        if (mtMap.hasOwnProperty(ext)) {
            console.log(mtMap[ext]);
        }
        else {
            console.log('UNKNOWN');
        }
    }
    else {
        console.log('UNKNOWN');
    }

    // no.2
    var fnameSplit = FNAME.toLowerCase.split('.');
    var ext = fnameSplit[fnameSplit.length - 1].toLowerCase();

    if (ext.length > 1 && mtMap.hasOwnProperty(ext)) {
        console.log(mtMap[ext]);
    }
    else {
        console.log('UNKNOWN');
    }
}

