const fs = require('fs');

fs.readdir('./styles', (err, data) => {
  if (err) throw err;
  let str = '';
  let fileRead = 0;
  let len = data.length;
  for (let i = 0; i < data.length; i += 1) {
    const arr = data[i].split('.');
    if (!(arr[arr.length - 1] === 'css')) len--;
    console.log(arr, len)
    if (arr[arr.length - 1] === 'css') {
      fs.readFile('./styles/' + data[i], (err, dataText) => {
        if (err) throw err;
        // console.log(data[i], dataText);
        str += dataText;
        fileRead += 1;
        if (fileRead === len) {
          console.log(str,'str');
          fs.writeFile('./project-dist/bundle.css', str, (err) => {
            if (err) throw err;
            console.log('Успешно');
          });
        }
      });
    }
  }
});
