import { Router } from 'express';
import {userById} from '../controllers/auth'
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
import { createCartItems, listCartItems, remove_cartItems, update_cartItems } from '../controllers/cartItem';
const router = Router();

router.get('/cart/:userId',isAuth, listCartItems);
router.post('/products/:id',isAuth, createCartItems)
router.patch('/cart/:userId/:id',isAuth, update_cartItems);
router.delete('/cart/:userId/:id',isAuth, remove_cartItems);

router.param("userId", userById)

export default router;