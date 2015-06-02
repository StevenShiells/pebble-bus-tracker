var UI = require('ui');
var AppConfig = require('appconfig');

var myBuses = {};

var getMyBussesMenuItems = function()
{
  return AppConfig.getMyBusses();
};

var menu = new UI.Menu({
  sections:[{
    title: 'My Buses',
    items: getMyBussesMenuItems()
  }]
});

menu.on('select', function(e)
{
  console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  console.log('The item is titled "' + e.item.title + '"');  
});

myBuses.show = function(){
 menu.show(); 
};

this.exports = myBuses;