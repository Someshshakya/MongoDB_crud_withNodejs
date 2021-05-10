const express = require('express');
const router  = express.Router();
const Users = require('../controller/users')


// post request to insert users data 
router.post('/create',Users.create_user);

//GET request to display the users
router.get('/display',Users.read_user);

// PUT request to update user's value
router.put('/edit/:id',Users.user_edit);

// DELETE request to delete the users
router.delete('/delete/:id',Users.delete);




module.exports = router;