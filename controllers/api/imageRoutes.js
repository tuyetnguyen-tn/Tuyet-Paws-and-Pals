const router = require('express').Router();
const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, './public/images/animal_images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});
const upload = multer({storage: fileStorageEngine});



router.post('/single', upload.single('image'), (req, res) => {
  try{

  }catch{
    
  }
    console.log(req.file.originalname);
});

module.exports = router;