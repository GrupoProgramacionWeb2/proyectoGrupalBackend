import Detalle_UsuarioRepository from '../repository/detalle_usuarioRepository.js';

const create = async (req,res) => {
    
    const result = await Detalle_UsuarioRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const detalle_usuario = await Detalle_UsuarioRepository.findAll();

    return sendResponse(detalle_usuario,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const detalle_usuario = await Detalle_UsuarioRepository.findOne(id);

    return sendResponse(detalle_usuario,res);
}

const update = async(req,res) => {
    const detalle_usuario = await Detalle_UsuarioRepository.update(req.body);

    return sendResponse(detalle_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const detalle_usuario = await Detalle_UsuarioRepository.remove(id);

    return sendResponse(detalle_usuario,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const Detalle_UsuarioController = { create, findAll, findOne, update, remove }

export default Detalle_UsuarioController;