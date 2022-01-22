const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_has_RegistroAccesos', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    user_Perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'Perfil_id'
      }
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
    tableName: 'user_has_RegistroAccesos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "user_Perfil_id" },
          { name: "RegistroAccesos_id" },
        ]
      },
      {
        name: "fk_user_has_RegistroAccesos_RegistroAccesos1_idx",
        using: "BTREE",
        fields: [
          { name: "RegistroAccesos_id" },
        ]
      },
      {
        name: "fk_user_has_RegistroAccesos_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "user_Perfil_id" },
        ]
      },
    ]
  });
};
