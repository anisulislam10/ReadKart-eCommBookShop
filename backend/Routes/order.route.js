import express from "express";

import { createOrder,getOrderHistory,getAllOrdersAdmin,updateOrderAdmin } from "../controllers/order.controller.js";
import authenticateToken from "../middleware/userAuth.middleware.js";

const router=express.Router();
router.route("/createorder").post(authenticateToken,createOrder);
router.route("/gethistory").get(authenticateToken,getOrderHistory);
router.route("/getallhistoryadmin").get(authenticateToken,getAllOrdersAdmin);
router.route("/updatestatus").put(authenticateToken,updateOrderAdmin)



export default router;

