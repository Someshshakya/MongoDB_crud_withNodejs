const express = require('express');
const app = express();
const PORT = 8000;
// to handle users requests 
const Users = require('./router/user');
app.use(Users);

app.get('/',(req,res)=>{
    res.send("Hi you are welcome on home page")
})


app.listen(PORT,()=>{
    console.log(`server is running at...    ${PORT} `)
})