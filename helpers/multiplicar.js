const fs = require("fs");
const colors=require('colors');
const tabla = (base = 1 , listar, alcanze) => {
  
  let date= `=============\nTABLA DEL ${base}\n=============\n`;
  muestra=date;
  for (let i = 1; i <= alcanze; i++) {
    date += `${base}x${i}=${base * i}\n`;
    muestra += `${base}${colors.green("x")}${i}${colors.green("=")}${base * i}\n`;
  }
  fs.writeFileSync(`./out/tabla-${base}.txt`, date);
  console.log(`tabla-${base}.txt creada`);
  listar ? console.log(muestra) : "";  
};
module.exports = {
  tabla,
};
