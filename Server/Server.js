require("dotenv").config();
require("./DB/Office-DB");
const express = require("express");
const cors = require("cors");
const app = express() ;
const port = process.env.PORT ;
const officeRouter = require("./Routes/Workers-Router")
const userRouter = require("./Routes/User-Router")

const passport = require("passport");
require("./Config/Passport")(passport);

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(passport.initialize())
app.use(cors());
app.use("/workers" , passport.authenticate("jwt" , {session:false}), officeRouter );
app.use("/myapp"  , userRouter )



app.listen(port);