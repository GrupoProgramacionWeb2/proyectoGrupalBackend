import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const Orden_producto = sequelize.define('orden_producto', {

    producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orden_id: {
        type: DataTypes.INTEGER
    },
    producto_id: {
        type: DataTypes.INTEGER
    }
})

export default Orden_producto;