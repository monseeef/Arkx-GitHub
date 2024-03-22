const processFile = require("./processFiles");
const readFile = require("./readFileAsync");
const writeFile = require("./writeFileAsync");

async function main() {
  let res = await processFile.processFiles();
  //console.log("response", res);
}

main();
