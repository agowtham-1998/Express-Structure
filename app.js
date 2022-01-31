var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

var usersRouter = require('./Routes/users.routes');
var adminRouter = require('./Routes/admin.routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI = process.env.dbURI;

// mongoose
// 	.connect(dbURI, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log("Database Connected"))
// 	.catch((err) => console.log(err));

mongoose.connect('mongodb://127.0.0.1:27017/Admin-User',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
     }).then(()=>
    console.log("Database Connected!")).catch(err=>console.log(err));

mongoose.Promise = global.Promise;

app.use('/users', usersRouter);
app.use('/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});

app.listen(5100,()=>{
    console.log("Server Running Successfull")
});

module.exports = app;