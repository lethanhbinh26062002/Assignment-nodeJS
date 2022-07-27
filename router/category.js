import { Router } from 'express';
import { create, list, real, realProductByCategory, remove, update } from '../controllers/category';
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
import {userById} from '../controllers/auth'

const router = Router();

router.post("/categorys/create/:userId",isAuth,checkAdmin, create);
router.get("/categorys/:userId/:id",isAuth, checkAdmin, real);
router.get("/categorys/proCate/:id", realProductByCategory);
router.get("/categorys", list);
router.delete("/categorys/:userId/:id",isAuth ,checkAdmin,remove);
router.patch("/categorys/:userId/:id",isAuth ,checkAdmin,update);

router.param("userId", userById) 

export default router;