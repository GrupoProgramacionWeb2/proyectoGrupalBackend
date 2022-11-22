import Pre_Armado from '../models/pre_armado.js';

const create = async (pre_armado) => {
    console.log("create pre_armado")
    try {
        console.log(pre_armado)
        const { nombre, descripcion } = pre_armado;

        const newPrearmado = await Pre_Armado.create(pre_armado);
            
        return newPrearmado;

    } catch(error) {
        console.error(error)
        return null;
    }

}

const findAll = async () => {
    try {
        return await Pre_Armado.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async (pre_armado_id) => {

    try {
        return await Pre_Armado.findOne({
            where: {
                pre_armado_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async (pre_armado) => {
    try {
        const foundprearmado = await Pre_Armado.findOne({
            where: {
                pre_armado_id: pre_armado.id
            }
        })
        foundprearmado.set(pre_armado);
        await foundprearmado.save();
        return foundprearmado;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (pre_armado_id) => {

    try {
        await Pre_Armado.destroy({
            where: {
                pre_armado_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const Pre_ArmadoRepository = { create, findAll, findOne, update, remove }

export default Pre_ArmadoRepository;