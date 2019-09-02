const request = require('request');
const fetch = require('node-fetch');

/* BOTH REQUESTS SHOULD RETURN: "Leanne Graham lives at Gwenborough" */

request('http://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
    // eval(require('locus')) //access variable inspection via tool
    if (error){
        console.log('error:', error.message); // Print the error if one occurred
    } else if (!error && response.statusCode === 200){
        var parsedData = JSON.parse(body);
        console.log(`============ API request with request npm & callbacks ============ \n ${parsedData.name} lives at ${parsedData.address.city}`)
    }
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});


fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(body => body.json()) //turns response into JSON
    .then(data => 
        console.log(`============ API request with fetch-node npm & promises ============ \n ${data.name} lives at ${data.address.city}`))
    .catch(error => console.log(error.message))