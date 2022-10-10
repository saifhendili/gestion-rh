const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const ExcelModel = require('../../models/Competances');



router.get('/',auth,async (req, res) => {
  try {
    const data=await ExcelModel.find()
     res.json(data);
  } catch (error) {
     res.status(501).json(err);
  }

   });
 

module.exports = router;