const router = require('express').Router();
const UserController = require('../controllers/UserController');


router.get('/profile', UserController.profileGet);
router.get('/:id/edituser', UserController.editGet);

router.post('/:id/edituser', UserController.editPost);

module.exports = router;
