var express = require('express');
var router = express.Router();
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
router.post('/', function(req, res) {

	var global = require('../js/global.js');
	 
    //res.status(500).send({ error: 'something blew up' }); 
    var restApi = require('../js/restApi.js'); 
    restApi.ajax(res, {
        host: global.host,
        port: global.port,
        path: global.apiControllers.login
    }, req.body);
});

router.get('/', function(req, res) {

 console.log(555);
    res.end(JSON.stringify({
        msg: "O11K",
        msg1:'000kk'
    }));

});

module.exports = router;
