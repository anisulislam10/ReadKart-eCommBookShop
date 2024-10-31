import express from "express";
import User from "../models/user.model.js";
import Order from "../models/orders.model.js";
// import Books from "../models/book.model.js";

//order place --Public API
export const createOrder = async (req, res) => {
   try {
     const { id } = req.headers; // Get user ID from headers
     let { order } = req.body; // Get order data from request body
 
     // Ensure 'order' is defined and has the right structure
     if (!order) {
       return res.status(400).json({
         status: false,
         message: "'order' field is required in the request body"
       });
     }
 
     // Convert single order object to an array if it's not already an array
     if (!Array.isArray(order)) {
       order = [order]; // Convert single order to an array
     }
 
     // Loop through each order item
     for (const orderData of order) {
       // Validate that each order item has an '_id' field
       if (!orderData._id) {
         return res.status(400).json({
           status: false,
           message: "Each order item must have an '_id' field"
         });
       }
 
       // Create new order
       const newOrder = new Order({ user: id, book: orderData._id });
       const orderDataFromDb = await newOrder.save();
 
       // Add the new order to the user's orders array
       await User.findByIdAndUpdate(id, {
         $push: { orders: orderDataFromDb._id }
       });
 
       // Remove the ordered book from the user's cart
       await User.findByIdAndUpdate(id, {
         $pull: { cart: orderData._id }
       });
     }
 
     return res.status(200).json({
       status: true,
       message: "Order placed successfully"
     });
 
   } catch (error) {
     console.error("Error in Create Order: ", error);
     return res.status(500).json({
       status: false,
       message: "Internal Server Error"
     });
   }
 };

 //get order history --Public API
 export const getOrderHistory=async (req,res)=>{
   try {
      const {id}=req.headers;
      const userData=await User.findById(id).populate({
         path:"Order",
         populate:{path:"Books"},
      });
      const orderData=userData.Order.reverse();
      return res.status(200).json({status:true, data:orderData})
   } catch (error) {
      console.log("Get Order History --public api Error: " + error);
   return res.status(500).json({status:false, message: "Internal Server Error"})
      
      
   }
 }
 
 //get All order history --Admin API
 export const getAllOrdersAdmin=async (req,res)=>{
   try {
      // const {id}=req.headers;
      const userData=await Order.find()
      .populate({
         path:"Books",
      })
      .populate({
         path:"User",
      })
     .sort({createdAt:-1});     
      // const orderData=userData.orders.reverse();
      return res.status(200).json({status:true, data:userData})
   } catch (error) {
      console.log("Get All Order History Error: " + error);
   return res.status(500).json({status:false, message: "Internal Server Error"})
      
      
   }
 }

 //update order --admin API
 export const updateOrderAdmin=async (req,res)=>{
  try {
    const {id}=req.params;
    await Order.findByIdAndUpdate(id,{status:req.body.status});
    return res.status(200).json({
      status: true,
      message: "Status Updated Successfully"
    })
  } catch (error) {
    console.log("Error in update order admin: " +error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error"
    })
    
  }
 }