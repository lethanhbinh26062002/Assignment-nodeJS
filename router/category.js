import { Router } from 'express';
import { create, list, real, realProductByCategory, remove, update } from '../controllers/category';

const router = Router();

router.post("/categorys/create", create);
router.get("/categorys/:id", real);
router.get("/categorys/proCate/:id", realProductByCategory);
router.get("/categorys", list);
router.delete("/categorys/:id", remove);
router.patch("/categorys/:id", update)
export default router;