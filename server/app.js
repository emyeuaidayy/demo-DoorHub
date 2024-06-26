
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load schema & resolver

// Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Home-service');
    console.log('Connected to database home-service ;)');
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

const typeDefs_account = require('./schema/Accountschema');
const typeDefs_Job = require('./schema/Jobchema');

const account_resolvers = require('./resolver/account/accountResolver');
const user_Job = require('./resolver/jobRegistion/jobRegistion');

const server = new ApolloServer({
  typeDefs :[typeDefs_account ,typeDefs_Job],
  resolvers : [account_resolvers ,user_Job],
});

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 3000 }, () =>
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
  );
});

return { server, app };



