import {stdin, stdout} from 'process';

function reverse (str) {
    return str.split('').reverse().join('').trim();
}

stdin.setEncoding('utf-8');

stdin.on('data', (data) => {
    stdout.write(`${reverse(data)}\n\n`);
});
