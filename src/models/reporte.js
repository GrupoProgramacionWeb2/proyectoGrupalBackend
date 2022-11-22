import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Reporte = sequelize.define('reporte', {

    reporte_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    correo: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default Reporte;