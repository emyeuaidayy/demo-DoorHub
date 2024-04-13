const UserData = require ('../../models/Jobs/JobData');
const typeDefs_account = require('../../schema/Accountschema');

const user_resolvers =  {
    Mutation : {
        jobRegistion : async (parents , args ,context , infor ) =>{
           const  newJob= new UserData ({
                Job : args.input.Job ,
                JobType : args.input.JobType ,
                price : args.input.price ,
                jobDecription : args.input.jobDecription,
                userId : args.input.userId,
            });
            return await newJob.save();
        }
    }

}
module.exports= user_resolvers;