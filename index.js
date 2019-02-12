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

app.get('/api/iteminfo/', async (req, res, next) => {
    try {
        const{ID} = req.params;
        const query = 'SELECT * FROM ??';
        const inserts = ['item'];

        const sql = mysql.format(query, inserts);

        const iteminfo = await db.query(sql);
        res.send({
            success: true,
            iteminfo
        });

    } catch (err){
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error getting item information';

        return next();
    }
    
}, errorHandling);

app.post('/api/createItem/name/:name/date/:date/description/:description/image/:image/price/:price/location/:location/item/:item/contact/:contact/', async (req, res, next) => {
    
    try {
        const{name, date, description, image, price, location, item, contact} = req.params;
        name, date, description, image, price, location, item, contact
        const query = 'INSERT INTO ?? (??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?)';
        const inserts = ['item', 'name', 'date', 'description', 'image', 'price', 'location', 'item', 'contact', name, date, description, image, price, location, item, contact];

        const sql = mysql.format(query, inserts);

        const iteminfo = await db.query(sql);
        res.send({
            success: true,
            iteminfo
        });

    } catch (err){
        console.log("req", req)
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error creating item';

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