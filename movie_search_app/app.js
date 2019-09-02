//general search
'http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb'
//movie id
'http://www.omdbapi.com/?i=tt3896198&apikey=thewdb'

require('dotenv').config();
var express = require('express');
var app = express();
var request = require('request');

app.get('/results', (req, res) => {
    request('http://www.omdbapi.com/?s=california&apikey=thewdb', (error, response, body) => {
        if (!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.send(data['Search'][0])
        }
    });
});

//start server with node app.js
app.listen(process.env.PORT, () => {
    console.log(`<<<<<<<<===Server running on port ${process.env.PORT}===>>>>>>>`);
   });
   