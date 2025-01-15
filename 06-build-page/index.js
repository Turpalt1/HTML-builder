const fs = require('fs');
fs.readdir('./', (err, data) => {
  if (err) throw err;
  console.log(data);
  if (!data.includes('project-dist')) {
    fs.mkdir('project-dist', (err) => {
      if (err) throw err;
      console.log('succes');
    });
  }
});

fs.readdir('./styles', (err, data) => {
  if (err) throw err;
  let str = '';
  let fileRead = 0;
  for (let i = 0; i < data.length; i += 1) {
    const arr = data[i].split('.');
    console.log(arr, arr[arr.length - 1]);
    if (arr[arr.length - 1] === 'css') {
      fs.readFile('./styles/' + data[i], (err, dataText) => {
        if (err) throw err;
        // console.log(data[i], dataText);
        str += dataText;
        fileRead += 1;
        if (fileRead === data.length) {
          // console.log(str,'str');
          fs.writeFile('./project-dist/style.css', str, (err) => {
            if (err) throw err;
            console.log('Успешно');
          });
        }
      });
    }
  }
});

fs.readdir('./project-dist', (err, data) => {
  if (err) throw err;
  console.log(data);
  if (!data.includes('assets')) {
    fs.mkdir('./project-dist/assets', (err) => {
      if (err) throw err;
      console.log('succes assets');
    });
  }
});

fs.readdir('./assets', (err, data) => {
  if (err) throw err;
  console.log(data);
  for (const key of data) {
    fs.readFile('./assets/' + key, (err, data) => {
      if (err) throw err;
      console.log(key, data);
      fs.writeFile('./project-dist/' + key, data, (err) => {
        if (err) throw err;
        console.log('Успешно assets');
      });
    });
  }
});
