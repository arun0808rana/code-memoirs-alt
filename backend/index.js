const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080;
const connectDB = require('./db/db');
const userRouter = require('./routes/user.route');
const useAuth = require('./middlewares/auth.middleware');
require('dotenv').config()

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use('/user', userRouter);

app.get('/test', useAuth, (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})