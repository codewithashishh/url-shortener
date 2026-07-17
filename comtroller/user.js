const user = require("../models/user");
const bcrypt = require("bcrypt");


async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send("Invalid input");
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
        return res.status(409).send("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.create({
        name,
        email,
        password:hashedPassword,
    });

    return res.redirect("/user/login");
}

module.exports = { handleUserSignUp };