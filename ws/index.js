var PORT=3000;
var express = require('express');
var dispositivos = require('../datos.json');
var mysql = require('./mysql');
var app = express();

app.use(express.json());
app.use(express.static('.')); //Para servir archivos estaticos

app.get('/dispositivos', function(req,res){
    //Obtiene la lista de los dispositivos de la base de datos
    mysql.query('SELECT * FROM Devices', function(err, rta, field){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });


   // res.json(dispositivos); //obtiene la lista de dispositivos del archivo datos.json
})

app.get('/dispositivos/:id', function(req,res){

    //Realizo una consulta en la base de datos para obtener el dispositivo con ese id
    mysql.query('SELECT * FROM Devices where id=?', [req.params.id], function(err, rta, field){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(rta);
    });

    //Obtiene los datos del arhivo datos.json
    /*let datofiltrado = dispositivos.filter(item=>{
        return item.id == req.params.id;
    });

    res.json(datofiltrado);*/
})

/* Espera en el body dos parametros id y state*/
app.post('/dispositivos',function(req,res){

    //Modiico la tabal en la base de datos para obtener el dispositivo con ese id
    console.log(req.body);

    mysql.query('UPDATE Devices SET state=? WHERE id=?',[req.body.state, req.body.id], function(err ,rta, field){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(JSON.stringify(req.body)); 
    });

    //Obtiene los datos del archivo datos.json
    /*
    let datofiltrado = dispositivos.filter(item=>{
        return item.id == req.body.id;
    });

    if(datofiltrado.length>0){
        datofiltrado[0].state = req.body.state;
    }

    res.json(datofiltrado);*/
});

app.listen(PORT, function(){
    console.log("Api Levantada" + PORT);
});