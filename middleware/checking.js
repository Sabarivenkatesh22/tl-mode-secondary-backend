const User = require('../models/userRole/user');

exports.userById = (req, res, next) => {
  let userId = req.params.userId;
  let user = User.findOne({ userId: userId }).exec((err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User not found"
      })
    }
    req.profile = user;
    next();
  })
}