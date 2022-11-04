
const {Category,Blog} = require('../models/all')




const createBlog= async(req, res) => {

try {

let {title,content,categoryId} = req.body
console.log('reqBODY----->>>>' , req.body)

const blog = await Blog.create({title,content,categoryId});

return res.json({blog})
 }
 catch (e) {
    res.status(400).json({message:e.message})
}

}


const AllBlogs = async(req, res, next) => {
    try {
      const blogs = await Blog.findAll({
        include: { model: Category },
      })
      res.send(blogs)
    } catch (error) {
      next(error)
    }
  }
  





module.exports ={createBlog ,AllBlogs}