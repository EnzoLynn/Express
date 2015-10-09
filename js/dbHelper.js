var uri = "mongodb://localhost:27017/test";
var db = require('mongoskin').db(uri);

db.getList = function(collectionName,fillter,callback){
	
	 db.collection(collectionName).find(fillter).toArray(function(err, result) {
        if (err) throw err;
        if (callback) {callback(err,result)};
        return result;
      
    });

}

 


module.exports = db;
