var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'user',
        password: 'user',
        database: 'db',
        port: 3306
    });
};

module.exports = function() {
    return connMySQL;  
};