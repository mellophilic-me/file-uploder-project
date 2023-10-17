const mongoose =require("mongoose");
require("dotenv").config();
db_url = process.env.MONGODB_URL || "mongo://localhost:27017/FILE-UPLOADER"
exports.connect =() =>{
  mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
useUnifiedTopology:true, 
    })
    .then(console.log("DB CONNECTION SUCCESSFUL"))
    .catch((error)=>{ console.log("DB CONNECTION ISSUES");
    console.error(error);
process.exit(1)})
   
mongoose.connect(db_url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("DB connected...");
});
    
};