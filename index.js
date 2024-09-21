import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import roomRoutes from "./routes/room.route.js";
import blogRoutes from "./routes/blog.route.js";
import categoryRoutes from "./routes/category.route.js";
import bookingRoutes from "./routes/booking.route.js";
import usersRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import payments from "./routes/payment.route.js";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();

// CORS configuration to allow all origins
app.use(
  cors({
    origin: "*", // Allow all origins
    credentials: true, // Allow credentials if needed
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api", usersRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payment", payments);
app.use("/api/rooms", roomRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the room" });
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server listening on port:", PORT);
});
