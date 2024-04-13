
const mongoose = require ('mongoose')

const schema = mongoose.Schema

const jobSchema = new schema ({
    Job : {
        type : String,
        required : true
    },
    JobType : {
        type : String ,
        required : true
    },
    jobDecription : {
        type : String ,
        required : true
    },
    price : {
        type : String ,
        require : true
    },
    userId : {
        type : String 
    }
    
 

})
module.exports = mongoose.model('Job ', jobSchema);