import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Detalle_usuario from './detalle_usuario.js';
import Reporte from './reporte.js';
import Resena from './resena.js';
import Orden from './orden.js';


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
// desarrollo
/*
Usuario.hasMany(Detalle_usuario, {
    sourceKey: 'usuario_id',
    foreignKey: 'detalle_id'
})

Usuario.hasMany(Reporte, {
    sourceKey: 'usuario_id',
    foreignKey: 'reporte_id'
})

Usuario.hasMany(Resena, {
    sourceKey: 'usuario_id',
    foreignKey: 'resena_id'
})

Usuario.hasMany(Orden, {
    sourceKey: 'usuario_id',
    foreignKey: 'orden_id'
})

// muchos
Professor.hasMany(Course,{ 
    foreignKey: 'idProfessor',
    sourceKey: 'id'
})
//pertenece
Course.belongsTo(Professor,{
    foreignKey: 'projectId',
    targetId: 'id'
})
*/
export default Usuario;