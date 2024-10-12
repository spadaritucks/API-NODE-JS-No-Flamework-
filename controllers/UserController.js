const user = require('../models/user')





const UserController = {

    getUsers:(req, res) => {
        user.getUsers((err,users) => {
            if(err){
                res.writeHead(500);
                return res.end(JSON.stringify({message: 'Erro ao buscar usuarios'}))
            }
            res.writeHead(200);
            res.end(JSON.stringify(users))
        })
    },

    createUser: (req, res) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', ()=>{
            try{
                const newUser = JSON.parse(body);
                if(!newUser.name || !newUser.email){
                    res.writeHead(400);
                    return res.end(JSON.stringify({message: "Nome e email são obrigatorios"}))
                }
                user.createUser(newUser, (err, results)=>{
                    if(err){
                        res.writeHead(500);
                        return res.end(JSON.stringify({message: 'Erro ao criar usuario'}))
                    }

                    res.writeHead(201);
                    return res.end(JSON.stringify({message: "Usuario criado com sucesso"}))
                })
            }catch(error){
                res.writeHead(400);
                return res.end(JSON.stringify({message: "Corpo da Requisição invalido"}))
            }
        })

    },

    updateUser: (req, res, id) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', ()=> {
            try{
                const updatedUser = JSON.parse(body);
                if(!updatedUser.name || updatedUser.email){
                    res.writeHead(400);
                    return res.end(JSON.stringify({message: "Nome e email são obrigatorios"}))
                }
                user.updateUser(updatedUser, id, (err, results) => {
                    if(err){
                        res.writeHead(500)
                        return res.end(JSON.stringify({message: "Falha ao atualizar o usuario"}))
                    }
                    res.writeHead(200)
                    return res.end(JSON.stringify({message: "Usuario atualizado com sucesso!"}))
                } )
            }catch(error){
                res.writeHead(400);
                return res.end(JSON.stringify({message: "Corpo da requisição invalido"}))
            }
        })
    },

    deleteUser: (req, res, id) => {
        user.deleteUser(id, (err, results) => {
            if (err) {
                res.writeHead(500);
                return res.end(JSON.stringify({ message: 'Erro ao deletar o usuário' }));
            }
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Usuário excluído com sucesso' }));
        });
    }


}


module.exports = UserController
