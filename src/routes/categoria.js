import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';

const { create, findOne, findAll, remove, update } = CategoriaController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;