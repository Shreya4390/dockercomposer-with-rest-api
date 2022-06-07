const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');
const authRouter = require ('./routes/record')
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

//Routes 
app.get("/t",(req,res)=>{
  res.send("hello")
})
app.use('/api', authRouter);
// var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
// console.log(ip)

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }
});
  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

