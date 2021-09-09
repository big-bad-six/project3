const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://atlas:atlasagain@cluster0.vqreu.mongodb.net/project3?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
