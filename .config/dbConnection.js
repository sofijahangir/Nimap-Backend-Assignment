var MongoClient = require('mongodb').MongoClient;
var url =
  'mongodb+srv://nimap:nimap@cluster0.cimciyw.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log('Database Connected!');
  db.close();
});
