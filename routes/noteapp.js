var express = require('express');
var router = express.Router();
var db = require('../js/mongoHelper.js');
db.uri = "mongodb://192.168.91.101:27017/noteApp";
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

router.get('/getList', function(req, res) { 
    // db.insert('Notes', [{
    //     title: '44',
    //     content: 'myname'
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
    db.select('Notes', {}, function(result) {
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
                msg: result,
                msg1: result
            }));
        }


    })
});



module.exports = router;