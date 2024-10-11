const db = require('../db')

const User = {
    getUsers: () => {
        const query = "SELECT * FROM users";
        db.query(query, (err, results) => {
            if(err){
                return err || null

            }
            return results
        })
    },

    createUser: (response, userdata) => {
        const query = "INSERT INTO users(name, email) VALUES(?, ?)";
        db.query(query, [userdata.name, userdata.email], (err, results) => {
            if(err){
                return err || null
            }

            return results
        })
    },

    updateUser: (response, userdata, id) => {
        const query = "UPDATE users SET name = ?, email = ? WHERE id = ?" ;
        db.query(query, [userdata.name, userdata.email], (err, results) => {
            if(err){
                return err || null
            }

            return results
        })
    },

    deleteUser: (response, id) => {
        const query = "DELETE FROM users WHERE id = ?";

        db.query(query, [id], (err, results)=>{
            if(err){
                return err || null
            }
            return results
        })
    }


    
}

module.exports = User