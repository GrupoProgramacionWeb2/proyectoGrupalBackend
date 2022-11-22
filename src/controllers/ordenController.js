import OrdenRepository from '../repository/ordenRepository.js';

const create = async (req,res) => {
    
    const result = await OrdenRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const orden = await OrdenRepository.findAll();

    return sendResponse(orden,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const orden = await OrdenRepository.findOne(id);

    return sendResponse(orden,res);
}

const update = async(req,res) => {
    const orden = await OrdenRepository.update(req.body);

    return sendResponse(orden,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const orden = await OrdenRepository.remove(id);

    return sendResponse(orden,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const OrdenController = { create, findAll, findOne, update, remove }

export default OrdenController;