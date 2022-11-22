import Reporte from '../models/reporte.js';

const create = async (reporte) => {
    console.log("create reporte")
    try {
        console.log(reporte)
        const { usuario_id, correo, nombre, telefono, asunto, descripcion } = reporte;

        const newReporte = await Reporte.create(reporte);
            
        return newReporte;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Reporte.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (reporte_id) => {

    try {
        return await Reporte.findOne({
            where: {
                reporte_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (reporte) => {
    try {
        const foundreporte = await Reporte.findOne({
            where: {
                reporte_id: reporte.id
            }
        })
        foundreporte.set(reporte);
        await foundreporte.save();
        return foundreporte;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (reporte_id) => {

    try {
        await Reporte.destroy({
            where: {
                reporte_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const UsuarioRepository = { create, findAll, findOne, update, remove }

export default UsuarioRepository;