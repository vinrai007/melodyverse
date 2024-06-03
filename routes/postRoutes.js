// postRoutes.js
const express = require('express');
const { getPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/posts', authMiddleware, getPosts);

module.exports = router;
