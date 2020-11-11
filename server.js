const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000
const io= require('socket.io')(http)


app.get('/',(req,res)=>
{
    //res.send('hello');
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname + '/public'))

http.listen(PORT, ()=>
{
    console.log(`listening on port ${PORT}`)
})

io.on('connection',(socket)=>
{
    console.log('connected.....')
    socket.on('message',(msg)=>
    {
        //console.log(msg)
        socket.broadcast.emit('message',msg)
        
    })
})



