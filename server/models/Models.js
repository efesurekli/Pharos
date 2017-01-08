const Sequelize = require('sequelize');
const db = require('../db/db.js');

const Models = {
  User: db.define('user', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
  }),

  Category: db.define('category', {
    name: Sequelize.STRING,
  }, { timestamps: false }),

  Notification: db.define('notification', {
    text: Sequelize.STRING,
    location: Sequelize.GEOGRAPHY,
    vote_count: Sequelize.INTEGER,
  }),
  // Vote: db.define('vote', {
  //   voteType: Sequelize.BOOLEAN,
  // }),
};

// Define relationships:
Models.User.hasMany(Models.Notification, { as: 'Notifications' });
Models.Notification.belongsTo(Models.User);

Models.Category.hasMany(Models.Notification, { as: 'Notifications' });
Models.Notification.belongsTo(Models.Category);

// Models.User.hasMany(Models.Vote, { as: 'Votes' });
// Models.Vote.belongsTo(Models.User);

// Models.Notification.hasMany(Models.Vote, { as: 'Votes' });
// Models.Vote.belongsTo(Models.Notification);

// create tables
Models.User.sync();
Models.Category.sync();
Models.Notification.sync();
// Models.Vote.sync();

module.exports = Models;

