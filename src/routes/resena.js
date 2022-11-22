import express from 'express';
import ResenaController from '../controllers/resenaController.js';

const { create, findOne, findAll, remove, update } = ResenaController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;