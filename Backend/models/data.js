const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

       phone : {
            type :Number ,
            require : true
      },
      pincode : {
            type : Number,
            require : true
      },
      name : {
            type : String,
            require : true
      },}
     
     
      
);

module.exports = mongoose.model("Data", DataSchema)