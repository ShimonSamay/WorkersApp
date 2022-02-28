const mongoose = require("mongoose");
const ConnectionString = process.env.Connection_String ;

mongoose.connect(ConnectionString , {
    useNewUrlParser:true ,
    useUnifiedTopology:true
})
.then(() => console.log("connected"))
.catch((err) => console.log(err))


module.exports = mongoose.connection;