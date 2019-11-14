const express = require('express')

const db = require('../users/users-model.js')


const router = express.Router();
const restricted = require("../../auth/restricted-middleware.js");

//all imports done

//get all
router.get('/users', (req, res) => {
    db.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



router.get("/", restricted, checkRole(["student", "admin"]), (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


function checkRole(roles) {
  return function(req, res, next) {
    if (roles.includes(req.decodedJwt.role)) {
      next();
    } else {
      res.status(403).json({ message: "Can't touch this!" });
    }
  };
}


module.exports = router;