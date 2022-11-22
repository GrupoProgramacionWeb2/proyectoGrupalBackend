import express from 'express';
import ProductoController from '../controllers/productoController.js';

const { create, findOne, findAll, remove, update } = ProductoController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;