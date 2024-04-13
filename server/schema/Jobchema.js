const { gql } = require('graphql-tag');

const typeDefs_User = gql`
  type Job {
    Job : String!
    JobType : String!
    jobDecription : String!
    price : String!
    userId : String
    
    

  }
  input JobInput {
    Job : String!
    JobType : String!
    jobDecription : String!
    price : String!
    userId : String
  }
  type Query {
    Jobs : [Job]
  }

  type Mutation {
    jobRegistion (input : JobInput ) : Job
  }

`;

module.exports = typeDefs_User;
