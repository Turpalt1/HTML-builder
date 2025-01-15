const fs = require('fs');

fs.readdir('./secret-folder', (err, data) => {
  if (err) throw err;
  for (let key in data) {
    console.log(data[key]);
    fs.stat('./secret-folder/' + data[key], (er, stat) => {
      if (err) console.log(err);
      console.log(data[key] +' - ' + stat.size);
    });
  }
});
