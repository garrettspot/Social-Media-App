import mongoose from "mongoose";

const userSchema = new mongoose.userSchema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePictureURL: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    followers: [],
    following: [],
    posts: [],
    reels: [],
    stories: []
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;