const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "mail_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Perfil',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Perfil_id" },
        ]
      },
      {
        name: "mail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_user_Perfil_idx",
        using: "BTREE",
        fields: [
          { name: "Perfil_id" },
        ]
      },
    ]
  });
};
