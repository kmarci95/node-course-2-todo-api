//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//
//console.log(obj);

var user = {
    name: 'marci',
    age: 21
};

var {age} = user;

console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, res) => {
//        if (err) {
//            return console.log('Unalbe to insert Todo', err);
//        }
//        console.log(JSON.stringify(res.ops, undefined, 2));
//    });
    
//    db.collection('Users').insertOne({
//        name: 'Marci',
//        age: 21,
//        location: 'Nemesvámos'
//    }, (err, res) => {
//        if (err) {
//            return console.log('Unable to insert Users', err);
//        }
//        console.log(JSON.stringify(res.ops, undefined, 2), res.ops[0]._id.getTimestamp());
//    });
    
    db.close();
});





