const db = require('../config/connection');
const { MemeImage, MemeText, Profile } = require('../models');

const memeImageSeeds = require('./memeImageSeeds.json');
const memeTextSeeds = require('./memeTextSeeds.json');
// const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await MemeImage.deleteMany({});
    await MemeImage.create(memeImageSeeds);

    console.log('All images are seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.once('open', async () => {
  try {
    await MemeText.deleteMany({});
    await MemeText.create(memeTextSeeds);

    console.log('All texts are seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});