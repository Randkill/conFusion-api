//this will complete the implementation of /dishes and /dishes/:dishId endpoints!
//Also this module can be imported and be MOUNTED in index.js
const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();    //this will declare dishrouter.js as an Expres Router
dishRouter.use(bodyParser.json());

//it supports below method:
//it means that we can chaining all the GET,POST,PUT,DELETE methods easier to this dishrouter
dishRouter.route('/').all((req,res,next) => {      //app.all() : no matter which method of GET,POST,PUT etc is called
    res.statusCode = 200;                   //this app.all() will be executed first!
    res.setHeader('Content-Type', 'text/html');
    next();        //it means it will continue on to look for additional specifications 
                   //which match /dishes end point (means it will continue till the next word)
}).get((req,res,next) => {
    res.end('Will send all the dishes to you!');
}).post((req,res,next) => {
    res.end('Will add the dish : ' + req.body.name + 
    ' with details : ' + req.body.description);
}).put((req,res,next) => {
    res.statusCode = 403;       //not supported code
    res.end('PUT operation not supported on /dishes !');
}).delete((req,res,next) => {
    res.end('Deleting all the dishes!');
});

//now handling /dishes/:dishId

dishRouter.route('/:dishId').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
}).get((req, res, next) => {
    res.end('Will send details of the dish : ' +
    req.params.dishId + ' to you!');
}).post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /dishes/' +
    req.params.dishId +'!');
}).post((req, res, next) => {
    res.write('Updating the dish : ' + req.params.dishId + '\n');      //add a line to reply messege
    res.end('Will update the dish : ' +
    req.body.name + ' with details : ' +
    req.body.description);
}).delete((req, res, next) => {
    res.end('Deleting dish : ' +
    req.params.dishId);
});

module.exports = dishRouter;