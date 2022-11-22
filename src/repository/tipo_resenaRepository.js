import Tipo_Resena from '../models/tipo_resena.js';

const create = async (resena) => {
    console.log("create tipo_resena")
    try {
        console.log(resena)
        const { resena_id, nombre, descripcion } = resena;

        const newTipoResena = await Tipo_Resena.create(resena);
            
        return newTipoResena;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Tipo_Resena.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (id) => {

    try {
        return await Tipo_Resena.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (resena) => {
    try {
        const foundtiporesena = await Tipo_Resena.findOne({
            where: {
                tipo_resena_id: resena.id
            }
        })
        foundtiporesena.set(resena);
        await foundtiporesena.save();
        return foundtiporesena;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Tipo_Resena.destroy({
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

const Tipo_ResenaRepository = { create, findAll, findOne, update, remove }

export default Tipo_ResenaRepository;