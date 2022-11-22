import Producto from '../models/producto.js';

const create = async (producto) => {
    console.log("create producto")
    try {
        console.log(producto)
        const { categoria_id, nombre, precio, descripcion } = producto;

        const newProducto = await Producto.create(producto);
            
        return newProducto;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (id) => {

    try {
        return await Producto.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (producto) => {
    try {
        const foundproducto = await Producto.findOne({
            where: {
                producto_id: producto.id
            }
        })
        foundproducto.set(producto);
        await foundproducto.save();
        return foundproducto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Producto.destroy({
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

const ProductoRepository = { create, findAll, findOne, update, remove }

export default ProductoRepository;