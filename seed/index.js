require('dotenv').config();
const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    // create each post from post seed data
    for (const post of postData) {
      await Post.create({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id
      });
    }
    console.log('Finished seeding database.');
  } catch (error) {
    console.error(error);
    console.error(
      'An error occurred attempting to seed the database. Scroll up for additional details.'
    );
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

seedDatabase();
