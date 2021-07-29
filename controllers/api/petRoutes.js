const router = require('express').Router();
const { Pet } = require('../../models');
const authenticate = require('../../utils/auth');

router.post('/', async (req, res) => {
    try { 
      const petData = await Pet.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      description: req.body.description,
      pet_type: req.body.pet_type,
      image_name: req.body.image_name,
      date_posted: req.body.date_posted,
    });
    // if the dish is successfully created, the new response will be returned as json
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(petData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  });

module.exports = router;