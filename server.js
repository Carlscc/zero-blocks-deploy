const express = require('express');
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require(path.join(__dirname, "config", "db"));

const app = express();

// Set up port
const PORT = process.env.PORT || 5000;

// Set environment variables
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

// Connect database
connectDB();

// Body parser
app.use(express.json());

// Get router files
const members = require(path.join(__dirname, "routes", "members"));
const updates = require(path.join(__dirname, "routes", "updates"));

// Set up routers
app.use("/members", members);
app.use("/updates", updates);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));