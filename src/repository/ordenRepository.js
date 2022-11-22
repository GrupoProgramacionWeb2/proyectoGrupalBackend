import Orden from '../models/orden.js';

const create = async (orden) => {
    console.log("create orden")
    try {
        console.log(orden)
        const { usuario_id, monto, direccion, fecha } = orden;

        const newOrden = await Orden.create(orden);
            
        return newOrden;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Orden.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (orden_id) => {

    try {
        return await Orden.findOne({
            where: {
                orden_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (orden) => {
    try {
        const foundorden = await Orden.findOne({
            where: {
                orden_id: orden.id
            }
        })
        foundorden.set(orden);
        await foundorden.save();
        return foundorden;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (orden_id) => {

    try {
        await Orden.destroy({
            where: {
                orden_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const OrdenRepository = { create, findAll, findOne, update, remove }

export default OrdenRepository;