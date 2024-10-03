import express from "express";

import { addBookAdmin, updateBookAdmin,getBook,deleteBookAdmin,getRecentBooks,getBookbyId } from "../controllers/book.controller.js";
import authenticateToken from "../middleware/userAuth.middleware.js";

const router=express.Router()

router.route("/addbook").post(authenticateToken,addBookAdmin)
router.route("/updatebook").put(authenticateToken,updateBookAdmin)
router.route("/getbook").get(getBook)
router.route("/deletebook").delete(authenticateToken,deleteBookAdmin)
router.route("/getrecentbook").get(getRecentBooks)
router.route("/getbookbyid/:id").get(getBookbyId)







export default router;