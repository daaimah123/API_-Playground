//general search
'http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb'
//movie id
'http://www.omdbapi.com/?i=tt3896198&apikey=thewdb'

require('dotenv').config();
var express = require('express');
var app = express();
// var request = require('request');
const fetch = require('node-fetch');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
        res.render('search')
})

//TODO: need to handle when query is undefined => try again message

app.get('/results', (req, res) => {
    var searchQuery = req.query.search;

    var nonPrivateAccessToUrl = '&apikey=thewdb';
    var url = 'http://www.omdbapi.com/?s=';
    var newUrl = url + searchQuery + nonPrivateAccessToUrl;

    fetch(newUrl)
        .then(req => req.json())
        .then((data, error)=> {
            if(res.status(200) && !error){
                res.render('results', {data: data})
            }})
        .catch(error => console.log(error.message))
})

//start server with node app.js
app.listen(process.env.PORT, () => {
    console.log(`<<<<<<<<===Server running on port ${process.env.PORT}===>>>>>>>`);
   });
   