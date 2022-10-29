const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');


// Require Todo routes



// For json req and resp
app.use(express.json());
app.use(cors());


const routes = require('./routes/ToDoRoutes');
app.use(routes)


// DB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Db connection success");
}).catch((err)=>{

    console.log(err);
})


app.get('/', (req,res)=>{
    res.send("hello from the server...")
})

// app liten
app.listen(process.env.PORT || 4300, ()=>{

    console.log(`server is running..`)

})