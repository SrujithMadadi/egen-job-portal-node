const jobsLib=require("../Lib/jobs")

const jobs=(()=>{

    const getJobs=async (req,res)=>{
        try{
            const jobs=await jobsLib.getJobs(req);
            res.status(200).send(jobs)
        }catch(e){
            res.status(400).send([])
        }
    }
    
    const getJobDetails=async (req,res)=>{
        try{
            const jobDetails=await jobsLib.getJobDetails(req.query.id)
            res.status(200).send(jobDetails)
        }catch(e){
            console.log(e)
            res.status(400).send([])
        }
    }

    return {
        getJobs,
        getJobDetails
    }

})()

module.exports=jobs