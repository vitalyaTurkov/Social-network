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
        res.send("OK");
    });

    app.get('/user', (req, res) => {
        if(req.query.id) {
            db.getUserById(req.query.id)
                .then(user => res.send(user));
            return;
        }
        db.getUser(req.query.email, req.query.password, (user) => {
            res.send(user);
        });
    });

    app.get('/users', (req, res) => {
        db.getUsers()
            .then(users => res.send(users));
    });
};
