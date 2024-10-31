import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    username:{
        requied: true,
        type:String,
        unique:true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
    },
    role:{
        type:String,
        default:"user",
        enum:["user", "admin"]
    },

    favourites:[
        {
        type:mongoose.Types.ObjectId,
        ref:"Books"
        },
    ],
    cart:[
        {
        type:mongoose.Types.ObjectId,
        ref:"Books"
    },
    ],
    Order:[
        {
        type:mongoose.Types.ObjectId,
        ref:"Order"
    },
    ]
 
},{timestamps:true});


export default mongoose.model("User", userSchema);
