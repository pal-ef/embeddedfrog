const express = require('express')
const router = express.Router();
// Routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})

router.get('/games', (req, res) => {
    res.render('games', { title: 'Games' })
})

router.get('/proyects', (req, res) => {
    res.render('proyects', { title: 'Proyects' })
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})
module.exports = router;