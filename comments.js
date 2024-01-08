// create web server
// 1. import express module
const express = require('express');
// 2. create web server object
const app = express();
// 3. create router object
const router = express.Router();
// 4. register router object
app.use('/comments', router);
// 5. add router
router.get('/show', (req, res) => {
    res.send('show comments');
});
router.get('/add', (req, res) => {
    res.send('add comments');
});
// 6. start web server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});