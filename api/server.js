const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://julhashtamim:julhashtamim987654@p300.sczrt.mongodb.net/?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch(console.error);

app.listen(3001, () => console.log("server started on port 3001"));
