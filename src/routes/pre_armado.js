import express from 'express';
import Pre_ArmadoController from '../controllers/pre_armadoController.js';

const { create, findOne, findAll, remove, update } = Pre_ArmadoController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;