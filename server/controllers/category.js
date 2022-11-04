
const {Category, Blog} = require('../models/all')




const createCategory= async(req, res) => {

try {

let {name} = req.body
console.log('reqBODY----->>>>' , req.body)

const cat = await Category.create({name});

return res.json({cat})
 }
 catch (e) {
    res.status(400).json({message:e})
}

}


// All Categories

const AllCategories = async(req, res, next) => {
    try {
      const blogs = await Category.findAll({
        include: { model: Blog },
      })
      res.send(blogs)
    } catch (error) {
      next(error)
    }
  }
  





module.exports ={createCategory ,AllCategories}
