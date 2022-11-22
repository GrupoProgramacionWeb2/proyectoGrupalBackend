import express from 'express';
import Orden_ProductoController from '../controllers/orden_productoController.js';

const { create, findOne, findAll, remove, update } = Orden_ProductoController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;