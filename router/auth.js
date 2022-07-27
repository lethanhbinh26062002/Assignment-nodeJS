import { Router } from 'express';
import { userList, signUp, signIn, create, update, remove, real } from '../controllers/user';
import { isAuth, checkAdmin } from '../models/middlewares/checkAuth';
import {userById} from '../controllers/auth'
const router = Router();

router.post('/signup', signUp);
router.post('/login',isAuth, signIn);
router.get('/users/:userId',isAuth ,checkAdmin, userList);
router.post('/users/create/:userId',isAuth ,checkAdmin, create)
router.patch('/users/:userId/:id',isAuth ,checkAdmin,update);
router.delete('/users/:userId/:id',isAuth ,checkAdmin, remove);
router.get('/users/:userId/:id',isAuth, real);

router.param("userId", userById)

export default router;