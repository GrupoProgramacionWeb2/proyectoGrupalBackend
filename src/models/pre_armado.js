import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Pre_armado = sequelize.define('pre_armado', {

    pre_armado_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default Pre_armado;