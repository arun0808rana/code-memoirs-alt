// prerequisite
// TODO:::: run monogd by `sudo systemctl start mongod`

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(
            'mongodb://127.0.0.1/code_memoirs_alt_db',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;