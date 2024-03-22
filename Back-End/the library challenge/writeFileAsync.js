const fs = require("fs");

const ct = `this is the content to be written to the file`;


function writeFileAsyn(fp, ct) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fp, ct, `utf-8`, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(`Write succ`);
      }
    });
  });
}

// writeFileAsyn(fp, ct)
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = writeFileAsyn;

