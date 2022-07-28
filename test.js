// const name  = 'Yoshi'

// console.log(name)


const grid = (name) => {
    console.log(`Hello, ${name}`)
}

grid("Sky")
grid("Kevin X")

const fs = require('fs')



fs.writeFile('./docs/blog4.txt','start', ()=>{
    console.log('blog4 is created')
})

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.pipe(writeStream)