var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'dienstdb1.cqya99yootz4.eu-central-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'Dienst343678',
    database : 'Iglotex2293'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;