const connection = require('./index')
const sequelize = require('sequelize')

const provinsi = connection.define("provinsi", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    ibukota: {type: sequelize.DataTypes.STRING}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = provinsi;