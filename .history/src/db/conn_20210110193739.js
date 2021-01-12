const mongoose = require('mongoose');

mongoose.connect('mongod://localhost:27017:/students-api', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ( ) => {
    console.log('Connection is Successful..!');
}).catch( () => {
    console.log('No Connection..!');
})