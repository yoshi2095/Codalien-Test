const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

// Import Route Controllers
const routes = {
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.post('/api/user/login', routes.api.User.login);
};
