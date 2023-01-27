const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:  String,
    password: String,
    cards: [String]
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;