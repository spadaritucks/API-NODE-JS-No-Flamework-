const db = require('../db')

const User = {
    getUsers: (callback) => {
        const query = "SELECT * FROM users";
        db.query(query, (err, results) => {
            if (err) {
                return callback(err, null); // Chama o callback com erro
            }
            return callback(null, results); // Chama o callback com resultados
        });
    },

    createUser: (userdata, callback) => {
        const query = "INSERT INTO users(name, email) VALUES(?, ?)";
        db.query(query, [userdata.name, userdata.email], (err, results) => {
            if (err) {
                return callback(err, null); // Chama o callback com erro
            }
            return callback(null, results); // Chama o callback com resultados
        });
    },

    updateUser: (userdata, id, callback) => {
        const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        db.query(query, [userdata.name, userdata.email, id], (err, results) => {
            if (err) {
                return callback(err, null); // Chama o callback com erro
            }
            return callback(null, results); // Chama o callback com resultados
        });
    },

    deleteUser: (id, callback) => {
        const query = "DELETE FROM users WHERE id = ?";
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err, null); // Chama o callback com erro
            }
            return callback(null, results); // Chama o callback com resultados
        });
    }
}

module.exports = User
