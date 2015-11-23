var express = require('express');
var router = express.Router();

//var db = require('../js/dbHelper.js');

var db = require('../js/mongoHelper.js');
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

    console.log(666);
    // db.insert('storeCollection', [{
    //     version: '44',
    //     segment: 'myname'
    // }], function(result) {

    //     if (!result.success) {
    //         console.log(result.msg);

    //     };
    //     if (result.success) {
    //         //result.data.result.ok   成功1 bool
    //         // result.data.result.n   受影响行数
    //         // result.data.ops  插入的数据 [{},{}]
    //         // result.data.insertedCount    插入数量
    //         // result.data.insertedIds 插入的Id ["",""]
            
    //         console.log("insert====" + JSON.stringify(result));
    //     };



    // });
    // db.update('storeCollection', {
    //     version: '44+' 
    // }, {
    //     $set: {
    //         segment: 'updatename',
    //         version: '44+'
    //     }
    // }, function( result) {

    //     if (!result.success) {
    //         console.log(result.msg);

    //     };
    //     if (result.success) {
    //         //result.data.result.ok   成功1 bool
    //         // result.data.n  受影响行数 
    //         // result.data.nModified   被修改数量
           
    //         console.log("update====" + result);

    //     };


    // });
    // db.delete('storeCollection', {
    //     version: '44',
    //     segment: 'myname'
    // }, function( result) {

    //     if (!result.success) {
    //         console.log(result.msg);

    //     };
    //     if (result.success) {
    //         //result.data.result.ok   成功1 bool
    //         // result.data.n  受影响行数 
    //         console.log("delete====" + result);
    //     };


    // });
    

    db.select('storeCollection', {}, function(result) { 
        if (!result.success) {
            res.end(JSON.stringify({
                msg: result.msg,
                msg1: result.msg
            }));
        };
        if (result.success) {

            //result 结果集合 [{},{}]
            console.log("select====" + result);
            result.data.forEach(function(item) {
                console.log("foreach====" + item);
            });
            res.end(JSON.stringify({
                msg: result.data,
                msg1: result.data[0].segment
            }));
        }


    })



});



module.exports = router;