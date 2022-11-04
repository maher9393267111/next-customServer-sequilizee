const connectDB = require('../../../server/utils/connectDB');
const Works = require("../../../server/models/works");
const  User = require("../../../server/models/all")
import nc from 'next-connect'
 import { createUser } from '../../../server/controllers/auth';


const handler = nc();

connectDB();

//handler.get(getSingleRoom)
//handler.put(updateRoom)
//handler.delete(deleteRoom)
handler.post(createUser)



export default handler;