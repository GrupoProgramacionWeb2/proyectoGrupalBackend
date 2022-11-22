import Orden_ProductoRepository from '../repository/orden_productoRepository.js';

const create = async (req,res) => {
    
    const result = await Orden_ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const orden_producto = await Orden_ProductoRepository.findAll();

    return sendResponse(orden_producto,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const orden_producto = await Orden_ProductoRepository.findOne(id);

    return sendResponse(orden_producto,res);
}

const update = async(req,res) => {
    const orden_producto = await Orden_ProductoRepository.update(req.body);

    return sendResponse(orden_producto,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const orden_producto = await Orden_ProductoRepository.remove(id);

    return sendResponse(orden_producto,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const Orden_ProductoController = { create, findAll, findOne, update, remove }

export default Orden_ProductoController;