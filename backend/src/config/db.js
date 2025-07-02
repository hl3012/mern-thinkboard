import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLLY!");
  } catch (error) {
    console.log("ERROR CONNECTING TO MONGODB", error);
    process.exit(1);
  }
};
