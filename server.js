var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var expressSession = require('express-session');
var connectionString = "postgres://jeremyhuppe@localhost/saraiwebsite";
var massive = require('massive');
var packagesCtrl = require('./server/packagesCtrl');
var galleryCtrl = require('./server/galleryCtrl');
var adminCtrl = require('./server/adminCtrl')


var app = module.exports = express();
var port = 3000;

massive(connectionString).then(dbInstance => {
  app.set('db', dbInstance);
});


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());


app.get('/api/packages', packagesCtrl.getPackages);
app.put('/api/packages', adminCtrl.updatePackage);
app.get('/api/photos', galleryCtrl.getPhotos);
app.put('/api/photos', adminCtrl.addPhoto);


app.listen(port, function() {
  console.log('listening on port', port);
});
