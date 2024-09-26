import express from "express";
import User from "../models/user.model.js";

//add to favourite --logged-in user
export const addToFavourite = async (req, res) => {
    try {
        // console.log("Add to Favourite Hitted");
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        //user able to add same book by one time
        const isBookFavourite=userData.favourites.includes(bookid);
        if(isBookFavourite){
            return res.status(200).json({
                message:"Book is Already in Favourites"
            })
        }
        await User.findByIdAndUpdate(id,{$push:{favourites:bookid}})
        res.status(200).json({
            message: "Book Added to Favourites"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

//delete book from favourite list --logged-in user
export const removeFromFavouriteList=async (req,res)=>{
    try {
        // console.log("Add to Favourite Hitted");
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        //user able to add same book by one time
        const isBookFavourite=userData.favourites.includes(bookid);
        if(isBookFavourite){
            await User.findByIdAndUpdate(id,{$pull:{favourites:bookid}})
 
        }
        res.status(200).json({
            message: "Book Removed from Favourites"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
    }
}

//get favourite books of a particular user --logged-in user
export const getFavouriteBooks=async (req,res)=>{
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate("favourites");
        const favoutieBooks=userData.favourites;
        res.status(200).json({
            status:true,
            data:favoutieBooks
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
        
    }
}