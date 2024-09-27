import express from "express";
import User from "../models/user.model.js";

// add to cart -- public API
export const addToCart = async (req, res) => {
    try {
        const { bookid, id } = req.headers;

        // Validate if bookid and id are provided
        if (!bookid || !id) {
            return res.status(400).json({
                status: false,
                message: "Missing bookid or id in headers",
            });
        }

        // Find the user by ID
        const userData = await User.findById(id);

        // If user does not exist
        if (!userData) {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        // Check if the book is already in the cart
        const isBookInCart = userData.cart.includes(bookid);
        if (isBookInCart) {
            return res.status(200).json({
                status: true,
                message: "Book is Already in Cart",
            });
        }

        // Add the book to the user's cart
        await User.findByIdAndUpdate(id, { $push: { cart: bookid } });

        return res.status(200).json({
            status: true,
            message: "Book Added to Cart",
        });
    } catch (error) {
        // Log the actual error
        console.error("Error in addToCart:", error);

        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
};

// remove from Cart --public API
export const removeFromCart=async (req,res)=>{
    try {
        const {bookid}=req.params;
        const {id}=req.headers;
        await User.findByIdAndUpdate(id,{$pull:{cart:bookid}});
        res.status(200).json({
            status:true,
            message:"Book Removed from Cart"
        })
    } catch (error) {
        console.log("Error in AddToCart" +error);
        return res.status(500).json({status:false ,message:"Internal Server Error"})
        
        
    }
}

//get Cart items --public API
export const getFromCart=async (req,res)=>{
    try {
        const {id} = req.headers;
        const userData= await User.findById(id).populate("cart");
        const cart=userData.cart.reverse();
        res.status(200).json({
            status:true,
            data:cart
        })
    } catch (error) {
        console.log("Error in get from cart"+error);
        return res.status(500).json({status:false,message:"Internal Server Error"})
        
        
    }
}