import { Router } from 'express';
import { userById } from '../controllers/auth';
import { create, list, paginate, real, remove, search, filterByPrice, update, realProductByCategory } from '../controllers/product';
import { checkAdmin, isAuth } from '../models/middlewares/checkAuth';
import {createCartItems} from '../controllers/cartItem'

const router = Router();

router.get('/products', list);
router.get('/products/:id', real);
router.get('/products/proByCate/:id',realProductByCategory);
router.post('/products/create',isAuth, create);
router.delete('/products/:id',isAuth, remove);
router.patch('/products/edit/:id',isAuth, update);
router.get('/search', search);

router.param("userId", userById) // Lấy userId từ URL rồi check user có tồn tại  => next()

export default router;