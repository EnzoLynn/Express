var express = require('express');
var router = express.Router();
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
var uri = "mongodb://localhost:27017/test";
var db = require('mongoskin').db(uri);

router.get('/', function(req, res) {
	 
    db.collection('storeCollection').find().toArray(function(err, result) {
        if (err) throw err;
        res.render('error', {
	        message:result[0].segment,
	        error: {
	            status: 200
	        }
	    });
    });
    console.log(123);
    
});

module.exports = router;
