import CategoriaRepository from '../repository/categoriaRepository.js';

const create = async (req,res) => {
    
    const result = await CategoriaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const categoria = await CategoriaRepository.findAll();

    return sendResponse(categoria,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const categoria = await CategoriaRepository.findOne(id);

    return sendResponse(categoria,res);
}

const update = async(req,res) => {
    const categoria = await CategoriaRepository.update(req.body);

    return sendResponse(categoria,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const categoria = await CategoriaRepository.remove(id);

    return sendResponse(categoria,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const CategoriaController = { create, findAll, findOne, update, remove }

export default CategoriaController;