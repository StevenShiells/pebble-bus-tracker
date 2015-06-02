var ajax = require('ajax');
var md5 = require('md5');

var requests = {};

var padNumbersWithZero = function(value){
  return (value < 10 ? '0' : '') + value;
};

var generateAPIKey = function(){
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = padNumbersWithZero(currentDate.getMonth() + 1);
  var day = padNumbersWithZero(currentDate.getDate());
  var hours = padNumbersWithZero(currentDate.getHours());
  return 'LB8MPNPC4DBJJG83CACRS1P3N' + year + month + day + hours;
};

var getHashedAPIKey = function()
{
  return md5.MD5(generateAPIKey());
};

var getBusTimesForStopRequest = function(stopId){
  var apiKey = getHashedAPIKey();
  return 'http://ws.mybustracker.co.uk/?module=json&key=' + apiKey + '&function=getBusTimes&stopId1=' + stopId + '&nb=5';
};

requests.getBusTimesForStop = function(stopId, callback){
  ajax({
    url:getBusTimesForStopRequest(stopId),
    type:'json'
  },
  function(data){
    if(callback){
      callback(data);
    }
  },
  function(error){
    console.log('Failed to fetch bus times for stopId: '  + stopId + ', Error: ' + error);
  });
};

this.exports = requests;