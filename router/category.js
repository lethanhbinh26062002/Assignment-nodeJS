import { Router } from 'express';
import { create, list, real, realProductByCategory, remove, update } from '../controllers/category';
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
import {userById} from '../controllers/auth'

const router = Router();

router.post("/categorys/create",isAuth, create);
router.get("/categorys/:id", real);
router.get("/categorys/proCate/:id", realProductByCategory);
router.get("/categorys", list);
router.delete("/categorys/:id",isAuth, remove);
router.patch("/categorys/edit/:id",isAuth, update);

router.param("userId", userById) 

export default router;