import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { resolve, dirname } from 'path';

pipeline(
    [
        createReadStream(resolve(`${__dirname}/csv/example.csv`)),
        csv({ trim: true, delimiter: [';', ','] }),
        createWriteStream(`${__dirname}/result.txt`)
    ],
    (err) => {
        if (err) {
            console.error(`${err}w`);
        }
    }
);
