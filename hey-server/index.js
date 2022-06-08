const { Socket } = require('dgram')

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 4000


io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    })
})

http.listen(port, ()=>{
    console.log('listening on port 4000')
})