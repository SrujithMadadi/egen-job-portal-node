const express=require("express");
const app=express();
const cors=require("cors")
const serverless=require("serverless-http")
const bodyParser=require("body-parser")
const jobs=require("./Routes/jobs")

app.use(cors())
app.use(bodyParser.json())
app.use('/.netlify/functions/api',jobs)

module.exports.handler=serverless(app)