//setting up a backend

const port = 5000

const path = require('path')


const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use('/api', router)

server.listen(port, () => console.log(`JSON SERVER IS RUNNING ON PORT ${port} PRESS CTRL^C TO STOP`))
