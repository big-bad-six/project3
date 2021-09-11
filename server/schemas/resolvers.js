// BAD
// models> index, models> profile
// schemas> resolvers, schemas> typeDefs will all have to be changed
const { AuthenticationError } = require('apollo-server-express');
const { User, MemeImage } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    memeimages: async () => {
      return MemeImage.find();
    },

    user: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect username/password!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect username/password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
