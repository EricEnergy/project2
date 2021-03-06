// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login", null);
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login", null);
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.render("index", null);
  });

  app.get("/hosting", isAuthenticated, function(req, res) {
    res.render("hosting", null);
  });

  app.get("/find", isAuthenticated, function(req, res) {
    res.render("finder", null);
  });
};
