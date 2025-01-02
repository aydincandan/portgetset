require('dotenv').config() // https://www.npmjs.com/package/dotenv
// console.log(process.env) // remove this after you've confirmed it is working

let kaynak = "ENV/CLI";

const args = process.argv; 
// console.log({ args })

const argPORT = args.slice(2)

if (argPORT) kaynak = "CLI";

var port = normalizePort(argPORT);

// console.log(argPORT.length, { argPORT }, "arg:", port, isNaN(port))

if (argPORT.length != 1 || isNaN(port)) {
    kaynak = "ENV"
    port = normalizePort(process.env.PORT);
}

// console.log("::", port, kaynak)

module.exports = { port, kaynak }

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


