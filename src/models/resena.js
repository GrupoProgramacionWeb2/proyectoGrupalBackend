import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Resena = sequelize.define('resena', {

    resena_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    puntaje: {
        type: DataTypes.INTEGER
    },
    comentario: {
        type: DataTypes.STRING
    },
    video_influencer: {
        type: DataTypes.STRING
    },
    link_influencer: {
        type: DataTypes.STRING
    }
})

export default Resena;