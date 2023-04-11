const express=require('express');
const app=express();
const path=require('path');
const tic_tac_toe=require('./tic-tac-toe');

//app.use(express.static('./form'));

app.use('/tic-tac-toe',tic_tac_toe);

/*app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'));
    console.log('pawfncsjl');
})*/

app.get('/',(req,res)=>{
    res.send('proba de microfon');
})

app.listen(80);