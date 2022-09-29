//controllers are just functions that are exported
//the only thing that goes to controllers are database work. (posts, delete)
// const { ????(post) } = require('../models')

module.exports = {
   //Find all posts
    async userLogin (req, res) {
        try {
          // we search the DB for a user with the provided email
          const userData = await User.findOne({ where: { email: req.body.email } });
          if (!userData) {
            // the error message shouldn't specify if the login failed because of wrong email or password
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
          }
          // use `bcrypt.compare()` to compare the provided password and the hashed password
          const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
          );
          // if they do not match, return error message
          if (!validPassword) {
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
          }
          // if they do match, return success message
          res.status(200).json({ message: 'You are now logged in!' });
        } catch (err) {
          res.status(500).json(err);
        }
      }
      //post.create() create a new user ()
      //delete posts
      //update posts
    

}

/*
200 are successful status

400 are client side errors
    404 "not found"
    multiple status codes shouldn't be sent for incorrect input
    "failed login"
500 are server side errors

*/