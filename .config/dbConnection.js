var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/NiMap';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log('Database Connected!');
  db.close();
});
