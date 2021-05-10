const db = require('../model/db_config');
const User = require('../model/user_Schem');
exports.create_user = async (req,res) =>{
         // to insert single document
    // const userDetails = new User ({
    //                     first_name:"Somesh",
    //                     last_name: "Shakya",
    //                     email : "shakya@gmail.com",
    //                     user_id:1
    //                 })

    

                    // these are multiple documents to insert at the same time 
    const details = [
        {
            first_name:"abc",
            last_name: "adg",
            email : "xyz@gmail.com",
            user_id:2
        },{
            first_name:"demo",
            last_name: "rose",
            email : "doema@gmail.com",
            user_id:3
        },{
            first_name:"Ajit",
            last_name: "Kumar",
            email : "Kumar@gmail.com",
            user_id:4
        },{
            first_name:"Rahul",
            last_name: "Gandhi",
            email : "marthia@gmail.com",
            user_id:5
        },

    ]

    
    try {
                // to insert single document
        // await userDetails.save();
        // console.log(userDetails)

// to insert multiple documents at the same time 
        await User.insertMany(details);


        res.send({msg:"Inserted successfuly!"})
    } catch (error) {
        console.log(error)
        res.send({er_msg:error})
    }
    
}



// to dislplay users after inserting them in them in the database
exports.read_user = async (req,res)=>{
    try {
        const getUsers = await User.find();
        res.send({msg:getUsers})
            console.log('user has been displayed!')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// to update the user's detaisl by user_email

exports.user_edit = async (req,res)=>{
    var id = req.params.id;
    try {
        await User.updateMany({"email":"marthia@gmail.com"},
                        {$set:{"first_name":"super","last_name":"star"}},
                        )
        console.log("updating... ",id)
        res.send({msg:"document udpated successfully!"})
    } catch (err) {
        console.log(err)
        res.send({errmsg:err})
        
    }
}

// to delete the user permannantly by it's email
exports.delete = async (req,res)=>{
    var id = req.params.id;
    try {
        let check = await User.deleteOne({'email':"Kumar@gmail.com"});
        console.log('deleting....',check)
        res.send({msg:"deleted successfuly!"})
    } catch (error) {
        console.log("this is deleting error",error)
        res.send({errmsg:"this is deleting error",error});
    }
}