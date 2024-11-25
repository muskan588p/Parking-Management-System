const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler.js");
const cors = require("cors");
const dotenv = require("dotenv");
const loginRoutes = require('./routes/loginRoutes');
const parkingRoutes = require('./routes/ParkingRoutes');
const registerRoutes = require('./routes/registerRoutes');
const usermodel = require('./models/userModel');



// Load environment variables
dotenv.config();

// Connect to the database
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);


// Routes
app.use('/api/register', require("./routes/registerRoutes"));
app.use('/api/login', require("./routes/loginRoutes"));
app.use('/parking', parkingRoutes);
// app.use("/api/account", require("./routes/accountRoutes"));
// app.use("/api/parking", require("./routes/parkingRoutes"));
// app.use("/api/wallet", require("./routes/walletRoutes"));
// app.use("/api/booking", require("./routes/bookingRoutes"));
// app.use("/api/old-bookings", require("./routes/oldBookingRoutes"));

// Basic Routes
app.get("/", (req, res) => {
    res.send("Backend is Running!");
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
