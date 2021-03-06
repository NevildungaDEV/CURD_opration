const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser=require("cookie-parser")

dotenv.config({ path: './config.env' });

require('./db/conn')

app.use(express.json());
app.use(cookieParser())

app.use(require('./router/auth'));


const PORT=process.env.PORT;



app.listen(PORT, () => {
    console.log(`server running at port number 4000`)
})
