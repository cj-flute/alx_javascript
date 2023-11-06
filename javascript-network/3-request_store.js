#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];

request.get(url)
    .pipe(fs.createWriteStream('body_response.html'), (body) => {
        const body_response = JSON.stringify(body);
        console.log(body_response);
    })
