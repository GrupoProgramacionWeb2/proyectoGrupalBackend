import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Orden = sequelize.define('orden', {

    orden_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    monto: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    }
})

export default Orden;