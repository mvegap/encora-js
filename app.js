const fs = require('fs');

function square(number) {
  console.log(Math.pow(number, 2));
}

const data = fs.readFileSync('data.csv', 'utf8');

if (!data) {
  console.log('Empty data on file');
}

const lines = data.split('\n');

for (const item of lines) {
  const number = parseInt(item, 10);
  square(number);
}
