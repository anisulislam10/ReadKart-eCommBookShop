import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config({});

const authenticateToken=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    // console.log("middleware authtoken hitted");
    // console.log(token);
    
    

    if(token==null){
        return res.status(401).json({
            message: "Authentication Token Required"
        });
        
        
    }
    jwt.verify(token,process.env.SECRET_KEY, (err,user)=>{
        if(err){
        return res.status(403).json({
            message:"Token Expired. Please sign-in again"
        });
    } 

    req.user = user;    
    next();
    });
}
export default authenticateToken;