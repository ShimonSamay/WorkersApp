require("dotenv").config();
require("./DB/Office-DB");
const express = require("express");
const cors = require("cors");
const app = express() ;
app.use(cors());
const port = process.env.PORT ;
const officeRouter = require("./Routes/Workers-Router")

app.use(express.json())
app.use("/workers" , officeRouter);


app.listen(port);