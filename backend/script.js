import mongoose from "mongoose";
import { Job } from "./models/jobSchema.js"; // Adjust the path as per your project structure

const MONGO_URI = "mongodb+srv://shrey3349:GmBnnjbwWSOkrqRX@cluster0.3v5an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual connection string
const DB_NAME = "MERN_JOB_SEEKING_WEBAPP";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Function to push random job data
const pushRandomData = async () => {
  try {
    const job = await Job.create({
      title: "Software Developer",
      description:
        "We are looking for a Software Developer to build and implement functional programs.",
      category: "IT & Software",
      country: "USA",
      city: "New York",
      location: "Chennai Near Cheppakam",
      fixedSalary: 80000,
      salaryFrom: 60000,
      salaryTo: 100000,
      expired: false,
      postedBy: "63e4d1c5f5b5c8d1b4d5a1c7", // Replace with a valid ObjectId for a User
    });

    console.log("Job created successfully:", job);
    mongoose.disconnect(); // Disconnect after insertion
  } catch (error) {
    console.error("Failed to create job:", error.message);
  }
};

// Execute the functions
const run = async () => {
  await connectDB();
  await pushRandomData();
};

run();
