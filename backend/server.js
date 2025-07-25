const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURI)
.then(()=> console.log("MongoDB Connected "))
.catch(err=>console.log(err))

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=> console.log(`Server is Running ${PORT}`));


