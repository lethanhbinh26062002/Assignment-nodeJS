import { Router } from 'express';
import { userList, signUp, signIn, create, update, remove, real } from '../controllers/user';
const router = Router();

router.post('/signup', signUp);
router.post('/login', signIn);
router.get('/users', userList);
router.post('/users/create', create)
router.patch('/users/:id',update);
router.delete('/users/:id', remove);
router.get('/users/:id', real);

export default router;