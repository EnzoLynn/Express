var uri = "mongodb://localhost:27017/test";
var db = require('mongoskin').db(uri);




module.exports = db;
