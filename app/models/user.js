var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// Definiere User
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    }

});

//Hash-Funktion
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//überprüft ob das Passworld valid ist
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//Erstellt den User
module.exports = mongoose.model('User', userSchema);