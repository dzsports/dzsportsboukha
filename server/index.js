
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const userRoute = require('./routes/userRoute')

dotenv.config();

app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));


// Routes
app.use('/',userRoute)



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port',process.env.PORT)
    })
}).catch ((error) => {
    console.log(error) 
})