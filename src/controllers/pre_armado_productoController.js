import Pre_Armado_ProductoRepository from '../repository/pre_armado_productoRepository.js';

const create = async (req,res) => {
    
    const result = await Pre_Armado_ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const pre_armado_producto = await Pre_Armado_ProductoRepository.findAll();

    return sendResponse(pre_armado_producto,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const pre_armado_producto = await Pre_Armado_ProductoRepository.findOne(id);

    return sendResponse(pre_armado_producto,res);
}

const update = async(req,res) => {
    const pre_armado_producto = await Pre_Armado_ProductoRepository.update(req.body);

    return sendResponse(pre_armado_producto,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const pre_armado_producto = await Pre_Armado_ProductoRepository.remove(id);

    return sendResponse(pre_armado_producto,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const Pre_Armado_ProductoController = { create, findAll, findOne, update, remove }

export default Pre_Armado_ProductoController;