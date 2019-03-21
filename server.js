const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body Parser Mddleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server runing on port ${port}`));