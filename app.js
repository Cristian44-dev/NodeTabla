const process=require('process');
const { tabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
tabla(argv.b,argv.l,argv.a)



