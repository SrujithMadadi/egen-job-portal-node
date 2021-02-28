const rp=require("../rp")

const jobs=(()=>{

    const getJobs=()=>{
        return rp.get({
            url:"https://jobs.github.com/positions.json"
        })
    }

    const getJobDetails=(id)=>{
        return rp.get({url:"https://jobs.github.com/positions/"+id+".json"})
    }

    const getJobsBySearchCriteria=(searchString)=>{
        return rp.get({
            url:"https://jobs.github.com/positions.json?"+searchString
        })
    }
    return {
        getJobs,
        getJobDetails,
        getJobsBySearchCriteria
    }
})()

module.exports=jobs