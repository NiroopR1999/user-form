const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Import userRoutes module
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000; // Define the port for the server
const host = "127.0.0.1"; // Define the host address for the server

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the userRoutes for handling routes
app.use("/", userRoutes);

// Start the server and listen for incoming requests
app.listen(PORT, host, () => {
  console.log(`Server is running at http://${host}:${PORT}`);
});
