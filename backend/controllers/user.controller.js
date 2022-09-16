const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const body = req.body;

    try {
        const user = await User.findOne({ email: body.email });
        // throw error if user is not found
        if (!user) {
            throw new Error('User not found on code_memoirs_alt_db');
        }
        // signing access token
        const token = user.generateAccessToken();
        // setting token in a HttpOnly cookie
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
        // returning token in response
        return res.status(200).json({ success: true, token: token });
    } catch (error) {
        console.log('Error while login: ', error);
        return res.json({ success: false, msg: error?.message })
    }
}

const signUp = async (req, res) => {
    const body = req.body;

    try {
        // check if user already exists
        const emailExists = await User.findOne({ email: body.email });
        if (emailExists) {
            return res.status(400).json({ success: false, msg: 'User already exists.' });
        }

        // Password encryption
        // Salting prevents brute forcing pswds in case db is stolen
        // Even hashed pswds can be stolen -
        // using an attack called rainbow table attack https://www.geeksforgeeks.org/understanding-rainbow-table-attack/
        const saltRounds = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, saltRounds);

        // saving new user in database
        const user = new User({
            email: body.email.toLowerCase(),
            password: body.password
        })
        user.save((err => {
            if (err) {
                return res.json({ success: false, msg: error?.message })
            }
            // signing access token
            const token = user.generateAccessToken();
            // alt method to set token in a HttpOnly cookie
            // res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);

            // setting token in a HttpOnly cookie, with expiry of 30 seconds
            res.cookie('token', token, {
                expires: new Date(Date.now() + 30 * 1000),
                httpOnly: true
            })
            // returning token in response
            return res.status(200).json({ success: true, token: token });
        }))
    } catch (error) {
        console.log('Error while signing up: ', error?.message);
        return res.json({ success: false, msg: error?.message })
    }
}

module.exports = {
    login,
    signUp
}