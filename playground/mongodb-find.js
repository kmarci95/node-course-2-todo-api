//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

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

//    db.collection('Todos').find({
//        _id: new ObjectID('5981db9265e74d0501d77c85')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (error) => {
//        console.log('Unable to fetch todos', err);
//    });
    
     db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (error) => {
        console.log('Unable to fetch todos', err);
    });
    
    db.collection('Users').find({name: 'Marci'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (error) => {
        console.log('Unable to fetch users', err);
    });
    
    
    
    //db.close();
});





