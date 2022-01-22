const model = require("../model");
const navigationController = {
  getHome: (req, res, next) => {
    res.render("index", { title: "Griselda" });
  },
  login :async (req, res, next) => {
    let { user, pass } = req.body;
    let data= await model.negocio(user, pass);
    res.redirect('/')
  }
};

module.exports = navigationController;
