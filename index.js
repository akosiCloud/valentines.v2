const express = require('express');
const path = require('path');
const http = require('http');
const valRoutes = require('./server/routes/valRoutes');
const valControllers = require('./server/controllers/valControllers');
//require('dotenv').config();

const app = express();

//const PORT = process.env.PORT;
//const HOSTNAME = process.env.HOSTNAME;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

// app.listen(PORT, ()=>
// console.log(`Server Running at ${PORT}/`))

app.use('/invitation',valRoutes)






