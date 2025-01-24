const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js")
const router = require("./routes/index.js")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);



const PORT = 8080;

connectDB().then(()=>{
    app.listen(PORT, ()=>{ 
        console.log("Database Connected")
        console.log("server is running on port 8080")
    })
})
