const requestPromise = require("request-promise")

const jobsDbo=require("../Db/jobs")

const jobs=(()=>{

    const getJobs=async (latitude,longitude)=>{
        try{
            const jobs=latitude===""?JSON.parse(await jobsDbo.getJobs()):JSON.parse(await jobsDbo.getJobsByLocation(latitude,longitude));
            return jobs.map((job)=>{
                return {
                    time:Math.abs(Math.round((new Date().getTime()-new Date(job.created_at).getTime())/(1000*60*60)))+"h ago",
                    id:job.id,
                    type:job.type,
                    title:job.title,
                    company:job.company,
                    location:job.location,
                    logo:job.company_logo
                }
            })
        }catch(e){
            console.log(e)
        }
    }

    const getJobDetails=async (id)=>{
        let jobDetails={...JSON.parse(await jobsDbo.getJobDetails(id))}
        jobDetails.time=Math.abs(Math.round((new Date().getTime()-new Date(jobDetails.created_at).getTime())/(1000*60*60)))+"h ago"
        return [jobDetails]
    }

    return {
        getJobs,
        getJobDetails
    }
})()

module.exports=jobs