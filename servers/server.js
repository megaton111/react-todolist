const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors') ; 
const port =process.env.PORT || 3002;

const api = require('./routes/index') ; 

app.use(bodyParser.json());
app.use(cors()) ; 
app.use('/api', api );

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})