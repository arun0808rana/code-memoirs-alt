const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }
);

userSchema.methods.generateAccessToken = ()=>{
    const payload = {
        user: {
            id: this._id,
        },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30s" });
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;