var UI = require('ui');
var MyStops = require('mystops');
var MyBusses = require('mybusses');

var mainMenu = {};

var getMainMenuItems = function()
{
  var items = [];
  items.push({title:'My Stops', onSelected:MyStops.show});
  items.push({title:'My Busses', onSelected:MyBusses.show});
  //items.push({title:'All Routes'});
  
  return items;
};

var menu = new UI.Menu({
  sections:[{
    title: 'Bus Tracker',
    items: getMainMenuItems()
  }]
});

menu.on('select', function(e)
{
  if(e.item.onSelected)
  {
      e.item.onSelected();
  }
});

mainMenu.show = function(){
 menu.show(); 
};

this.exports = mainMenu;