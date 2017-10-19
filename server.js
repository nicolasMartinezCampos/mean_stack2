var express = require('express'),
    app = express(),
    path = require('path'),
    adminRouter = express.Router();

//send our index.html file to the user for the home page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
    res.send('I am the dashboard!');
    });

//users page
adminRouter.get('/users', function(req, res){
    res.send('I show all the users');
});

//posts page
adminRouter.get('/posts', function(req, res){
    res.send('I show all the posts');
});

//apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(1337);
console.log('1337 is the magic port');