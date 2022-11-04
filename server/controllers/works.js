const Works = require("../models/works");

const SelectAllWorks = async () => {
  return await Works.findAll({
    order: [["id", "DESC"]],
  });
};

module.exports = {
  SelectAllWorks,
};
