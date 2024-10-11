// router.js
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/UserController');

const apiRoutes = (req, res) => {
  const { method, url } = req;

  // Rota GET para listar todos os usuários
  if (method === 'GET' && url === '/users') {
    getAllUsers(req, res);
  }

  // Rota GET para buscar um usuário específico
  else if (method === 'GET' && url.startsWith('/users/')) {
    const id = url.split('/')[2];  // Extrai o ID da URL
    getUserById(req, res, id);
  }

  // Rota POST para criar um novo usuário
  else if (method === 'POST' && url === '/users') {
    createUser(req, res);
  }

  // Rota PUT para atualizar um usuário
  else if (method === 'PUT' && url.startsWith('/users/')) {
    const id = url.split('/')[2];
    updateUser(req, res, id);
  }

  // Rota DELETE para deletar um usuário
  else if (method === 'DELETE' && url.startsWith('/users/')) {
    const id = url.split('/')[2];
    deleteUser(req, res, id);
  }

  // Rota não encontrada
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Rota não encontrada' }));
  }
};

module.exports = { apiRoutes};
