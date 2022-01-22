const db = require("../database/models");

const userModel = {
  findAll: async () => {
    try {
        let data = await db.user.findAll();
        console.log(data);
        return data
    } catch (error) {
      throw `Ocurrio un error ${error.message}`;
    }
  },
  findOneLogin: async (user,password) => {
    try {
        let data = await db.user.findOne({where: {mail: user , password: password}});
        if(data) return data
        return false;
    } catch (error) {
      throw `Ocurrio un error ${error.message}`;
    }
  },
};
module.exports = userModel
