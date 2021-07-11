const argv=require('yargs')
            .option('b',{
                alias:"base",
                type:'number',
                demandOption:true,
                describe:'Toma la base de multiplicar'  
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                describe:'Muestra la tabla'
            })
            .check((argv)=>{
                if ( isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true
            })
            .argv;

module.exports=argv;