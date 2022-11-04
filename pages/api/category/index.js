const connectDB = require('../../../server/utils/connectDB');
//const Works = require("../../../../server/models/works");
const  All = require("../../../server/models/all")
import nc from 'next-connect'
 import { createCategory ,AllCategories } from '../../../server/controllers/category';


const handler = nc();

connectDB();

handler.get(AllCategories)
//handler.put(updateRoom)
//handler.delete(deleteRoom)
handler.post(createCategory)



export default handler;