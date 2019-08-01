module.exports = function(sequelize, DataTypes) {
    var Twerp = sequelize.define("Twerp", {
        author: DataTypes.STRING,
        content: DataTypes.TEXT
    });
    return Twerp;
}