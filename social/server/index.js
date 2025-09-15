import express from 'express'
// import mongoose from "mongoose"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

await connectDB();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api/auth', authRouter);


app.get('/', (req, res) => {
    res.send("hello");
});



app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
});