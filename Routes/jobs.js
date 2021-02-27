const express=require("express");
const app=express();
const Jobs=require("../controllers/jobs")

app.get("/getJobs",Jobs.getJobs);
app.get("/getJobDetails",Jobs.getJobDetails)

module.exports=app