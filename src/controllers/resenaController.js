import ResenaRepository from '../repository/resenaRepository.js';

const create = async (req,res) => {
    
    const result = await ResenaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const resena = await ResenaRepository.findAll();

    return sendResponse(resena,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const resena = await ResenaRepository.findOne(id);

    return sendResponse(resena,res);
}

const update = async(req,res) => {
    const resena = await ResenaRepository.update(req.body);

    return sendResponse(resena,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const resena = await ResenaRepository.remove(id);

    return sendResponse(resena,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ResenaController = { create, findAll, findOne, update, remove }

export default ResenaController;