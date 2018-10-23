const mongoose = require('mongoose');
const User = require('./user');

const setUpConnection = () => {
    mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
};

const addUser = (data) => {
    const user = new User({
        name: data.name,
        surname: data.surname,
        password: data.password,
        email: data.email
    });
    return user.save()
        .catch(err => {
            console.log(err);
        });
};

const getUser = (email, password, callback) => {
    User.findOne({'email': email})
        .then(user => {
            if(user)
                if(user.password === password)
                    callback({
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        id: user._id,
                        isAuthorized: true,
                    });
                else
                    callback({email: user.email, isAuthorized: false});
            else
                callback({email: '', isAuthorized: false})
        })
        .catch(err => {
            console.log(err);
            callback({email: '', isAuthorized: false});
        });
};

const getUsers = () => User.find({}, {name: 1, surname: 1});

const getUserById = id => {
    return User.findOne({_id: id}, {name: 1, surname: 1});
};


module.exports.setUpConnection = setUpConnection;
module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
