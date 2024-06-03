const Post = require('../models/Post');

const getPosts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const posts = await Post.find()
            .populate('author', 'username')
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPosts };
