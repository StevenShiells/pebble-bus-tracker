var config = {};

config.getMyStops = function(){
  console.log('lol');
  var items = [];
  
  items.push({title:'Moat Drive', code:'36236527'});
  items.push({title:'Castle Street', code:'36232545'});
  items.push({title:'Leopold Place', code:'36234748'});
  items.push({title:'Dryden Street', code:'36237357'});
  items.push({title:'George Street', code:'36253245'});
  items.push({title:'Edinburgh Airport', code:'36253272'});
  items.push({title:'Fountain Park', code:'36236489'});
  items.push({title:'Elm Row', code:'36232574'});
  
  return items;
};

config.getMyBusses= function()
{
  var items = [];
  
  items.push({title:'4'});
  items.push({title:'34'});
  items.push({title:'44'});
  items.push({title:'44A'});
  items.push({title:'X44'});
  items.push({title:'N34'});
  items.push({title:'N44'});
  items.push({title:'25'});
  items.push({title:'33'});
  items.push({title:'22'});
  items.push({title:'N22'});
  
  return items;
};

this.exports = config;