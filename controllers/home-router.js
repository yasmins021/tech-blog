const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // get all posts
    const postData = await Post.findAll({
      include: [
        {
          model: User,
         
        },
      ],
    });

    // serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // render serialized data & sessionflag onto template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:post_id', async (req, res) => {
  try {
    const postData = await Project.findByPk(req.params.post_id, {
      include: [
        {
          model: User,
          attributes: ['title'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// use withAuth middleware to
// prevent the access to our route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // find user by session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { 
        exclude: ['password'] 
      },
      include: [{ 
        model: Post 
      }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

module.exports = router;
