const rp = require("request-promise");

var proxiedRequest = rp.defaults({'proxy': process.env.PROXY});

module.exports=proxiedRequest;