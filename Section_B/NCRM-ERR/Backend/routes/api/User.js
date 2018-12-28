const keystone = require('keystone');
const User = keystone.list('User');

exports.createUser = async function(req, res){

	let body = Object.assign({}, req.body);

	if(body.name && body.email && body.age && body.dob && body.hobbies){

		try{
            let user = await User.model.findOne({ email: body.email});

            if(user){
            	return res.send({status: "user already present with this registered email id"});
			}else{

                let newUser = new User.model();

                newUser.name = body.name;
                newUser.email = body.email;
                newUser.age = parseInt(body.age);
                newUser.dob = body.dob;
                newUser.hobbies = body.hobbies;

                let userSaved = await newUser.save();

                if(userSaved){
                    return res.send({status: "user saved successfully"});
                }
			}
		}catch(err){
			return res.send({error: err});
		}

    }else{
		return res.send({status: "all the fields are required"});
	}
};

exports.getUserByID = async function (req, res) {

	let body = Object.assign({}, req.body);

	if(body.id){
		try{
           let user = await User.model.findOne({_id: body.id});

           if(user){
           	return res.send({user: user});
		   }
		}catch(err){
			return res.send({error: err});
		}
	}else{
        return res.send({status: "all the fields are required"});
    }
};

exports.getUserByEmailID = async function (req, res) {

    let body = Object.assign({}, req.body);

    if(body.email){
        try{
            let user = await User.model.findOne({email: body.email});

            if(user){
                return res.send({user: user});
            }
        }catch(err){
            return res.send({error: err});
        }
    }else{
        return res.send({status: "all the fields are required"});
    }
};

exports.updateUserById = async function(req, res){

	let body = Object.assign({}, req.body);

	if(body.id && body.data && body.data.name && body.data.email && body.data.age && body.data.dob && body.data.hobbies ){
        try{

        	console.log("the body is:", body);

        	let user = await User.model.findOne({_id: body.id});

            if(user){
                user.email = body.data.email;
                user.name = body.data.name;
                user.age = body.data.age;
                user.dob = body.data.dob;
                user.hobbies = body.data.hobbies;

                let userUpdated = await User.model.update({_id: user._id}, {$set: user});

                if(userUpdated){
                    return res.send({updatedUser: userUpdated});
				}
            }
        }catch(err){
            return res.send({error: err});
        }
	}else{
        return res.send({status: "all the fields are required"});
    }
};
