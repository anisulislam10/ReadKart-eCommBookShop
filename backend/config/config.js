import mongoose from "mongoose";

const conn= async ()=>{
    try {
        await mongoose.connect(`${process.env.URI}`)
        console.log("**MongoDB Connected Successfully ***");
        console.log('***------------------------------***')

        
    } catch (error) {
        console.log(error);
        
    }
}
export default conn;