const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/technovate",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
