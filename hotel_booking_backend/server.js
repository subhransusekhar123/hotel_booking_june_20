require("dotenv").config();
const express = require("express");
const cors = require("cors");
const hotelRoutes = require("./routes/hotels");
const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookings");
const authRoutes = require("./routes/auth");



const app = express();

connectDB();

app.use(cors());
app.use(express.json());

console.log(bookingRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});