import express from 'express';
import OrdenController from '../controllers/ordenController.js';

const { create, findOne, findAll, remove, update } = OrdenController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;