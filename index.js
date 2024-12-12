import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //confiugring the dotenv
const app = express(); // getting app from express
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Listening on the port ' + port);
})

app.get('/', (req, res) => {
    res.send('Got the request on the / route');
});

app.get('/twitter', (req, res) => {
    res.send('This is twitter here');
});

app.get('/login', (req, res) => {
    res.status(200).send('Login page here');
})