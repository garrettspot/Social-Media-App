import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.send(404).json({ message: "Token not found" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(500).json({ message: "Token is not valid" });
    }
}

export default isAuth;