const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CriticalPass', {
    idCriticalPass: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sitio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pass: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CriticalPass',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCriticalPass" },
        ]
      },
    ]
  });
};
