const express=require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router=express.Router();
const path=require('path');

router.use('/',express.static(path.join(__dirname,'front-end/tic-tac-toe')));

io.on('connection', () => {
    console.log('Socket connection...');
});

//server.listen(80);

module.exports=router;