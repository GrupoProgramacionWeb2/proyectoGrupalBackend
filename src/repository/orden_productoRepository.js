import Orden_Producto from '../models/orden_producto.js';

const create = async (orden) => {
    console.log("create orden_producto")
    try {
        console.log(orden)
        const { orden_id, producto_id } = orden;

        const newOrden = await Orden_Producto.create(orden);
            
        return newOrden;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Orden_Producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (orden_producto_id) => {

    try {
        return await Orden_Producto.findOne({
            where: {
                orden_producto_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (orden) => {
    try {
        const foundorden = await Orden_Producto.findOne({
            where: {
                orden_producto_id: orden.id
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

const remove = async (orden_producto_id) => {

    try {
        await Orden_Producto.destroy({
            where: {
                orden_producto_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const Orden_ProductoRepository = { create, findAll, findOne, update, remove }

export default Orden_ProductoRepository;