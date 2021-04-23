const { Sequelize } = require ('sequelize');
const sequelize = new Sequelize('todolist','root','', {
    host : 'localhost',
    dialect : 'mysql',
    operatorAliases : false,
    
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

// Test DB
sequelize.authenticate()
    .then(()=> console.log('DatabaseConnected'))
    .catch(err => console.log('Error' + err))

exports.sequelize = sequelize;