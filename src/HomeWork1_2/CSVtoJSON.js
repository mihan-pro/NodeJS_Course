import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { resolve } from 'path';

pipeline(
    [
        createReadStream(resolve('./csv/example.csv')),
        csv({ trim: true, delimiter: [';', ','] }),
        createWriteStream('HomeWork1_2/result.txt')
    ],
    (err) => {
        if (err) {
            console.error(`${err}w`);
        }
    }
);
