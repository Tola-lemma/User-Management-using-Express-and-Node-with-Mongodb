const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
//log request
app.use(morgan('tiny'))

// parse request to bodyparser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine with .ejs extension
app.set('view engine', 'ejs')
// app.set('views',path.resolve(__dirname, 'views/ejs'))

//load assests
app.set('/CSS',express.static(path.resolve(__dirname, 'assets/CSS')));
app.set('/img',express.static(path.resolve(__dirname, 'assets/img')));
app.set('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.get('/',(req,res) => {
   res.render('index');
});
app.get('/add-user',(req,res) => {
    res.render('add_user');
 });
 app.get('/update-user',(req,res) => {
    res.render('add_user');
 });
app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT} ...`))