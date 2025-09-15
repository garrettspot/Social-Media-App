import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbURL);
        console.log("mongodb connected");
    } catch (error) {
        console.log("error connecting: ", error);
        process.exit(1);
    }
}

export default connectDB;