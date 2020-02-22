const app = module.exports = require('express')();
const bodyParser = require('body-parser');
const btoa = require('btoa');
const screenShots = require('../controllers/screenShots');


app.get('/', (req, res) => {
  res.send({msg: 'hello! Server is up and running'});
});

app.get('/api/createScreenShot', (req,res) => {
    screenShots.takeScreenShot(res, req.query)
    .catch((err) => {
        res.status(500).send({"message": "Internal Server Error"});
    });
});

app.get('*', (req, res)=>{
    res.status(404).send({"status": 404, "message": "Not Found", "data": "Requested resource was not found!"})

});

