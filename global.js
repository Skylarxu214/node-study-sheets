// console.log(global)
let num = 3
setTimeout(()=>{
    console.log( `See you in ${num} sec ~~`)
    clearInterval(int)
},4000);

let int = setInterval(()=>{
    console.log(`Me Again in ${num} `);
    let temp = num - 1
    num = temp

},1000)

console.log(`My directory name and path: ${__dirname}`)
console.log(`My file name and path: ${__filename}`)