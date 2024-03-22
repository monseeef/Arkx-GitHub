const fs = require("fs");
const readFile = require("./readFileAsync");
const writeFile = require("./writeFileAsync");

//
async function processFiles() {
  try {
    // get Files from Current Folder
    const dirFiles = fs.readdirSync("./");

    //Filtered Files from dirFile that end with .txt
    const filtered = dirFiles.filter((file) => file.endsWith(".txt"));

    console.log("dirFiles :", dirFiles);
    console.log("filtered : ", filtered);

    // Loop the Filtred files
    for (let i = 0; i < filtered.length; i++) {
      // read the file
      const content = await readFile.readFileAsync(`./${filtered[i]}`);
      // console.log(content);
      // Manipulate contenct to upper case
      const upper = content.toUpperCase();
      //const Date = new Date().toString();
      // log
      //console.log("Upper case :", upper);
      writeFile.writeFileAsync(`./${"upper" + filtered[i]}`, upper);
    }
    return ": Ok";
  } catch (error) {
    return error;
  }
}

module.exports = { processFiles };
