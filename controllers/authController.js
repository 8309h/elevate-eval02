const User = require("../models/User");
const bcrypt =  require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
      const { username, email, password } = req.body;
     

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
            username,
            email,
            password: hashedPassword
      })

      res.status(201).json({ sucess: true, message: "User Created " });


}

exports.login = async (req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({email});

      if(!user)
            return res.status(401).json({status:true,
      message : "Invalid Credentials"});

      const isMatch  =  await bcrypt.compare(password,user.password);

     if(!isMatch) {
      return res.json(401).json({message: "Invalid Credentials"});
     }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
      res.status(200).json({
            sucess : true,
            message : "Login Succesful",
            token : token,
            userID: user._id
      })
}