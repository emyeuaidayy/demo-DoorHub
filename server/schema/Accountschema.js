const { gql } = require('graphql-tag');

const typeDefs_account = gql`
  type AccountRegister {
    id: ID!
    username: String!       
    password: String!
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
  }
  
  input RegisterAccountInput {
    username: String!
    password: String!
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
  }
  
  type Account {
    _id: ID!
    username: String!
    name: String!
    password : String!
    token : String
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  type Query {
    register: [AccountRegister]
    login: [Account]
  }
  
  type Mutation {
    registerAccount(input: RegisterAccountInput!): AccountRegister
    login(input: LoginInput!): Account
  }
`;

module.exports = typeDefs_account;
