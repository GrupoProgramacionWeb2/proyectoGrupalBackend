import express from 'express';
import Detalle_Usuario from '../controllers/detalle_usuarioController.js';

const { create, findOne, findAll, remove, update } = Detalle_Usuario

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;