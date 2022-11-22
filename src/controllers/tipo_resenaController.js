import Tipo_ResenaRepository from '../repository/tipo_resenaRepository.js';

const create = async (req,res) => {
    
    const result = await Tipo_ResenaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const tipo_resena = await Tipo_ResenaRepository.findAll();

    return sendResponse(tipo_resena,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const tipo_resena = await Tipo_ResenaRepository.findOne(id);

    return sendResponse(tipo_resena,res);
}

const update = async(req,res) => {
    const tipo_resena = await Tipo_ResenaRepository.update(req.body);

    return sendResponse(tipo_resena,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const tipo_resena = await Tipo_ResenaRepository.remove(id);

    return sendResponse(tipo_resena,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const CoursesController = { create, findAll, findOne, update, remove }

export default CoursesController;