const fs = require('fs');
fs.readdir('./', (err, data) => {
    if (err) throw err;
    console.log(data);
    if (!data.includes('files-copy')) {
        fs.mkdir('files-copy', (err) => {
            if (err) throw err;
            console.log('succes');
        })
    }
});
fs.readdir('./files', (err, data) => {
    if (err) throw err;
    for (const key of data) {
        fs.readFile('./files/' + key, (err, data) => {
            if (err) throw err;
            console.log(key, data)
            fs.writeFile('./files-copy/' + key, data, err => {
                if (err) throw err;
                console.log('Успешно')
              });
        })
    }
})

fs.copyFile('./files/test-text.txt', 'text.txt',(err) => {
    if (err) throw err;
    console.log('succes');
});