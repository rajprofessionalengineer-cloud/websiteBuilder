import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log("Connecting to:", process.env.MONGODB_URL);

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("✅ DB Connected");
    } catch (error) {
        console.log("❌ DB Error:");
        console.log(error);
    }
};

export default connectDb;