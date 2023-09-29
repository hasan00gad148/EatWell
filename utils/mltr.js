// app.js
const path = require('path');
// Import Express and Multer
const express = require('express');
const multer = require('multer');

// Create an Express app
const app = express.Router();



//
app.get('/',(req, res, next) =>{
  res.send('<h1> uploud </h1>')
})












// Create a Multer instance with disk storage options
const upload = multer({
  storage: multer.diskStorage({
    // Specify the destination folder for the uploaded files
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'uploads/'));
    },
    // Specify the filename for the uploaded files
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })
});

// Create a route handler for the file upload endpoint
app.post('upload-single', upload.single('file'), (req, res) => {
  // Access the uploaded file and other fields from the request object
  console.log(req.file);
  console.log(req.body);

  // Send a response to the client
  res.send('File uploaded successfully');
});





//================================================================
//================================================================




// Create a route handler for the multiple file upload endpoint
app.post('upload-multible', upload.array('files', 10), (req, res) => {
  // Access the uploaded files and other fields from the request object
  console.log(req.files);
  console.log(req.body);

  // Send a response to the client
  res.send('Files uploaded successfully');
});




app.get('/', (req, res) => { 
  res.send('<h1> hello </h1>');
});



module.exports = {mltr:app};