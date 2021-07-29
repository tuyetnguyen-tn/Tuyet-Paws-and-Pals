const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all pets
router.get('/', async (req, res) => {
    try {
      const dbPetData = await Pet.findAll();
  
      const pets = dbPetData.map((pet) =>
        pet.get({ plain: true })
      );
  
      res.render('petViewPage', {
        loggedIn: req.session.loggedIn,
        pets,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;