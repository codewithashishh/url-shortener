const User = require("../models/user");
const bcrypt = require("bcrypt");


async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return res.redirect("/user/signup");
    }

    const isMatch = await bcrypt.compare(
      password,
      existingUser.password
    )
if (isMatch) {
    req.session.userId = existingUser._id;
 console.log(req.session);

    return res.redirect("/");
}

return res.send("Incorrect password");}
   

module.exports = { handleUserLogin };