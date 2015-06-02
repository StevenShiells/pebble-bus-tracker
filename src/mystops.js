var UI = require('ui');
var Requests = require('requests');
var AppConfig = require('appconfig');

var myStops = {};

var getMyStopsMenuItems = function(){
  return AppConfig.getMyStops();
};

var menu = new UI.Menu({
  sections:[{
    title: 'My Stops',
    items: getMyStopsMenuItems()
  }]
});

var getTimesList = function(busTimes){
  var times = [];
  busTimes.forEach(function(timeData){
    if(timeData.minutes === 0){
      times.push('DUE');
    }
    else if(timeData.minutes > 60){
      times.push(timeData.time);
    }
    else{
      times.push(timeData.minutes);
    }
  });
  
  return times.join(', ');
};

var createItemForRoute = function(routeData){
  var timesList = getTimesList(routeData.timeDatas);
  return {title: routeData.mnemoService, subtitle: timesList, firstBus: routeData.timeDatas[0].minutes};
};

var compareBusses = function(a, b){
  return a.firstBus - b.firstBus;
};

var getBusTimesMenuItems = function(data){
  var items = [];
  
  if(data.busTimes){
    data.busTimes.forEach(function(entry) {
      items.push(createItemForRoute(entry));
    });
  }
  
  var orderedItems = items.sort(compareBusses);
  
  return orderedItems;
};

var processData = function(data){
  var timesMenu = new UI.Menu({
    sections:[{
      title: 'Bus Times',
      items: getBusTimesMenuItems(data)
    }]
  });
  timesMenu.show();
};

menu.on('select', function(e)
{
  Requests.getBusTimesForStop(e.item.code, processData);
});

myStops.show = function(){
 menu.show(); 
};

this.exports = myStops;