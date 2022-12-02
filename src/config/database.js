import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const hostname = process.env.HOSTNAME
const username = process.env.USERNAME
const password = process.env.PASSWORD
const database = process.env.DATABASE
const dialect = process.env.DIALECT || 'postgres'
const port = process.env.DBPORT

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