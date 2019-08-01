const crypto = require("crypto");
var config = require("../../config/config.json");

if (config.ENV_VAR_TEST){
    var secretkey = process.env.ENV_VAR_TEST;
}else{
    var secretkey = "lovelylads";
}

var key = {
    encrypt: function(pass){
        var mykey = crypto.createCipher('aes-128-cbc', secretkey);
        var encrypted = mykey.update(pass, 'utf8', 'hex');
        encrypted += mykey.final('hex');
        return encrypted;
    },

    decrypt: function(pass){
        var mykey = crypto.createDecipher('aes-128-cbc', secretkey);
        var decrypted = mykey.update(pass, 'hex', 'utf8');
        decrypted += mykey.final('utf8');
        return decrypted;
    }
};

module.exports = key;