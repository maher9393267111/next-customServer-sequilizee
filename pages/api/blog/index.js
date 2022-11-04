const connectDB = require('../../../server/utils/connectDB');
//const Works = require("../../../../server/models/works");
const  All = require("../../../server/models/all")
import nc from 'next-connect'
 import { createBlog , AllBlogs } from '../../../server/controllers/blog';


const handler = nc();

connectDB();

handler.get(AllBlogs)
//handler.put(updateRoom)
//handler.delete(deleteRoom)
handler.post(createBlog)



export default handler;