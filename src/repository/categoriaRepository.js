import Categoria from '../models/categoria.js';

const create = async (categoria) => {
    console.log("create categoria")
    try {
        console.log(categoria)
        const { nombre, descripcion } = categoria;

        const newCategoria = await Categoria.create(categoria);
            
        return newCategoria;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Categoria.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (categoria_id) => {

    try {
        return await Categoria.findOne({
            where: {
                categoria_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (categoria) => {
    try {
        const foundcategoria = await Categoria.findOne({
            where: {
                id: categoria.id
            }
        })
        foundcategoria.set(categoria);
        await foundcategoria.save();
        return foundcategoria;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (categoria_id) => {

    try {
        await Categoria.destroy({
            where: {
                categoria_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const CategoriaRepository = { create, findAll, findOne, update, remove }

export default CategoriaRepository;