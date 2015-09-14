var express = require('express');
var router = express.Router();
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
router.post('/', function(req, res) {


    // res.status(500).send({ error: 'something blew up' }); 
    var restApi = require('restApi.js'); 
    restApi.ajax(res, {
        host: '127.0.0.1',
        port: 818,
        path: '/login/ajaxLogin'
    }, req.body);
});

module.exports = router;
