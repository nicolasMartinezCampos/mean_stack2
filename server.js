var express = require('express'),
    app = express(),
    path = require('path'),
    adminRouter = express.Router();

//send our index.html file to the user for the home page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

//router middleware that will happen on every event
adminRouter.use(function(req, res, next){
    //log each request to the console
    console.log(req.method, req.url);
    //continue doing what we were doing and go to the route
    next();
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

//route middleware to validate :name
adminRouter.param('name', function(req, res, next, name){
    //do validation on name here
    //...validation
    //log something so we know its working
    console.log('doing name validation on ' + name);

    //one validation is done save the new item in the req
    req.name = name;
    //go to the next thing
    next();
});

//route with parameters(http://localhost:1337/admin/hello/:name)
adminRouter.get('/hello/:name', function(req, res){
    res.send('Hello ' + req.name + '!');
});

//apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(1337);
console.log('1337 is the magic port');