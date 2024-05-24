const fs = require('fs');

fs.readFile('Node2.txt', 'utf8', (err, data) => {
    console.log("Callback Async");
    console.log("Ho letto in modo asincrono: " + data);
});
const file = fs.readFileSync('Node2.txt', 'utf8');
console.log('Ho letto: ' +file);
console.log('----------');