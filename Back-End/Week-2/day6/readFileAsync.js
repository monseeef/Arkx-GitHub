const fs = require("fs");

//Read Files Asyncronously
function readFileAsync(filePath) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        // console.log(err);
        rejects(err);
      } else {
        // console.log(data);
        resolve(data);
      }
    });
  });
}

module.exports = { readFileAsync };
