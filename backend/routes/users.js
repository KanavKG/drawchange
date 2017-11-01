// NPM Packages
const express = require('express');
const { check, oneOf, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const router = express.Router();

// Local Imports
const User = require('../models/user');

router.route('/')
  .get((req, res) => {
    User.find().select('name id')
      .then(users => res.status(200).json({ users }))
      .catch(errors =>  res.status(500).json({ errors }));
  })
  .post([ //TODO Add validations for events and survey_responses Array
    check('first_name').exists().isAscii().trim().escape(),
    check('last_name').exists().isAscii().trim().escape(),
    check('email').exists().isEmail().trim(),
    check('street_address').exists().isAscii().trim().escape(),
    check('city').exists().isAscii().trim().escape(),
    check('state').exists().isAscii().trim().escape(),
    check('zip_code').exists().isAscii().trim().escape(),
    check('phone_number').exists().isAscii().trim().escape(),
    check('date_of_birth').exists().trim().escape()
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }
    const userData = matchedData(req);
    userData.events = req.body.events;
    userData.survey_responses = req.body.survey_responses;

    const newUser = new User(userData);
    newUser.save()
      .then(user => res.status(200).json({ user }))
      .catch(errors =>  res.status(500).json({ errors }));
  });

router.route('/:id')
    .get([ check('id').isMongoId() ], (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
      User.findById(req.params.id)
        .then(user => {
          user
            ? res.status(200).json({ user })
            : res.status(404).json({ errors: `No User found with id: ${req.params.id}`});
        })
        .catch(errors =>  res.status(500).json({ errors }));
    })
    .put([check('id').isMongoId()], oneOf([ //TODO Add validations for events and survey_responses Array
      check('first_name').exists().isAscii().trim().escape(),
      check('last_name').exists().isAscii().trim().escape(),
      check('email').exists().isEmail().trim(),
      check('street_address').exists().isAscii().trim().escape(),
      check('city').exists().isAscii().trim().escape(),
      check('state').exists().isAscii().trim().escape(),
      check('zip_code').exists().isAscii().trim().escape(),
      check('phone_number').exists().isAscii().trim().escape(),
      check('date_of_birth').exists().trim().escape()
    ]), (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }

      const userData = matchedData(req);
      userData.events = req.body.events;
      userData.survey_responses = req.body.survey_responses;

      User.findById(req.params.id)
        .then(user => {

          if (!user) {
            return res.status(404).json({ errors: `No user found with id: ${req.params.id}`});
          }

          user.first_name = userData.first_name || user.first_name;
          user.last_name = userData.last_name || user.last_name;
          user.email = userData.email || user.email;
          user.street_address = userData.street_address || user.street_address;
          user.city = userData.city || user.city;
          user.state = userData.state || user.state;
          user.zip_code = userData.zip_code || user.zip_code;
          user.phone_number = userData.phone_number || user.phone_number;
          user.date_of_birth = userData.date_of_birth || user.date_of_birth;
          user.events = userData.events || user.events;
          user.survey_responses = userData.survey_responses || user.survey_responses;

          user.save();
          res.status(200).json({ user });
        })
        .catch(errors => res.status(500).json({ errors }));
    })
    .delete([ check('id').isMongoId() ], (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
      User.findByIdAndRemove(req.params.id)
        .then(removed => {
          removed
                ? res.status(200).json({ removed })
                : res.status(404).json({ errors: `No response found with id: ${req.params.id}`});
        })
        .catch(errors =>  res.status(500).json({ errors }));
    });


module.exports = router;