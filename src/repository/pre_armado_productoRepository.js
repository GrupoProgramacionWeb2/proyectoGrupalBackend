import Pre_Armado_Producto from '../models/pre_armado_producto.js';

const create = async (prearmadoProducto) => {
    console.log("create pre_armado_producto")
    try {
        console.log(prearmadoProducto)
        const { pre_armado_id, producto_id } = prearmadoProducto;

        const newPreArmadoProducto = await Pre_Armado_Producto.create(prearmadoProducto);
            
        return newPreArmadoProducto;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Pre_Armado_Producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (id) => {

    try {
        return await Pre_Armado_Producto.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (pre_armado_producto) => {
    try {
        const foundprearmadoproducto = await Pre_Armado_Producto.findOne({
            where: {
                pre_armado_producto_id: pre_armado_producto.id
            }
        })
        foundprearmadoproducto.set(pre_armado_producto);
        await foundprearmadoproducto.save();
        return foundprearmadoproducto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Pre_Armado_Producto.destroy({
            where: {
                id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const Pre_Armado_ProductoRepository = { create, findAll, findOne, update, remove }

export default Pre_Armado_ProductoRepository;