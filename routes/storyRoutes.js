const express = require("express");

const story = require('../controllers/story')

const router = express.Router()

router.post('/createStory',story.createStory)
router.get('/getAllStories',story.getAllStories)
router.post('/getAllStoriesbyGenre',story.getAllStoriesbyGenre)

module.exports = router