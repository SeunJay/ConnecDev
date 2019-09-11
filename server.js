const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//connect to database
connectDB();


// // Body parser middleware
 app.use(express.json({ extended: false }));



app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
