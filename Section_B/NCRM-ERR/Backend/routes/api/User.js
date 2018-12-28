const ObjectId = require('mongoose').Types.ObjectId;
const async = require('async');
const keystone = require('keystone');
const User = keystone.list('User');

exports.login = function (req, res) {

	let response = {};

	let errors = [];

	if (!req.body || !req.body.email)
		errors.push('Email');

	if (!req.body || !req.body.password)
		errors.push('Password');

	if (errors.length)
		return res.apiResponse({
			message: errors.join(', ') + ' is required'
		});

	User.model.findOne({
		email: req.body.email
	}, {__v: 0}, function (err, user) {
		if (err) return res.apiError(err);
		else if (!user) return res.apiError('No user found');
		else {
			user._.password.compare(req.body.password, function (err, isMatch) {
				if (err) return res.apiError(err);
				else if (isMatch) {
					response = user.toObject();
					delete response.password;
					req.loginUser({
						_id: user._id,
						password: user.password
					});
					response.token = req.token;
					return res.apiResponse({
						user: response
					});
				} else return res.apiError('Invalid password');
			});
		}
	});
};
