import genToken from '../config/token.js';
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const signUp = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        //validate user data
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }
        //validate email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already in use" });
        }

        // validate password
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ name, email, username, password: hashedPassword });

        const token = await genToken(newUser._id);
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 2592000000 // 30 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error idhar", error: error });
    }
}

export const signIn = async (req, res) => {
    const { username, password } = req.body;
    // username and password
    // need to verify if user exists or not
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required! "});
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        // console.log(passwordMatch)
        if (!passwordMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }
        res.status(200).json({ message: "User logged in successfully" });
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}
