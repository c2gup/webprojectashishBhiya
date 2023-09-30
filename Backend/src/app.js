const express = require("express");


const app = express();
const Data = require("../models/data");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const path = require('path');

const temp_path = path.join(__dirname,"../template/views");
app.set('view engine', 'hbs');
app.set('views',temp_path);

app.use(express.urlencoded({extended : false}))




const connectWithDb = require("../config/databse"); 
// const userRouter = require("./Routes/userRoute");
// const noteRouter = require("./Routes/noteRouter");
connectWithDb ();

// app.use("/users", userRouter);
// app.use("/note", noteRouter);

//get request
app.get("/", (req,res) => {
      res.render("index")
  })

  app.post('/empdata', async (req , res) =>{
 
   const empdata = new Data({
    phone : req.body.phone,
    pincode : req.body.pincode,
    name : req.body.name,
   });

   res.render("index")
   

   const postdata = await empdata.save();
   
  

  
  
  })

  



  app.listen(PORT ,() => {
      console.log(`App started form  the Port ${PORT}`);
  })