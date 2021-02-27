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

    const getJobsByLocation=(latitude,longitude)=>{
        return rp.get({
            url:"https://jobs.github.com/positions.json?lat="+latitude+"&long="+longitude
        })
    }

    return {
        getJobs,
        getJobDetails,
        getJobsByLocation
    }
})()

module.exports=jobs