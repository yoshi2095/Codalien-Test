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
    name: {type: Types.Text, required: true, index: true},
    email: {type: Types.Text, initial: true, required: true, unique: true, index: true},
    age: {type: Types.Number, initial: true},
    dob: {type: Types.Text},
    hobbies: {type: Types.TextArray}
});

/**
 * Registration
 */
User.defaultColumns = 'name, email';
User.register();
