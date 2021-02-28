const requestPromise = require("request-promise")

const jobsDbo=require("../Db/jobs")

const jobs=(()=>{

    const getJobs=async (req)=>{
        try{
            let jobs=[];
            let searchString=await getSearchString(req);
            jobs=searchString===""?await jobsDbo.getJobs():await jobsDbo.getJobsBySearchCriteria(searchString)
            jobs=JSON.parse(jobs)
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

    const getSearchString=(req)=>{
        let searchString=""
        Object.keys(req.query).map((key)=>{
            if(req.query[key]!=="" && req.query[key]!=="false"){
                searchString=searchString+key+"="+req.query[key]+"&"
            }
        })
        return searchString!==""?searchString.substring(0,searchString.length-1):searchString
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