import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Tipo_resena = sequelize.define('tipo_resena', {

    tipo_resena_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    resena_id: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default Tipo_resena;