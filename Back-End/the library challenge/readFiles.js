const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

function readFileAsync(fp) {
  return new Promise((resolve, reject) => {
    fs.readFile(fp, "utf-8", (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  });
}

// const fp = "example.txt";
// readFileAsync(fp)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .finally(function () {
//     console.log("Done!!");
//   });

//

module.exports = readFileAsync;
