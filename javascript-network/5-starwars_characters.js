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
        const response = JSON.parse(parts);
        for (let i = 0; i < response.characters.length; i++){
            let characters = response.characters;
            request.get(characters[i], { encoding: 'utf-8' })
                .on('data', (data) => {
                    const res = JSON.parse(data);
                    console.log(res.name);
                })
        }
    })
