const express = require('express');
const mysql = require('mysql');
const db = require('./Server/db');
const app = express();
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

app.use(express.static(resolve(__dirname,'client','dist')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

function errorHandling(req, res){
    res.status(req.status || 500).send(req.error || 'Server Error');
}

app.get('/api/home', async (req, res, next) => {
    try {
        const query = 'SELECT * FROM ??';
        const inserts = ['fish'];

        const sql = mysql.format(query, inserts);

        const userInfo = await db.query(sql);
        res.send({
            success: true,
            userInfo
        });

    } catch (err){
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error getting user information';

        return next();
    }
    
}, errorHandling);

//starts Express server on defined port
app.listen(PORT, ()=>{
    console.log('Server running on PORT:', PORT);
});

// add routes to express app
// routes(app);

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
    if (err) {
        res.status(500).send(err)
    }
});