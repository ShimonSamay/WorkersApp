require("dotenv").config();
require("./DB/Office-DB");
const express = require("express");
const cors = require("cors");
const path = require("path");
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

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname , "../Client/build" , "index.html" )));
    app.get("*" , (req , res) => {
     res.sendFile(path.join(__dirname , "../Client/build" , "index.html" ));
    })
}

app.listen(port);