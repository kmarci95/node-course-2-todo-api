var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
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
//
//var newUser = new User({
//    email: 'kelemenmarci95@hotmail.com'
//});
//
//newUser.save().then((doc) => {
//    console.log('Saved User', doc);
//}, (e) => {
//    conolse.log('Unable to save User', e);
//});

module.exports = {User};