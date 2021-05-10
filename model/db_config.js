const mongoose = require('mongoose');
url = 'mongodb://localhost:27017/likes'; 

module.exports = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex : true})
.then((done)=>{
    console.log('connected successfuly!')
})
 .catch ((error) => {
    console.log(error)
})

 