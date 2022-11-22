import Detalle_usuario from '../models/detalle_usuario.js';

const create = async (usuario) => {
    console.log("create detalle_usuario")
    try {
        console.log(usuario)
        const { usuario_id, direccion, departamento, ciudad, codigo_postal, telefono } = usuario;

        const newUsuario = await Detalle_usuario.create(usuario);
            
        return newUsuario;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Detalle_usuario.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (detalle_id) => {

    try {
        return await Detalle_usuario.findOne({
            where: {
                detalle_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (usuario) => {
    try {
        const founddetalle_usuario = await Detalle_usuario.findOne({
            where: {
                usuario_id: usuario.id
            }
        })
        founddetalle_usuario.set(usuario);
        await founddetalle_usuario.save();
        return founddetalle_usuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (detalle_id) => {

    try {
        await Detalle_usuario.destroy({
            where: {
                detalle_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const Detalle_usuarioRepository = { create, findAll, findOne, update, remove }

export default Detalle_usuarioRepository;