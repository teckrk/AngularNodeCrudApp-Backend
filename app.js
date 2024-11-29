const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { addUser, getUsers } = require('./handlers/userHandle');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Home App Running...');
})

app.use(userRoutes);

async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            dbName: 'UsersDb',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
connectDb();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})