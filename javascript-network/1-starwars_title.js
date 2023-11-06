#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const parts = [];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, {encoding : 'utf-8'})
    .on('data', (data) => {
        parts.push(data);
    })
    .on('complete', () => { 
        const title = JSON.parse(parts);
        console.log(title.title);
    })
