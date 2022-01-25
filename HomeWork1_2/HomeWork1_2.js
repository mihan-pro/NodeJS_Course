const csvtojson = require("csvtojson");
const fs = require("fs");
const stream = require("stream");

const { createReadStream, createWriteStream } = fs;
const { pipeline } = stream;

pipeline(
  [
    createReadStream("HomeWork1_2/csv/example.csv"),
    csvtojson({ trim: true, delimiter: [";", ","] }),
    createWriteStream("HomeWork1_2/result.txt"),
  ],
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
