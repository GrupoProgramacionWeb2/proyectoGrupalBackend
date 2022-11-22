import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Pre_armado_producto = sequelize.define('pre_armado_producto', {

    pre_armado_producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    pre_armado_id: {
        type: DataTypes.INTEGER
    },
    producto_id: {
        type: DataTypes.INTEGER
    }
})

export default Pre_armado_producto;