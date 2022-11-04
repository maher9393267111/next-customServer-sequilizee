// // server.js
// const next = require("next");
// const express = require("express");
// const app = express();
// const cors = require('cors')
// const compression = require('compression')
// const morgan = require('morgan')

// require("dotenv").config();

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const PORT = process.env.PORT || 3000;
// //const app = next({ dev, hostname, PORT });
// const nextApp = next({ dev });

// const handle = nextApp.getRequestHandler();
// app.use(express.json());
// app.use(cors())
// app.use(compression()); 
// app.use(morgan('dev'));

// /******************************************************************/
// //const sequelize = require("./server/utils/database");
// const connectDB = require('./server/utils/connectDB');
// const Works = require("./server/models/works");
// const  User = require("./server/models/all")


// const AuthRoutes = require("./server/api/try");


// /******************************************************************/

// nextApp.prepare().then(async () => {
//  // sequelize.sync({ Works }).catch();

 

//   app.use("/api", AuthRoutes);



//   app.all("*", (req, res) => {
//     return handle(req, res);
//   });


// //   server.listen(port, (err) => {
// //     if (err) throw err;
// //     console.log(`> Ready on http://localhost:${port}`);
// //   });
// // });


// const start = async () => {
//   try {
//     await connectDB();
// console.log('sequlize Start in server')


//     app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();




// })