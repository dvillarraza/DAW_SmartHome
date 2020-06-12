var express = require('express');
var dispositivos = require('../datos.json')
var app = express();

app.use(express.json());
app.use(express.static('.')); //Para servir archivos estaticos

app.get('/dispositivos', function(req,res){
    res.json(dispositivos);
})

app.get('/dispositivos/:id', function(req,res){
    let datofiltrado = dispositivos.filter(item=>{
        return item.id == req.params.id;
    });

    res.json(datofiltrado);
})

/* Espera del dos parametros id y state*/
app.post('/dispositivos',function(req,res){
    let datofiltrado = dispositivos.filter(item=>{
        return item.id == req.body.id;
    });

    if(datofiltrado.length>0){
        datofiltrado[0].state = req.body.state;
    }

    res.json(datofiltrado);
});

app.listen(8001, function(){
    console.log("Api Levantada");
});