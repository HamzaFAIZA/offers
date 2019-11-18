import db from '../db/db';

let vehicles = JSON.parse(JSON.stringify(db));

exports.vehicle_get_id = function (req, res) {
     vehicles.Items.forEach(element => {
        if(element.id.S == req.params.id){
            res.send(element);
        }
     });
};

exports.vehicle_get = function (req, res) {
    var ret = new Array();
    vehicles.Items.forEach(element => {
        if(element.visible.BOOL == true){
            ret.push(element);
        }
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.send(ret.sort(compare)); 
};

function compare( a, b ) {
    if ( a.pricing.M.price.N < b.pricing.M.price.N ){
      return -1;
    }
    if ( a.pricing.M.price.N > b.pricing.M.price.N ){
      return 1;
    }
    return 0;
  }