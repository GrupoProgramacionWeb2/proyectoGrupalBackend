import Pre_ArmadoRepository from '../repository/pre_armadoRepository.js';

const create = async (req,res) => {
    
    const result = await Pre_ArmadoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const pre_armado = await Pre_ArmadoRepository.findAll();

    return sendResponse(pre_armado,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const pre_armado = await Pre_ArmadoRepository.findOne(id);

    return sendResponse(pre_armado,res);
}

const update = async(req,res) => {
    const pre_armado = await Pre_ArmadoRepository.update(req.body);

    return sendResponse(pre_armado,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const pre_armado = await Pre_ArmadoRepository.remove(id);

    return sendResponse(pre_armado,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const Pre_ArmadoController = { create, findAll, findOne, update, remove }

export default Pre_ArmadoController;