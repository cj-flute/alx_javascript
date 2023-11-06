#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const parts = [];

request.get(url)
    .on('data', (data) => {
        parts.push(data);
    })
    .on('complete', () => { 
        const response = JSON.parse(parts);
        let count = 0;
        for (let i = 0; i < response.results.length; i++){
            if (response.results[i].characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
                count++;
            }
        }
        console.log(count);
    })
