const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const Worker = new Scheme(
  {
    FirstName: String,

    LastName: {
      type: String,
      required:true,
    },

    Email: String,

    Age: Number,
  },
  { timestamps:true }
);


module.exports = mongoose.model("Worker" , Worker)
