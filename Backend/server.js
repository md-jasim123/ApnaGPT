import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
    connectDB();
});

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database");
    } catch (err) {
        console.log("Failed to connect with Db", err);
    }
}




















// import axios from "axios";
// import "dotenv/config";

// const response = await axios.post(
//   "https://openrouter.ai/api/v1/chat/completions",
//   {
//     model: "openai/gpt-4o-mini",
//     messages: [
//       {
//         role: "user",
//         content: "Difference between SQL & MongoDB",
//       },
//     ],
//   },
//   {
//     headers: {
//       Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//       "Content-Type": "application/json",
//       "HTTP-Referer": "http://localhost:3000",
//       "X-Title": "MyChatApp",
//     },
//   }
// );

// // result print
// console.log(response.data.choices[0].message.content);