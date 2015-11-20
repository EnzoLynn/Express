var uri = "mongodb://192.168.91.101:27017/test";
var guid = require('../js/guid.js');
var dbControl = {
	dbPools:{}
};

dbControl.getList = function(collectionName,fillter,callback){
	 var db = require('mongoskin').db(uri);
	 var sign = guid.raw(); 
	 dbControl.dbPools[sign] = db; 
	 db.collection(collectionName).find(fillter).toArray(function(err, result) {
	 	db.close();
	 	delete dbControl.dbPools[sign]; 
        if (err) throw err; 
        if (callback) {callback(err,result)};
        return result;
      
    });

}

 


module.exports = dbControl;
