const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type MemeImage {
    _id: ID
    desc: String
    url: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    memeimages: [MemeImage]!
    user(email: String!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
