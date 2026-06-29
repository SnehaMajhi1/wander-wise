

//const express = require('express'); // old way of importing express or commonjs module -> outdated
import express from 'express';// new way of importing express or es module -> modern 
import connectDB from './config/database.js'; // import connectDB function from database.s file


//require('dotenv').config();-> older approach to load .env variables
// import dotenv from 'dotenv';
// dotenv.config(); -> old approach to load .env variables


const app = express();
const port = process.env.PORT; //kei value access garnu cha vaney this is the way to access environment 

// old approach
function helloWorldOld(req, res) {
    res.send('Hello World!');
}

//new approach
//named function
const helloWorldNew = (req, res) => {
    res.send('Hello hi, World!');
};


// app.get('/', (req, res) => { 
//     res.send('Hello World!');
// });

app.get('/', helloWorldNew);
connectDB();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


