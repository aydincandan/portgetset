require('dotenv').config() 


let kaynak = "ENV/CLI";

const args = process.argv; 


const argPORT = args.slice(2)

if (argPORT) kaynak = "CLI";

var port = normalizePort(argPORT);



if (argPORT.length != 1 || isNaN(port)) {
    kaynak = "ENV"
    port = normalizePort(process.env.PORT);
}



module.exports = { port, kaynak }

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        
        return val;
    }

    if (port >= 0) {
        
        return port;
    }

    return false;
}


