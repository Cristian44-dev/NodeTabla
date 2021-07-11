const fs = require("fs");
const colors=require('colors');
const tabla = (base = 1 , listar) => {
  let date = `=============\nTABLA DEL ${colors.yellow(base)}\n=============\n`;
  for (let i = 1; i <= 10; i++) {
    date += `${colors.yellow(base)}${colors.blue.bold("x")}${colors.yellow(i)}=${base * i}\n`;
  }
  fs.writeFileSync(`./out/tabla-${base}.txt`, date);
  console.log(`tabla-${base}.txt creada`);
  listar ? console.log(date) : "";  
};
module.exports = {
  tabla,
};
