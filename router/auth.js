import { Router } from 'express';
import { userList, signUp, signIn, create, update, remove, real } from '../controllers/user';
import { isAuth, checkAdmin } from '../models/middlewares/checkAuth';
import {userById} from '../controllers/auth'
const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/users',userList);
router.post('/users/create',create)
router.patch('/users/:id',update);
router.delete('/users/:id',remove);
router.get('/users/:id',real);

router.param("userId", userById)

export default router;