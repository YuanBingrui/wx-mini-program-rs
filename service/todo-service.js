var server = require('./http-service.js');
var wxRequest = require('./wxRequest.js');

function getTodoList(limit, offset){
  var requestObject = {
    url: server.serverPrefix + '/rshareapi',
    data: {
      action: 3,
      params: JSON.stringify({
        cloumns: {},
        limit: limit,
        offset: offset,
        myType: 'ALL',
        myDays: 'ALL',
        action: 3,
        funtype: 1,
        Condition: ""
      })
    },
    header: { 'content-type': 'application/x-www-form-urlencoded', 'Cookie': wx.getStorageSync('cookie') },
    method: 'POST'
  }
  return wxRequest.wxRequest(requestObject)
}

module.exports = {
  getTodoList: getTodoList
}