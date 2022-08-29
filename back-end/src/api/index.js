const { Router } = require('express');

const userRouter = require('./user/user-router');
const profileRouter = require('./profile/profile-router');

const router = Router();

router.use('/user', userRouter);
router.use('/profile', profileRouter);

module.exports = router;