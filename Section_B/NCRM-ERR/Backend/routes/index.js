const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

// Import Route Controllers
const routes = {
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.post('/api/user/getUserById', routes.api.User.getUserByID);
	app.post('/api/user/createUser', routes.api.User.createUser);
    app.post('/api/user/getUserByEmailID', routes.api.User.getUserByEmailID);
    app.post('/api/user/updateUserById', routes.api.User.updateUserById);
};
