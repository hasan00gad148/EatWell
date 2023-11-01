// app.js
const path = require('path');
// Import Express and Multer
const express = require('express');
const multer = require('multer');

// Create an Express app
const app = express.Router();
const { v4: uuidv4 } = require('uuid');
const {read, write} = require('../utils/files.js');


uuidv4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'


  




// Create a Multer instance with disk storage options
const upload = multer({
  storage: multer.diskStorage({
    // Specify the destination folder for the uploaded files
    destination: (req, file, cb) => {
      cb(null, 'public/uploads');
    },
    // Specify the filename for the uploaded files
    filename: (req, file, cb) => {
      cb(null, req.body.name+"_img_"+ Date.now() + path.extname(file.originalname));
    }
  })
});



// Create a route handler for the file upload endpoint
app.post('/', upload.single('image'), (req, res) => {
  // Access the uploaded file and other fields from the request object
  isUploaded = false;
try {
  resturant = req.body
  resturant.id = uuidv4().toString()
  resturant.img = "/public/uploads/"+req.file.filename
  



  resturants = read("./database/resturants.json");
  resturants.push(resturant)

  console.log(resturant);
  console.log(req.file);

  write("./database/resturants.json",resturants)
  isUploaded = true;

} catch (error) {
  res.render("upload_SeccessOrFail",{success:isUploaded});
}

  // Send a response to the client
  res.render("upload_SeccessOrFail",{success:isUploaded});
});




module.exports = {addResturants: app}