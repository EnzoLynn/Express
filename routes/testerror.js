var express = require('express');
var router = express.Router();
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
router.get('/', function(req, res) {
	console.log(123);
    res.render('error', {
        message: 'error ,,,',
        error: {status:200}
    });
});

module.exports = router;

