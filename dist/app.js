(()=>{var t={897:(t,e,s)=>{const o=s(341),r={getJobs:()=>o.get({url:"https://jobs.github.com/positions.json"}),getJobDetails:t=>o.get({url:"https://jobs.github.com/positions/"+t+".json"}),getJobsBySearchCriteria:t=>o.get({url:"https://jobs.github.com/positions.json?"+t})};t.exports=r},951:(t,e,s)=>{const o=s(897),r={getJobs:async t=>{try{let e=[],s=await(t=>{let e="";return Object.keys(t.query).map((s=>{""!==t.query[s]&&"false"!==t.query[s]&&(e=e+s+"="+t.query[s]+"&")})),""!==e?e.substring(0,e.length-1):e})(t);return e=""===s?await o.getJobs():await o.getJobsBySearchCriteria(s),e=JSON.parse(e),e.map((t=>({time:Math.abs(Math.round(((new Date).getTime()-new Date(t.created_at).getTime())/36e5))+"h ago",id:t.id,type:t.type,title:t.title,company:t.company,location:t.location,logo:t.company_logo})))}catch(t){console.log(t)}},getJobDetails:async t=>{let e={...JSON.parse(await o.getJobDetails(t))};return e.time=Math.abs(Math.round(((new Date).getTime()-new Date(e.created_at).getTime())/36e5))+"h ago",[e]}};t.exports=r},958:(t,e,s)=>{const o=s(127)(),r=s(558);o.get("/getJobs",r.getJobs),o.get("/getJobDetails",r.getJobDetails),t.exports=o},558:(t,e,s)=>{const o=s(951),r={getJobs:async(t,e)=>{try{const s=await o.getJobs(t);e.status(200).send(s)}catch(t){e.status(400).send([])}},getJobDetails:async(t,e)=>{try{const s=await o.getJobDetails(t.query.id);e.status(200).send(s)}catch(t){console.log(t),e.status(400).send([])}}};t.exports=r},473:t=>{"use strict";t.exports=require("body-parser")},479:t=>{"use strict";t.exports=require("cors")},127:t=>{"use strict";t.exports=require("express")},341:t=>{"use strict";t.exports=require("request-promise")}},e={};function s(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,s),r.exports}(()=>{const t=s(127)(),e=s(479),o=s(473),r=s(958);t.use(e()),t.use(o.json()),t.use(r),t.listen(process.env.PORT,(()=>{console.log("Egen-node is running on port "+process.env.PORT)}))})()})();