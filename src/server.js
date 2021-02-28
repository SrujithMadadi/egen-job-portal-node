const express=require("express");
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
const jobs=require("./Routes/jobs");
app.use(cors())
app.use(bodyParser.json())
app.use(jobs)


app.listen(process.env.PORT,()=>{
    console.log("Egen-node is running on port "+process.env.PORT)
})