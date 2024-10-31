import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    User: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    Books: {
        type: mongoose.Types.ObjectId,
        ref: "Books"
    },
    status: {
        type: String,
        default: "Order Placed",
        enum: ["Order Placed", "Out for delivery", "Delivered", "Canceled"]
    },
    


}, { timestamps: true }
);


export default mongoose.model("Order", orderSchema);