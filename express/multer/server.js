const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure storage (files will be saved in 'uploads' folder)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // make sure this folder exists
  },
  filename: function (req, file, cb) {
    // Save with original filename
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route to handle single file upload from form field 'avatar'
app.post('/upload', upload.single('avatar'), (req, res) => {
  console.log(req.file);  // File info
  res.send('File uploaded successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
