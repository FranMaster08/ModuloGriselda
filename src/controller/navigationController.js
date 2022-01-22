const model = require("../model");
const navigationController = {
  getHome: (req, res, next) => {
    res.render("index", { title: "Griselda" });
  },
  login: async (req, res, next) => {
    try {
      let { user, pass } = req.body;
      let result = await model.user.findOneLogin(user, pass);
      if(result){
        let data = await model.negocio(user, pass);
        res.render("index", { title: `Griselda , Bienvenido ${result.nombre}` });
      }
      res.render("index", { title: `Griselda , user invalido` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = navigationController;
