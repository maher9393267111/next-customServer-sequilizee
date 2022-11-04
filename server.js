// server.js
const next = require("next");
const express = require("express");
const server = express();

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const PORT = process.env.PORT || 3000;
const app = next({ dev, hostname, PORT });

const handle = app.getRequestHandler();

/******************************************************************/
//const sequelize = require("./server/utils/database");
const connectDB = require('./server/utils/connectDB');
const Works = require("./server/models/works");
const  User = require("./server/models/all")
//   User,
  //Posts,
/******************************************************************/

app.prepare().then(async () => {
 // sequelize.sync({ Works }).catch();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });


const start = async () => {
  try {
    await connectDB();
console.log('sequlize Start in server')


    server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();




})