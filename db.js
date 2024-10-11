const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "titi9632",
    database: "node_puro"
})


connection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
        connection.rollback();
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados.');
   
})

module.exports = connection;