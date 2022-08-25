const { Router } = require('express');
const userRouter = require('./user/user-router');

const router = Router();

router.use('/user', userRouter);

module.exports = router;