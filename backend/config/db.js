// import mongoose from 'mongoose';

// const connectDB = async() => {
//   try{
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   }catch(error){
//     console.log(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async() => {
  try{
    await mongoose.connect("mongodb://localhost:27017/mern-ecom");
    console.log("MongoDB connected successfully");
  }catch(error){
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;