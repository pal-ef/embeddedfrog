const express = require('express');
const app = express();
const path = require('path')

// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 5000);


// Middleware

// Static Files
app.use(express.static(path.join(__dirname + '/public')));

// Routes
app.use(require('./routes'));


// Listener
app.listen(app.get('port'), () =>{
    console.log("working");
});