const mongoose = require('mongoose');

const connectDatabase = () => { mongoose.connect(process.env.DB_LOCAL_URI,
{
    dbName: 'RajatDb',
}
).then(con => {
    console.log(`MongoDB Database connected with host: ${con.connection.host}`);
    });
};


module.exports = connectDatabase;