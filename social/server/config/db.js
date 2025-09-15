import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("mongodb connected");
    } catch (error) {
        console.log("error connecting: ", error);
        process.exit(1);
    }
}

export default connectDB;