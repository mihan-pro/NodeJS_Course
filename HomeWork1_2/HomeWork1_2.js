const csvtojson = require("csvtojson");
const fs = require("fs");

const { createReadStream, createWriteStream } = fs;

const readStream = createReadStream("HomeWork1_2/csv/example.csv");
const writeStream = createWriteStream("HomeWork1_2/result.txt");
const transformStream = csvtojson({
  trim: true,
  delimiter: [";", ","],
});

const errorHandler = (err) => {
  console.error(err);
};

readStream.on("error", errorHandler);
writeStream.on("error", errorHandler);
transformStream.on("error", errorHandler);

readStream.pipe(transformStream).pipe(writeStream);
