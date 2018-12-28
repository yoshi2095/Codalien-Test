const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
const User = new keystone.List('User', {
	track: true
});

User.add({
	name: {type: Types.Name, required: true, index: true, initial: true},
	email: {type: Types.Email, initial: true, required: true, unique: true, index: true},
	password: {type: Types.Password, initial: true, required: true},
	isVerified: {type: Types.Boolean}
});

/**
 * Registration
 */
User.defaultColumns = 'name, email, password';
User.register();
