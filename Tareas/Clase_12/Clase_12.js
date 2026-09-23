import readline from "node:readline"

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("put you number here: ", (number) =>{

    if (number >= 5){
        console.log(`you are a gay`)
    }else {
        console.log(`you don't a gay`)
    }

    rl.close()
});