const mongoose=require("mongoose");
const DB='mongodb+srv://shyamkinjarapu9103:VuQ12qHa83S0bi4e@technovate.ybbuleb.mongodb.net/';
mongoose.connect(DB,{}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
