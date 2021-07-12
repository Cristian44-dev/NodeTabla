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
            .option('a',{
                alias:"alcanze",
                type:"number",
                dafault:10,
                describe:"Cantidad de veces a multiplicar",
            })
            .check((argv)=>{
                if ( isNaN(argv.b) || isNaN(argv.a)){
                    throw 'Se requiere un número'
                }
                return true
            })
            .argv;

module.exports=argv;