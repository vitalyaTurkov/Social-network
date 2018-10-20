const db = require('../model/db');

module.exports = function(app) {
    app.post('/new-user', (req, res) => {
        const {name, surname, password, email} = req.body.name;
        db.addUser({
            name: name,
            surname: surname,
            password: password,
            email: email
        });
    });

    app.get('/user', (req, res) => {
        db.getUser(req.query.email, req.query.password, (user) => {
            res.send(user);
        });
    });
};
