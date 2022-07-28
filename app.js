const express = require('express');

const app = express()

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
//res.send('<p>Home page</p>');
res.sendFile('./docs/index.html', {root:__dirname })
})

app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    res.sendFile('./docs/about.html',{root: __dirname})
})

app.get('/about-us', (req,res) => {
    res.redirect('/about')
})
//404 using this function for any nomatching path, have to be at the very bottom
app.use((req,res) => {
    res.status(404).sendFile('./docs/404.html', {root: __dirname})
})