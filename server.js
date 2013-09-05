var express = require('express')
  ,      fs = require('fs')
  ,     app = express();

var file = __dirname + '/teamstats.json';

app.configure(function() {
    // app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(__dirname));
});

// Homepage
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

// Team page
app.get('/team.html', function(req, res) {
    res.sendfile('team.html');
});

// Team stats
app.get('/stats.html', function(req, res) {
    res.sendfile('stats.html');
});

// Team stats page with JSON data
app.get('/statsJSON.html', function(req, res) {
    res.sendfile('statsJSON.html');
});

// Team stats page with Angular.js
app.get('/statsAngular.html', function(req, res) {
    res.sendfile('statsAnguler.html');
});

// Contact Us page
app.get('/contactus.html', function(req, res) {
    res.sendfile('contactus.html');
});

// Sponsors page
app.get('/sponsors.html', function(req, res) {
    res.sendfile('sponsors.html');
});

// response to $.getJSON
app.get('/teamstats', function(req, res) {

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        data = JSON.parse(data);

        console.log(data);
        res.send(data);
    });
});

app.listen(3000);