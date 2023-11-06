#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const parts = [];

request.get(url)
    .on('data', (data) => {
        parts.push(data);
    })
    .on('complete', () => { 
        const body_response = JSON.parse(parts);
        console.log(body_response);
    })
    .pipe(fs.createWriteStream('body_response.html', { encoding: 'utf-8' }))