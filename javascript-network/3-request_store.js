const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: node script_name.js URL FILE_PATH');
} else {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFileSync(filePath, body, 'utf-8');
      console.log(`Web content successfully stored in ${filePath}`);
    } else {
      console.error('Failed to fetch data from the URL:', error);
    }
  });
}
