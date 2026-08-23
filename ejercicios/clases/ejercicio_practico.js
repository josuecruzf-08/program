// import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`En que ciudad vives `, function(ciudad){
    rl.question(`Cuel es tu color favorito `, function(color){
        rl.question(`Ingrese una palabras de su preferencia `, function(palabra1){
            rl.question(`Ingrese otra palabra de su preferencia `, function(palabra2){
                console.log(`estos son sus datos: `)
                console.log(`donde vive:  ${ciudad}`)
                console.log(`Color favorito:  ${color}`)
                console.log(`palabras ${palabra1 + palabra2}`)
                
                rl.close()
            })
        })
    })
})

