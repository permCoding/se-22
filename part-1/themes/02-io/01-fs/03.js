const fs = require("fs")


let content = "В лесу родилась ёлочка, \
В лесу она росла. \n\
Зимой и летом стройная - \
Зелёная была."

fs.writeFile("texta.txt", content, (err) => { // асинхронно
    if (err) console.error(err)
    else {
        console.log(content.toString())
    }
})

fs.writeFileSync("textb.txt", content)
