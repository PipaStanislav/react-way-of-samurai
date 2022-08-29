const { Router } = require('express');

const userRouter = require('./user/user-router');
const profileRouter = require('./profile/profile-router');
const authRouter = require('./auth/auth-router');

const router = Router();

router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/auth', authRouter);

module.exports = router;