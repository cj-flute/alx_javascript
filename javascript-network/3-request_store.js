#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const parts = [];

request.get(url, { encoding: 'utf-8'})
    .on('body', (body) => {
        parts.push(body);
    })
    .pipe(fs.createWriteStream('body_response.html'), (parts) => {
        const body_response = JSON.stringify(parts);
        console.log(body_response);
    })
