
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'SIAB 0.1.0' , principal: 'active'});
};