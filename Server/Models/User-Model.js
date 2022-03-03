const mongoose = require("mongoose");
const scheme = mongoose.Schema;

const User = new scheme(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
      unique:true
    },
    Password: {
      type: String,
    },

    Img: {
      type: String,
    },

    LastLogIn: {
      type: Date,
      default: Date.now,
    },

    IsLogIn: {
      type: Boolean,
      default: false,
    },

    IsAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
