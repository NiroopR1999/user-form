const express = require("express");
const router = express.Router(); // Create a new router
const path = require("path");
const fs = require("fs");
const collection = require("../src/mongodb"); // Import the MongoDB collection module

// Define the path to the HTML file
const filePath = path.join(__dirname, "..", "public", "index.html");
// Read the HTML file content into userForm
const userForm = fs.readFileSync(filePath, "utf-8");

// Handle GET request to "/"
router.get("/", (req, res) => {
  // Send the HTML form as a response to the client
  res.status(200).send(userForm);
});

// Handle POST request to "/submit"
router.post("/submit", async (req, res) => {
  // Extract user data from the request body
  const data = {
    name: req.body.name,
    address: req.body.address,
  };

  // Insert the user data into the MongoDB collection
  await collection.insertMany([data]);

  // Respond with a JSON message indicating successful data collection
  res.json({ message: "User Data is Collected!!" });
});

module.exports = router; // Export the router for use in other parts of the application
