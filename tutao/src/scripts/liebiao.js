var $=require('./libs/jquery.js');

var common=require('./utils/common.util.js');
var tplHeader = require('./tpls/hearder.string');
var tplIndexBody = require('./tpls/body.string'); 
var tplfooter = require('./tpls/footer.string');
//
//var list = require('./modules/index.js');
//
$(function() { 
	common.renderHtml(tplHeader + tplIndexBody + tplfooter); 
////	list();
//
});
