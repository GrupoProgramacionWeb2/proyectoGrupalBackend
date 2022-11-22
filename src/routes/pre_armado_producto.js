import express from 'express';
import Pre_Armado_ProductoController from '../controllers/pre_armado_productoController.js';

const { create, findOne, findAll, remove, update } = Pre_Armado_ProductoController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;