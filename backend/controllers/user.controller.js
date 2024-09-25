import User from '../models/user.model.js';
import dotenv from "dotenv";
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken';
dotenv.config({});


//signup api
export const registerUser = async (req, res) => {
    try {
        console.log("****************");
        console.log("User Controller Hitted");
        
        const {username, useremail, password, address } = req.body;


        //check username length is equal or more then 5
        if (username.length <= 4) {
            return res.status(400).json({
                message: "username length should be 5 or more"
            });
        }

        //checkout username already exists ?
        const existingUsername = await User.findOne({ username: username })
        if (existingUsername) {
            return res.status(400).json({
                message: `The username " ${username} " already exists`
            })
        }

        //checkout email already exists ?
        const existingUserEmail = await User.findOne({ useremail: useremail })
        if (existingUserEmail) {
            return res.status(400).json({
                message: `The useremail " ${useremail} " already exists`
            })
        }
        //check password length is equal or more then 5

        if (password.length <= 4) {
            return res.status(400).json({
                message: "password length should be 5 or more"
            });
        }
        
        //check if the user enter empty form submit
        if (!username || !useremail || !password || !address)
            return res.status(400).json({
                message: "Something is missing.."
            })

            //hash password
            const hashPass= await bcrypt.hash(password,10)
        //now create user
        const newUser= new User({
            username: username,
            useremail: useremail,
            password: hashPass,
            address: address,
        });
      await newUser.save();
      console.log("*********************************");
      console.log("***Account Created Successfully");
      console.log("*********************************");
      console.log("USERNAME:"+username,"USEREMAIL:"+useremail, "PASS:" +hashPass, "ADDRESS:"+address);


        return res.status(201).json({
            message: "Account Created Successfully",
            username:username,
            useremail:useremail,
            password:hashPass,
            address:address
        })
      


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Err::Internal Server Error."
        })

    }

}

//login api
 export const signInUser = async (req,res)=>{
    try {
        const {username, password}= req.body;

        //check user registered or not
        const existingUername= await User.findOne({username});
        if(!existingUername){
            return res.status(400).json({
                message: "Invalid username"
            })
        }
        
        await bcrypt.compare(password,existingUername.password, 
            (err,data)=>{
                if(data){
                    //jwttoken
                    const authClaims=[
                        {name:existingUername.username},
                        {role:existingUername.role},

                    ]
                    const token=jwt.sign({authClaims},process.env.SECRET_KEY,{expiresIn: "20d"})
                    return res.status(200).json({
                        id:existingUername._id,
                        role: existingUername.role,
                        token:token,
                        message: "Sign-In Successfull"
                    })
                }
                else{
                    return res.status(400).json({
                        message: "Invalid Password"
                    })
                }
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
        
        
    }
 }

 //get user api
 export const getUserInformation= async (req,res)=>{
    console.log("getapi hitted::");

    try {
        const { id }=req.headers;
        const data=await User.findById(id).select('-password')
        return res.status(200).json(data)
        

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Internal Server Error"
        })
        
        
    }
    
 }

//update user address
export const updateAddress=async (req,res)=>{
    try {
        const {id}=req.headers;
        const {address}=req.body;
        await User.findByIdAndUpdate(id,{address:address});
        return res.status(200).json({
            message:"Address Updated Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
        
    }
}
