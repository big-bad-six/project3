const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  type MemeImage {
    _id: ID
    desc: String
    url: String!
  }

  type Query {
    profiles: [Profile]!
    memeimages: [MemeImage]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    login(email: String!, password: String!): Profile
  }
`;

module.exports = typeDefs;
