const router = require('express').Router();
const Pet = require('../../models/Pet');
const authenticate = require('../../utils/auth');

router.post('/', authenticate, async (req, res) => {
    try { 
      const petData = await Pet.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      description: req.body.description,
      pet_type: req.body.pet_type,
      date_posted: req.body.date_posted,
    });
    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
  });

module.exports = router;