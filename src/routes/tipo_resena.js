import express from 'express';
import Tipo_ResenaController from '../controllers/tipo_resenaController.js';

const { create, findOne, findAll, remove, update } = Tipo_ResenaController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;