import User from '../models/user.model.js'

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

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const newUser = await User.create({ name, email, username, password });
        res.status(201).json({ message: "User created successfully" });
    } catch {
        res.status(500).json({ message: "Internal server error" })
    }
}