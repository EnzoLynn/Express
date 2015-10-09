var express = require('express');
var router = express.Router();
//var path = require('path');
//var app = express();
//app.use(express.static(path.join(__dirname, 'node_modules')));
/* GET users listing. */
var db = require('../js/dbHelper.js');

router.get('/', function(req, res) {
    db.getList('storeCollection', function(result) {
        res.render('error', {
            message: result[0].segment,
            error: {
                status: 200
            }
        });
    })

    // db.collection('storeCollection').find().toArray(function(err, result) {
    //     if (err) throw err;
    //     res.render('error', {
    //      message:result[0].segment,
    //      error: {
    //          status: 200
    //      }
    //  });
    // });
    console.log(123);

});

router.get('/1', function(req, res) {


    console.log(444);

});

module.exports = router;
