const csvtojson = require("csvtojson");
const fs = require("fs/promises");

const { readFile, writeFile } = fs;

readFile("./HomeWork1_2/csv/example.csv")
  .then((data) => {
    return csvtojson({
      trim: true,
      delimiter: [";", ","],
    }).fromString(data.toString());
  })
  .then((json) => {
    return writeFile(
      "HomeWork1_2/result.txt",
      JSON.stringify(json, null, 2),
      "utf8"
    );
  })
  .catch((err) => {
    console.error(`Something went wrong ${err.message}`);
  });
