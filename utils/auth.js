const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    req.redirect
  } else {
    next();
  }
}

module.exports = withAuth;