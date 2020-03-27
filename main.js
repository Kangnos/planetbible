var express = require('express')
var app = express()
var fs = require('fs');
var mainpage = require('./lib/index.js');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

app.use(express.static(__dirname + '/public'));
 
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var title = request.params.pageId;
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var html = mainpage.HTML(title,
      `<h2>${title}</h2>${description}`
    ); 
    response.send(html);
  });
});
 
app.get('/planet/:pageId', function(request, response) { 
    // fs.readdir('./data', function(error, filelist){
    //     var title = request.params.pageId;
    //     var description = 'Hello, Node.js';
    //     var html = mainpage.HTML(title,
    //       `<h2>${title}</h2>
    //       ${description}`
    //     ); 
    fs.readdir('./data', function(error, filelist){
      var filteredId = path.parse(request.params.pageId).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = request.params.pageId;
        var explainpage = template.HTML(title, 
          `${description}`)
        response.send(explainpage);
      });
    });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})