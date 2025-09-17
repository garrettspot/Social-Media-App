import User from "../models/user.model"

export const getCurrentUser = async (req, res) => {
    const userId = req.userId;
    
    try {
        const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}