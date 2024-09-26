import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import userRoute from './Routes/user.route.js';
import bookRoute from './Routes/book.route.js';

dotenv.config();

const app = express();

// Use express's built-in body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/book", bookRoute);

// Check connection route
app.get("/check_conn", (req, res) => {
    res.json({
        message: "ReadKart Server is Working Properly....",
        status: "✔",
        port: `**${PORT}`
    });
});

// Error handling for JSON parsing issues
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: "Bad JSON format" });
    }
    next();
});

// Port configuration
const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log('***------------------------------***');
    console.log(`***  Server Started at Port ${PORT} ***`);
    console.log('***------------------------------***');
    connectDB();
});
