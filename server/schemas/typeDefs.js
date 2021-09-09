const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String
    email: String
  }

  type MemeImage {
    _id: ID
    desc: String
    url: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    memeimages: [MemeImage]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
