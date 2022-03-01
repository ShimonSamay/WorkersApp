require("dotenv").config();
require("./DB/Office-DB");
const express = require("express");
const cors = require("cors");
const app = express() ;
const port = process.env.PORT ;
const officeRouter = require("./Routes/Workers-Router")

app.use(cors());
app.use(express.json())
app.use("/workers" , officeRouter);


app.listen(port);