const fs = require('fs');

// fs.writeFile('file.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File created successfully');
// });
fs.writeFile("read2.txt", "Hello Arif vi",(err) => {
  if (err) throw err;
  console.log("File created successfully");
})