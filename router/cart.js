import { Router } from 'express';
import { isAuth, checkAdmin } from '../models/middlewares/checkAuth';
import {userById} from '../controllers/auth'
const router = Router();

// router.post('/')

router.param("userId", userById)

export default router;