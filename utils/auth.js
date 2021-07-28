// Authenticates that the user is logged in, if not directs them to the login page.
const withAuth = (req, res, next) => {
    if (!req.session.loggedin) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;