import express from 'express'
// import mongoose from "mongoose"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import { authRouter, userRouter } from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

await connectDB();

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("hello");
});



app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
});