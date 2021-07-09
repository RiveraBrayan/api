const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 4000;

app.use(express.json());
//app.use(bodyParser.json())
app.use(cors());

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers',  'Content-Type');
    next();
})

//get
app.get('/api/get', (req, res) => {
    res.send(
       '<div><h1>Satevoston  minut</h1></div>'
    );
});
//post
app.post('/api/post', (req, res) => {
    let body = req.body;
    res.send({
        "thing":"Un T-rex es poderoso pero la familia lo es mas"
    })
});

//suma
app.post('/api/sum', (req, res) => {
    let body = req.body;
    res.send({
        "thing":"suma"
    })
});

//exam

//put
app.put('/api/put', (req, res) => {
    let response = req.body;
    res.send({
        "greeting":"response"
    });
});
//delete
app.delete('/api/delete', (req,res) => {
    let body = req.body;
    res.send({"delete":'item deleted'});
});

app.listen(port,function(){
    console.log('Goodness at port: ' + port);
});