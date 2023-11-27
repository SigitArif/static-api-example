const fs = require('fs');
const path = require('path');
const provinsi = require('../model/provinsi');
// Define the relative file path
const filePath = path.join(__dirname, 'provinsi.json');

function getProvinsiSQL(req, res, next){
  provinsi.findAll()
        .then(function(data){
          res.json(data);
        })
}

function getProvinsi(req, res, next){
    let provinceFs = [];
    fs.readFile(filePath, "utf8", (err, jsonString) => {
        if (err) {
          console.log("Error reading file from disk:", err);
          res.status(500).json({ error: 'Error reading JSON file' });
          return;
        }
        try {
          provinceFs = JSON.parse(jsonString);
          res.json({provinceFs});
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
      });
}

function addProvinsi(req, res, next) {
    // Get the data to add from the request body (assuming it's in JSON format)
    const newData = req.body;
  
    // Read the existing data from the JSON file
    fs.readFile(filePath, 'utf8', (err, jsonString) => {
      if (err) {
        console.log('Error reading file from disk:', err);
        res.status(500).json({ error: 'Error reading JSON file' });
        return;
      }
      try {
        // Parse the existing data
        const existingData = JSON.parse(jsonString);
  
        // Add the new data to the existing data
        existingData.push(newData);
  
        // Convert the combined data back to JSON
        const updatedData = JSON.stringify(existingData, null, 2);
  
        // Write the updated data back to the file
        fs.writeFile(filePath, updatedData, (writeErr) => {
          if (writeErr) {
            console.log('Error writing file:', writeErr);
            res.status(500).json({ error: 'Error writing JSON file' });
          } else {
            res.json({ message: 'Data added successfully' });
          }
        });
      } catch (parseError) {
        console.log('Error parsing JSON string:', parseError);
        res.status(500).json({ error: 'Error parsing JSON string' });
      }
    });
  }

module.exports = {
    getProvinsi, 
    addProvinsi, 
    getProvinsiSQL
}