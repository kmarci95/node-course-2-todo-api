var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//var newTodo = new Todo({
//    text: 'Cook dinner'
//});
//
////newTodo.save().then((doc) => {
////    console.log('Saved Todo', doc);
////}, (e) => {
////    console.log('Unalbe to save Todo');
////});
//
//
//var newTodo2 = new Todo({
//    text: 'Edit this video',
//    completed: false,
//    completedAt: 123
//});
//
////newTodo2.save().then((doc) => {
////    console.log('Saved Todo', doc);
////}, (e) => {
////    console.log('Unable to save Todo');
////});

module.exports = {Todo};