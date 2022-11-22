import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Detalle_usuario = sequelize.define('detalle_usuario', {

    detalle_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    codigo_postal: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }
})

export default Detalle_usuario;