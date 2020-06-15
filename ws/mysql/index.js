var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysql-server',
    port: '3306',
    user: 'root',
    password: 'userpass',
    database: 'DAW'
});

connection.connect(function(err){
    if(err){
        console.error('Error al conectar: ' + err.stack);
        return;
    }
    console.log('Conectado con id: ' + connection.threadId);
});

module.exports = connection;