const user = require('../models/user')

const UserController = {
        getUsers: (req,res) => {
        
        user.getUsers((err,users)=>{
            if(err){
                return res.status(500).json({message: 'Erro ao buscar usuarios'});
            }
            res.json(users)
        })
    },

    createUser: (req, res) => {
        const newUser = req.body;
        user.createUser(newUser, (err, results)=> {
            if(err){
                return res.status(500).json({message: 'Erro ao criar usuario'})
            }

            res.status(201).json({message: 'Usuario criado com sucesso'})
        })
    },

    updateUser: (req, res) => {
        const userId = req.params.id
        const updatedUser = req.body

        user.updateUser(userId,updatedUser, (err, results) => {
            if(err){
                return res.status(500).json({message: 'Erro ao atualizar usuario'})
            }
            res.json({ message: 'Usuário atualizado com sucesso!' });
        })
    },

    deleteUser: (req, res) => {
        const userId = req.params.id;
        user.deleteUser(userId, (err, results)=> {
            if(err){
                return res.status(500).json({message: "erro ao deletar o usuario"})
            }

            res.json({message: 'Usuario excluido com sucesso'})
        })
    }

}

module.exports = UserController