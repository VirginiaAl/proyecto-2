const User = require('../models/User');
module.exports = {
  profileGet: (req, res, next) => {
    User.find({receiverId: res.locals.user._id}, (err, user) => {

      res.render('user/profile', {
        user: res.locals.user,
      });
    });
  },

  editGet: (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        console.log(err);
      }
      res.render('user/editUser', {
        user: user
      });
    });
  },

  editPost: (req, res, next) => {
    let updates = {
      username: req.body.username,
      email: req.body.email,
    };
    User.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect('/user/profile');
    });
  }
};
