
var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://user-admin:password111@cluster0.sibpykj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "MyDB";

var database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASENAME);
        console.log(`Yay! Now connected to Cluster`);
    })
})

//ROUTES TO ALL ACTIONS

app.get('/api/books/GetBooks', (req, res) => {
    database.collection("Books").find({}).toArray((error, result) => {
        res.send(result);
    })
})

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("Books").countDocuments();
        await database.collection("Books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});


app.delete('/api/books/DeleteBook', (req, res) => {
    database.collection("Books").deleteOne({
        id: req.query.id
    });
    res.json("Deleted successfully!");
})