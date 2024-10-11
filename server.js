const http = require('http');
const {apiRoutes}= require('./routes/api')

const server = http.createServer(apiRoutes)


const port = 3000
server.listen(port, function (){
    console.log("Server listening on port " + port)
})