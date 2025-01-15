const fs = require('fs');


const stream = fs.createReadStream('./text.txt',{ start: 0}); 
stream.on('data', (data) => {
  console.log(data.toString());
})

console.log('end T');


