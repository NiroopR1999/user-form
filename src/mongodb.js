const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided URI or a default local URI
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/FormData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB"); // Log a success message when connected
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB"); // Log an error message if the connection fails
  });

// Define a schema for the UserData collection
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // The 'name' field is required
  },
  address: {
    type: String,
    required: true, // The 'address' field is required
  },
});

// Create a model for the UserData collection using the schema
const UserData = mongoose.model("UserData", FormSchema);

module.exports = UserData; // Export the UserData model for use in other parts of the application
