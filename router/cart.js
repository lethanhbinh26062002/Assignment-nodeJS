import { Router } from 'express';
import {userById} from '../controllers/auth'
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
import { createCartItems, listCartItems, read_cartItem, remove_cartItems, update_cartItems } from '../controllers/cartItem';
const router = Router();

router.get('/cart', listCartItems);
router.get('/cart/:userId/:id' , isAuth, read_cartItem)
router.post('/cart', createCartItems)
router.patch('/cart/:userId/:id',isAuth, update_cartItems);
router.delete('/cart/:userId/:id',isAuth, remove_cartItems);

router.param("userId", userById)

export default router;