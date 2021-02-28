const express=require("express");
const app=express();
const Jobs=require("../controllers/jobs")

app.get("/",(req,res)=>{
    res.status(200).send({status:"Egen-jobportal-node-server is running"})
})
app.get("/getJobs",Jobs.getJobs);
app.get("/getJobDetails",Jobs.getJobDetails)

module.exports=app