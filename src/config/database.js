import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const hostname = process.env.HOSTNAME  || 'containers-us-west-92.railway.app'
const username = process.env.USERNAME  || 'postgres'
const password = process.env.PASSWORD  || '9XegNBbga35LpJLrNYSa'
const database = process.env.DATABASE  || 'railway'
const dialect = process.env.DIALECT  || 'postgres'
const port = process.env.DBPORT  || 6514

const sequelize = new Sequelize(database ,username ,password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize;