const express = require('express');
const app = express();
app.use(express.static('public'));

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});