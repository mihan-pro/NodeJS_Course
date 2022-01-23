const process = require('process');

const {stdin, stdout} = process;
function revert (str) {
    return str.split('').reverse().join('').trim();
}

stdin.setEncoding('utf-8');
stdin.on('data', (data) => {
    stdout.write(`${revert(data)}\n\n`);
});
