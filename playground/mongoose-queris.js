const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

//var id = '59844300fcc21c04610d256b';
//
//if (!ObjectId.isValid(id)){
//    console.log('Id not valid');
//}
//
////Todo.find({
////    _id: id
////}).then((todos) => {
////    console.log('Todos: ', todos);
////});
////
////Todo.findOne({
////    _id: id
////}).then((todo) => {
////    console.log('Todo: ', todo);
////});
//
//Todo.findById(id).then((todo) => {
//    if(!todo){
//        return console.log('Id not found');
//    }
//    console.log('Todo By ID: ', todo);
//}).catch((e) => console.log(e));


var userID = '59831499ee1758046e4df8fc';

User.findById(userID).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by id: ', JSON.stringify(user,undefined, 2));
}).catch((e) => console.log(e));
