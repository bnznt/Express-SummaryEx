module.exports.auth = function(req, res, next) {
	if(req.signedCookies.userId) {
	 return res.render('checkout-auth');
	}
	return res.render('checkout-info');
}