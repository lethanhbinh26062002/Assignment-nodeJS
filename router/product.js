import { Router } from 'express';
import { userById } from '../controllers/auth';
import { create, list, paginate, real, remove, search, filterByPrice, update, realProductByCategory } from '../controllers/product';
import { checkAdmin, isAuth } from '../models/middlewares/checkAuth';
import {createCartItems} from '../controllers/cart'

const router = Router();

router.get('/products', list);
router.get('/products/:id', real);
router.post('/products/:id',createCartItems)
router.get('/products/proByCate/:id', realProductByCategory);
router.post('/products/create/:userId',isAuth ,checkAdmin,create);
router.delete('/products/:userId/:id',isAuth ,checkAdmin,remove);
router.patch('/products/:userId/:id',isAuth ,checkAdmin,update);
router.get('/search', search);

router.param("userId", userById) // Lấy userId từ URL rồi check user có tồn tại  => next()

export default router;