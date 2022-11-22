import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Usuario = sequelize.define('usuario', {

    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING
    }
})

export default Usuario;