// Require keystone
var keystone = require('keystone');

keystone.init({
	'cookie secret': 'some cookie secret string',
	'name': 'NCRM-ERR',
	'admin path': 'admin',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'AdminUser',
});

keystone.import('models');

keystone.set('cors allow origin', true);

keystone.set('routes', require('./routes'));

keystone.start();
