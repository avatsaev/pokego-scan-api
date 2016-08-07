
const port = process.env.PORT || 3002;
const env = process.env.NODE_ENV || "development";

const http = require('http');
const Pokeio = require('pokemon-go-node-api');
const config = require('./config.json');



const location = {
  type:  "name",
  name: "Strasbourg France"
};

Pokeio.init(config.username, config.password, location, config.provider, (err) => {
  if(err){
    console.error(err);
  }
});


const utils = require("./utils");
let scanner = require('./scanner');

var app = http.createServer(function(req, res) {

  if(req.url.match(/scan.json/g)){

    params = utils.format_params(req);
    console.log(params);

    res.writeHead(200, {'Content-Type': 'application/json'});
    const response = scanner.scan_nearby(params.lat, params.lon);

    scanner.scan_nearby().then( (response) => {
        res.end(JSON.stringify(response));
      }, (err) =>{
        res.end(JSON.stringify(err));
      }
    );

  }else{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end("{}");
  }

});

console.log("---------- server running on port "+port+" -----------------")
app.listen(port);
