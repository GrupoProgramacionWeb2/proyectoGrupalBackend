import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Producto = sequelize.define('producto', {

    producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default Producto;