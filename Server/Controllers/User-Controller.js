const User = require("../Models/User-Model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

module.exports = {

    register : async (req , res) => {
      if(await User.exists({Email:req.body.Email})) return res.status(400).send({message : "email already exist"});
      bcrypt.hash(req.body.Password , 10 , async (err , hashed) => {
          if(err) return res.status(500).json({message:"error"});
          req.body.Password = hashed ;
          await User.create(req.body)
          .then(() => res.status(200).json({message : "registered"}))
          .catch(err => res.status(500).json({massage : err}))
        })
    } ,

    login : async (req , res) => {
        try {
            const user = await User.findOne({ Email: req.body.Email });
            if(user == null) return res.status(400).json({ message: 'Email not found' });
            bcrypt.compare(req.body.Password , user.Password , (err, isMatch) => {
                if (err) return res.status(500).json({ message: 'Error' });
                if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
                const token = JWT.sign({user}, process.env.SECRET_KEY , { expiresIn: '1h' });
                return res.status(200).json({ message: 'Login successful', token });
            })
        } 
        catch (err) {
            return res.status(500).json(err);
        }
    } ,

    logout : (req , res) => {
       
    }

    

    

};


