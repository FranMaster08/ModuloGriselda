const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaginasVisitadas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UrlVisitada: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RegistroAccesos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RegistroAccesos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'PaginasVisitadas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "RegistroAccesos_id" },
        ]
      },
      {
        name: "fk_PaginasVisitadas_RegistroAccesos1_idx",
        using: "BTREE",
        fields: [
          { name: "RegistroAccesos_id" },
        ]
      },
    ]
  });
};
