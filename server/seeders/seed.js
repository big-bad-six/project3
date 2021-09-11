const db = require('../config/connection');
const { MemeImage, MemeText, User } = require('../models');

const memeImageSeeds = require('./memeImageSeeds.json');
const memeTextSeeds = require('./memeTextSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await MemeImage.deleteMany({});
    await MemeImage.create(memeImageSeeds);
    console.log('All images are seeded!');
    await MemeText.deleteMany({});
    await MemeText.create(memeTextSeeds);
    console.log('All texts are seeded!');
    await User.deleteMany({});
    await User.create(userSeeds);
    console.log('All users are seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});