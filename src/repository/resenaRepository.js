import Resena from '../models/resena.js';

const create = async (resena) => {
    console.log("create reseña")
    try {
        console.log(resena)
        const { usuario_id, puntaje, comentario, video_influencer, link_influencer } = resena;

        const newResena = await Resena.create(resena);
            
        return newResena;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Resena.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (id) => {

    try {
        return await Resena.findOne({
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
        const foundresena = await Resena.findOne({
            where: {
                resena_id: resena.id
            }
        })
        foundresena.set(resena);
        await foundresena.save();
        return foundresena;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Resena.destroy({
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

const ResenaRepository = { create, findAll, findOne, update, remove }

export default ResenaRepository;