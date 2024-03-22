const writeFileAsyn = require(`./writeFileAsync`);

function processFiles(paths) {
  for (let i = 0; i < paths.length; i++) {
    writeFileAsyn(paths[i], `jajajajajaja   ` + Date.now() + `  moomnjej`);
  }
}

module.exports = processFiles;
