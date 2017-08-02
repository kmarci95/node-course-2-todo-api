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
    
//    db.collection('Todos').deleteMany({text: 'Edit lunch'}).then((result) => {
//       console.log(result); 
//    });
    
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
//    
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });
    
//    db.collection('Users').deleteMany({name: 'Marci'}).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5981e7ffd582de05760b40ed')}).then((result) => {
        console.log(result);
    });

    //db.close();
});





