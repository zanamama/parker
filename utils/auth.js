const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    req.redirect
  }
}