const fs = require('fs');
const rd = require('readline');

const rl = rd.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('txt');
function askQestions() {
  rl.question('введите текст: ', (answer) => {
    let textR;
    fs.readFile('./text.txt', (er, data) => {
      if (er) {
        console.log('create');
      };
      textR = data ?  data.toString() : '';
      fs.writeFile('./text.txt', textR + answer + '\n', (err) => {
        if (err) throw err;
      });
    });
    console.log('you ', textR + answer);
      
    if (answer) {
      console.log('end');
    }
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
          console.log('Выход из программы.');
          process.exit();
      }
    });
    askQestions();
  });
}

askQestions();

// fs.readFile('./t1.txt', (err, data) => {
//   if (err) throw err;

//   fs.writeFile('tt.txt', data + ' Hello', (err) => {
//     if (err) throw err
//   });
//   let obj = JSON.parse(data);
//   console.log('my name: ' + obj.name + ' and me age ' + obj.age);
// });