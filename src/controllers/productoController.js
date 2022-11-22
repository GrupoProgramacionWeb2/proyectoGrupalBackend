import ProductoRepository from '../repository/productoRepository.js';

const create = async (req,res) => {
    
    const result = await ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const producto = await ProductoRepository.findAll();

    return sendResponse(producto,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const producto = await ProductoRepository.findOne(id);

    return sendResponse(producto,res);
}

const update = async(req,res) => {
    const producto = await ProductoRepository.update(req.body);

    return sendResponse(producto,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const producto = await ProductoRepository.remove(id);

    return sendResponse(producto,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ProductoController = { create, findAll, findOne, update, remove }

export default ProductoController;