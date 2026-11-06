const express = require('express');
const router = express.Router()

const timeLog = require('./middelware.js'); // Import the middleware
router.use(timeLog); // Use the middleware


router.get('/', (req, res) => {
    res.render('student', { title: 'Hey', message: 'Hello there!' });
})


router.post('/', (req, res) => {
    res.send('Hello World! post')
})


router.get('/:test', (req, res) => {
    res.send('Hello World! test' + req.params.test)
})

router.get(/manoj/, (req, res) => {
    res.send('/manoj/');
});

// Matches paths ending with "fly" (butterfly, dragonfly, etc.)
router.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/');
});

router.get('/:file{.:ext}', (req, res) => {
    // GET /image.png => req.params = { file: 'image', ext: 'png' }
    // GET /image => req.params = { file: 'image' }
    res.send('ok');
});





module.exports = router;
