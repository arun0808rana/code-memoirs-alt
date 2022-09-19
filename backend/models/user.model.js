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

userSchema.methods.generateAccessToken = () => {
    const payload = {
        user: {
            id: this._id,
        },
    };
    // current user
    const user = this;

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30s" });
    const refreshToken = jwt.sign(user, process.env.REF_TOK_KEY);
    return [token, refreshToken];
}

const User = mongoose.model('User', userSchema);

module.exports = User;