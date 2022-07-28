
// fs module provides useful functionality to access and interact with the file system
const fs = require('fs')
// read file
fs.readFile('./docs/blogs.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// write file
fs.writeFile('./docs/blogs.txt', 'Hello Kevin', ()=>{
    console.log('text is changed')
} )

fs.writeFile('./docs/blog1.txt','Sky is back',()=>{
    console.log('New File is created')
})

// fs.writeFile('./docs/fordeleting','delete me', ()=>{
//   console.log('file is created')
// })
// dir create and delete

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Directory is created')
    })

}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Directory is removed')
    })
}

// delete files
if(fs.existsSync('./docs/fordeleting')){
    fs.unlink('./docs/fordeleting',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file is deleted')
    })
}

