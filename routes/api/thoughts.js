const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../../controllers/api/thoughts');


//POST a new thought record 
router.post('/submitThoughtRecord', thoughtsCtrl.create)

//Show one thought
router.get('/thoughts/detail/:id', thoughtsCtrl.showOne)

//SHOW all thoughts
router.get('/thoughts/:userId', thoughtsCtrl.index)

//Delete one thought
router.delete('/thoughts/detail/:id', thoughtsCtrl.deleteOne)



module.exports = router;