var url = require('url');
var address = 'https://www.petanikode.com/search.php?year=2018&&month=february';
var q = url.parse(address, true);

// Url parse result
console.log('Protocol: ' + q.protocol);
console.log('Hostname: ' + q.hostname);
console.log('Pathname: ' + q.pathname);
console.log('Params: ' + q.search);

// Get String query as an object
var qdata = q.query;
console.log(qdata);
