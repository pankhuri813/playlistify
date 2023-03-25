
// require('dotenv').config()
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// mongoose.set("strictQuery", true);

// // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
// // mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true} )
// mongoose
//   .connect("mongodb+srv://pihusrivastava717:Iamleo18@playlistify.vslnpwx.mongodb.net/?retryWrites=true&w=majority")
//   .then(() => {
//     console.log("Connection successfull.");
//   })
//   .catch((err) => {
//     console.log("No connection \n", err);
//   });

// // Define user schema
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true }
// });

// // Define user model
// const User = mongoose.model('User', userSchema);

// // Login API endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find the user with the matching email and password in the MongoDB database
//   const user = await User.findOne({ email, password });

//   if (!user) {
//     // If the user doesn't exist or the password is incorrect, return an error response
//     return res.status(401).json({ error: 'Incorrect email or password' });
//   }

//   // If the user exists and the password is correct, return a success response
//   res.json({ message: 'Login successful' });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


