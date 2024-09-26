import User from '../models/user.model.js';
import Books from '../models/book.model.js';
// import dotenv from "dotenv";
// import jwt  from 'jsonwebtoken';
// dotenv.config({});


//add book --admin api
export const addBookAdmin = async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
            return res.status(400).json({
                message: "You are not heving access to perform admin work"

            })
        }
        const book = new Books({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        })
        await book.save();
        return res.status(200).json({
            message: "Book Added Successfull"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })

    }
}

//update book --admin api
export const updateBookAdmin = async (req, res) => {
    try {
        const { bookid } = req.headers;
        await Books.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        });
        return res.status(200).json({
            message: "Book Updated Successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })


    }
}

//get Allbooks --public api
export const getBook = async (req,res)=>{
    try {
      
        const books=await Books.find().sort({createdAt: -1});
        return res.status(200).json({
            status:"success",
            data:books
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
        
    }
}

//delete book --admin api
export const deleteBookAdmin=async (req,res)=>{
    try {
        const {bookid}=req.headers;
        await Books.findByIdAndDelete(bookid);
        return res.status(200).json({
            message: "Book Deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
        
        
    }
}

//get recents book (4 books recent) --public api
export const getRecentBooks = async (req,res)=>{
    try {
        const books = await Books.find().sort({createdAt: -1}).limit(4);
        return res.status(200).json({
            status:true,
            data:books
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
        
    }
}

//particular book detail (book by id) --public api
export const getBookbyId=async (req,res)=>{
    try {
        const {id}=req.params;
        const books=await Books.findById(id);
        return res.status(200).json({
            status:true,
            data:books
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
    }
}