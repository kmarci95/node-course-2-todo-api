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
//    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new Object('5981ec277635103cc6693e07')
//    }, {
//        $set: {
//            completed: false
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5981dd38ae350505201e27af')
    }, {
        $set: {
            name: 'Marci'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});





