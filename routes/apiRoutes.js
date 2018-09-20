var db = require("../models");

module.exports = function(app) {
  // database login
  app.post("/api/accounts", function(req, res) {
    db.Users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  // creates an account
  app.post("/api/signup", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(db.Users);
    db.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(result);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  //grabing user information
  app.post("/api/jobs", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      // console.log("this is from api routes " + JSON.stringify(dbUser, null, 2));
      res.json(dbUser);
    });
  });
  //Stores Form info in db
  app.post("/api/posting", function(req, res) {
    db.Jobs.create({
      firstName: req.body.firstName,
      task: req.body.task,
      description: req.body.description,
      price: req.body.price,
      address: req.body.address
    })
      .then(function(result) {
        // We have access to the new jobs as an argument inside of the callback function
        console.log(
          "this is the results: " + JSON.stringify(result.id, null, 2)
        );
        res.json(result);
        result.addUsers([userId]);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.get("/api/posting", function(req, res) {
    db.Jobs.findAll({}).then(function(dbJobs) {
      console.log(dbJobs);
      res.json(dbJobs);
    });
  });

  app.get("/api/Jobs", function(req, res) {
    var query = {};
    if (req.query.userid) {
      query.UserId = req.query.userid;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Jobs.findAll({
      where: query,
      include: [db.Users]
    }).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });
};
