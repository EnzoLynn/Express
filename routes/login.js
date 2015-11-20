var express = require('express');
var router = express.Router();

var db = require('../js/dbHelper.js');
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
router.post('/', function(req, res) {

	var global = require('../js/global.js');
	 console.log(req.body);
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
  db.getList('storeCollection',{}, function(err, result) {
        
        if (err) {
             res.end(JSON.stringify({
                msg: err,
                msg1:err
            }));
        };
          res.end(JSON.stringify({
                msg: result,
                msg1:result[0].segment
            }));
       
    })
  

});

module.exports = router;
