const usersRoutes = require('./users-routes');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('hello world');
    });

    usersRoutes(app);
};
