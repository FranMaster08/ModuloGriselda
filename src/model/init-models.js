var DataTypes = require("sequelize").DataTypes;
var _PaginasVisitadas = require("./PaginasVisitadas");
var _Perfil = require("./Perfil");
var _RegistroAccesos = require("./RegistroAccesos");
var _user = require("./user");
var _user_has_RegistroAccesos = require("./user_has_RegistroAccesos");

function initModels(sequelize) {
  var PaginasVisitadas = _PaginasVisitadas(sequelize, DataTypes);
  var Perfil = _Perfil(sequelize, DataTypes);
  var RegistroAccesos = _RegistroAccesos(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_has_RegistroAccesos = _user_has_RegistroAccesos(sequelize, DataTypes);

  user.belongsTo(Perfil, { as: "Perfil", foreignKey: "Perfil_id"});
  Perfil.hasMany(user, { as: "users", foreignKey: "Perfil_id"});
  PaginasVisitadas.belongsTo(RegistroAccesos, { as: "RegistroAcceso", foreignKey: "RegistroAccesos_id"});
  RegistroAccesos.hasMany(PaginasVisitadas, { as: "PaginasVisitadas", foreignKey: "RegistroAccesos_id"});
  user_has_RegistroAccesos.belongsTo(RegistroAccesos, { as: "RegistroAcceso", foreignKey: "RegistroAccesos_id"});
  RegistroAccesos.hasMany(user_has_RegistroAccesos, { as: "user_has_RegistroAccesos", foreignKey: "RegistroAccesos_id"});
  RegistroAccesos.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(RegistroAccesos, { as: "RegistroAccesos", foreignKey: "user_id"});
  RegistroAccesos.belongsTo(user, { as: "user_Perfil", foreignKey: "user_Perfil_id"});
  user.hasMany(RegistroAccesos, { as: "user_Perfil_RegistroAccesos", foreignKey: "user_Perfil_id"});
  user_has_RegistroAccesos.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_has_RegistroAccesos, { as: "user_has_RegistroAccesos", foreignKey: "user_id"});
  user_has_RegistroAccesos.belongsTo(user, { as: "user_Perfil", foreignKey: "user_Perfil_id"});
  user.hasMany(user_has_RegistroAccesos, { as: "user_Perfil_user_has_RegistroAccesos", foreignKey: "user_Perfil_id"});

  return {
    PaginasVisitadas,
    Perfil,
    RegistroAccesos,
    user,
    user_has_RegistroAccesos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
