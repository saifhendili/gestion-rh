const express = require('express');

const router = express.Router();
const UCTecknique = require('../../models/Utechnique');
const Umanagerials = require('../../models/Umanagerials');
const UComportementales = require('../../models/UComportementales');



var XLSX       = require('xlsx');

var multer     = require('multer');

var mongoose   = require('mongoose');
const auth = require('../../middleware/auth');
//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
  var upload = multer({ storage: storage });


router.post('/addullistrationTechnique',upload.single('excel'),(req,res)=>{
  var workbook =  XLSX.readFile(req.file.path);
  var sheet_namelist = workbook.SheetNames;
  var x=0;
  sheet_namelist.forEach(element => {
      var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
      UCTecknique.insertMany(xlData,(err,data)=>{
          if(err){
              console.log(err);
          }else{
              console.log(data);
          }
      })
      x++;
  });
  res.json("done");
});



  router.post('/addullistrationMangerials',upload.single('excel'),(req,res)=>{
    var workbook =  XLSX.readFile(req.file.path);
    var sheet_namelist = workbook.SheetNames;
    var x=0;
    sheet_namelist.forEach(element => {
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
        Umanagerials.insertMany(xlData,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
        x++;
    });
    res.json("done");
  });


  
router.post('/addUComportementales',upload.single('excel'),(req,res)=>{
    var workbook =  XLSX.readFile(req.file.path);
    var sheet_namelist = workbook.SheetNames;
    var x=0;
    sheet_namelist.forEach(element => {
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
        UComportementales.insertMany(xlData,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
        x++;
    });
    res.json("done");
  });
  router.get('/getullistrationTechnique/',auth,async (req, res) => {
   
    try {

      const data=    await UCTecknique.find()
          res.json(data)
        
  
        

    } catch (error) {
        res.json(error)
    }
})
router.get('/getullistrationMangerials/',auth,async (req, res) => {
   
    try {

      const data=    await Umanagerials.find()
          res.json(data)
        
  
        

    } catch (error) {
        res.json(error)
    }
})
router.get('/GetUComportementales/',auth,async (req, res) => {
   
    try {

      const data=    await UComportementales.find()
          res.json(data)
        
  
        

    } catch (error) {
        res.json(error)
    }
})





router.post('/addUteck',auth,async (req, res) => {
   
    try {
  
       
      const newCompetance =await new UCTecknique({
        souscategorie:req.body.souscategorie,
        IllustrationCM:req.body.IllustrationCM,
        IllustrationCM2:req.body.IllustrationCM2,
        IllustrationCM3:req.body.IllustrationCM3,
        IllustrationCM4:req.body.IllustrationCM4,
        IllustrationCM5:req.body.IllustrationCM5,
        IllustrationCM6:req.body.IllustrationCM6,
        IllustrationCM7:req.body.IllustrationCM7,
        IllustrationCM8:req.body.IllustrationCM8,
        IllustrationCM9:req.body.IllustrationCM9,
        IllustrationCM10:req.body.IllustrationCM10,
        IllustrationCM11:req.body.IllustrationCM11,
        IllustrationCM12:req.body.IllustrationCM12,
        IllustrationCM13:req.body.IllustrationCM13,
        IllustrationCNormes:req.body.IllustrationCNormes,
        IllustrationCNormes1:req.body.IllustrationCNormes1,
        IllustrationCNormes2:req.body.IllustrationCNormes2,
        IllustrationCNormes3:req.body.IllustrationCNormes3,
        IllustrationCNormes4:req.body.IllustrationCNormes4,
        IllustrationCNormes5:req.body.IllustrationCNormes5,
        IllustrationCNormes6:req.body.IllustrationCNormes6,
        IllustrationCNormes7:req.body.IllustrationCNormes7,
        IllustrationCNormes8:req.body.IllustrationCNormes8,
        IllustrationCNormes9:req.body.IllustrationCNormes9,
        IllustrationCNormes10:req.body.IllustrationCNormes10,
        IllustrationCNormes11:req.body.IllustrationCNormes11,
        IllustrationCNormes12:req.body.IllustrationCNormes12,
        IllustrationCNormes13:req.body.IllustrationCNormes13,
        IllustrationActivite:req.body.IllustrationActivite,
        IllustrationActivite2:req.body.IllustrationActivite2,
        IllustrationActivite3:req.body.IllustrationActivite3,
        IllustrationActivite4:req.body.IllustrationActivite4,
        IllustrationActivite5:req.body.IllustrationActivite5,
        IllustrationActivite6:req.body.IllustrationActivite6,
        IllustrationActivite7:req.body.IllustrationActivite7,
        IllustrationActivite8:req.body.IllustrationActivite8,
        IllustrationActivite9:req.body.IllustrationActivite9,
        IllustrationActivite10:req.body.IllustrationActivite10,
        IllustrationActivite11:req.body.IllustrationActivite11,
        IllustrationActivite12:req.body.IllustrationActivite12,
        IllustrationActivite13:req.body.IllustrationActivite13,
        IllustrationOrganisation:req.body.IllustrationOrganisation,
        IllustrationOrganisation2:req.body.IllustrationOrganisation2,
        IllustrationOrganisation3:req.body.IllustrationOrganisation3,
        IllustrationOrganisation4:req.body.IllustrationOrganisation4,
        IllustrationOrganisation5:req.body.IllustrationOrganisation5,
        IllustrationOrganisation6:req.body.IllustrationOrganisation6,
        IllustrationOrganisation7:req.body.IllustrationOrganisation7,
        IllustrationOrganisation8:req.body.IllustrationOrganisation8,
        IllustrationOrganisation9:req.body.IllustrationOrganisation9,
        IllustrationOrganisation10:req.body.IllustrationOrganisation10,
        IllustrationOrganisation11:req.body.IllustrationOrganisation11,
        IllustrationOrganisation12:req.body.IllustrationOrganisation12,
        IllustrationOrganisation13:req.body.IllustrationOrganisation13,
        IllustrationSIBD:req.body.IllustrationSIBD,
        IllustrationSIBD2:req.body.IllustrationSIBD2,
        IllustrationSIBD3:req.body.IllustrationSIBD3,
        IllustrationSIBD4:req.body.IllustrationSIBD4,
        IllustrationSIBD5:req.body.IllustrationSIBD5,
        IllustrationSIBD6:req.body.IllustrationSIBD6,
        IllustrationSIBD7:req.body.IllustrationSIBD7,
        IllustrationSIBD8:req.body.IllustrationSIBD8,
        IllustrationSIBD9:req.body.IllustrationSIBD9,
        IllustrationSIBD10:req.body.IllustrationSIBD10,
        IllustrationSIBD11:req.body.IllustrationSIBD11,
        IllustrationSIBD12:req.body.IllustrationSIBD12,
        IllustrationSIBD13:req.body.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:req.body.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:req.body.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:req.body.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:req.body.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:req.body.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:req.body.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:req.body.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:req.body.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:req.body.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:req.body.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:req.body.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:req.body.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:req.body.IllustrationLinguistiquesBureautiques13,

      });
      const post = await newCompetance.save();
      res.json(post);  
    } catch (error) {
        res.json(error)
    }
  })


  router.post('/addUmanagerials',auth,async (req, res) => {
   
    try {
  
       
      const newCompetance =await new Umanagerials({
        souscategorie:req.body.souscategorie,
        IllustrationOrientationstrategique:req.body.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:req.body.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:req.body.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:req.body.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:req.body.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:req.body.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:req.body.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:req.body.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:req.body.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:req.body.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:req.body.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:req.body.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:req.body.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:req.body.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:req.body.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:req.body.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:req.body.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:req.body.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:req.body.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:req.body.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:req.body.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:req.body.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:req.body.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:req.body.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:req.body.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:req.body.IllustrationSensdesaffaires13,
        IllustrationLeadership:req.body.IllustrationLeadership,
        IllustrationLeadership2:req.body.IllustrationLeadership2,
        IllustrationLeadership3:req.body.IllustrationLeadership3,
        IllustrationLeadership4:req.body.IllustrationLeadership4,
        IllustrationLeadership5:req.body.IllustrationLeadership5,
        IllustrationLeadership6:req.body.IllustrationLeadership6,
        IllustrationLeadership7:req.body.IllustrationLeadership7,
        IllustrationLeadership8:req.body.IllustrationLeadership8,
        IllustrationLeadership9:req.body.IllustrationLeadership9,
        IllustrationLeadership10:req.body.IllustrationLeadership10,
        IllustrationLeadership11:req.body.IllustrationLeadership11,
        IllustrationLeadership12:req.body.IllustrationLeadership12,
        IllustrationLeadership13:req.body.IllustrationLeadership13,
        IllustrationGestionOperationnelle:req.body.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:req.body.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:req.body.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:req.body.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:req.body.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:req.body.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:req.body.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:req.body.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:req.body.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:req.body.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:req.body.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:req.body.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:req.body.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:req.body.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:req.body.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:req.body.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:req.body.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:req.body.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:req.body.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:req.body.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:req.body.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:req.body.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:req.body.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:req.body.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:req.body.IllustrationGestionEquipe12,
        IllustrationGestionEquipe13:req.body.IllustrationGestionEquipe13,



        
      });
      const post = await newCompetance.save();
      res.json(post);  
    } catch (error) {
        res.json(error)
    }
  })



  router.post('/addUcComportementales',auth,async (req, res) => {
   
    try {
       
      const newCompetance =await new UComportementales({
        souscategorie:req.body.souscategorie,
        Illustrationinnovation:req.body.Illustrationinnovation,
        Illustrationinnovation2:req.body.Illustrationinnovation2,
        Illustrationinnovation3:req.body.Illustrationinnovation3,
        Illustrationinnovation4:req.body.Illustrationinnovation4,
        Illustrationinnovation5:req.body.Illustrationinnovation5,
        Illustrationinnovation6:req.body.Illustrationinnovation6,
        Illustrationinnovation7:req.body.Illustrationinnovation7,
        Illustrationinnovation8:req.body.Illustrationinnovation8,
        Illustrationinnovation9:req.body.Illustrationinnovation9,
        Illustrationinnovation10:req.body.Illustrationinnovation10,
        Illustrationinnovation11:req.body.Illustrationinnovation11,
        Illustrationinnovation12:req.body.Illustrationinnovation12,
        Illustrationinnovation13:req.body.Illustrationinnovation13,
        IllustrationAgilit:req.body.IllustrationAgilit,
        IllustrationAgilit2:req.body.IllustrationAgilit2,
        IllustrationAgilit3:req.body.IllustrationAgilit3,
        IllustrationAgilit4:req.body.IllustrationAgilit4,
        IllustrationAgilit5:req.body.IllustrationAgilit5,
        IllustrationAgilit6:req.body.IllustrationAgilit6,
        IllustrationAgilit7:req.body.IllustrationAgilit7,
        IllustrationAgilit8:req.body.IllustrationAgilit8,
        IllustrationAgilit9:req.body.IllustrationAgilit9,
        IllustrationAgilit10:req.body.IllustrationAgilit10,
        IllustrationAgilit11:req.body.IllustrationAgilit11,
        IllustrationAgilit12:req.body.IllustrationAgilit12,
        IllustrationAgilit13:req.body.IllustrationAgilit13,
        IllustrationForceCollectif:req.body.IllustrationForceCollectif,
        IllustrationForceCollectif2:req.body.IllustrationForceCollectif2,
        IllustrationForceCollectif3:req.body.IllustrationForceCollectif3,
        IllustrationForceCollectif4:req.body.IllustrationForceCollectif4,
        IllustrationForceCollectif5:req.body.IllustrationForceCollectif5,
        IllustrationForceCollectif6:req.body.IllustrationForceCollectif6,
        IllustrationForceCollectif7:req.body.IllustrationForceCollectif7,
        IllustrationForceCollectif8:req.body.IllustrationForceCollectif8,
        IllustrationForceCollectif9:req.body.IllustrationForceCollectif9,
        IllustrationForceCollectif10:req.body.IllustrationForceCollectif10,
        IllustrationForceCollectif11:req.body.IllustrationForceCollectif11,
        IllustrationForceCollectif12:req.body.IllustrationForceCollectif12,
        IllustrationForceCollectif13:req.body.IllustrationForceCollectif13,
        IllustrationRespectEngagement:req.body.IllustrationRespectEngagement,
        IllustrationRespectEngagement2:req.body.IllustrationRespectEngagement2,
        IllustrationRespectEngagement3:req.body.IllustrationRespectEngagement3,
        IllustrationRespectEngagement4:req.body.IllustrationRespectEngagement4,
        IllustrationRespectEngagement5:req.body.IllustrationRespectEngagement5,
        IllustrationRespectEngagement6:req.body.IllustrationRespectEngagement6,
        IllustrationRespectEngagement7:req.body.IllustrationRespectEngagement7,
        IllustrationRespectEngagement8:req.body.IllustrationRespectEngagement8,
        IllustrationRespectEngagement9:req.body.IllustrationRespectEngagement9,
        IllustrationRespectEngagement10:req.body.IllustrationRespectEngagement10,
        IllustrationRespectEngagement11:req.body.IllustrationRespectEngagement11,
        IllustrationRespectEngagement12:req.body.IllustrationRespectEngagement12,
        IllustrationRespectEngagement13:req.body.IllustrationRespectEngagement13,


        
      });
      const post = await newCompetance.save();
      res.json(post);  
    } catch (error) {
        res.json(error)
    }
  })


  router.get('/getteck',async (req, res) => {
try {
  const data= await ExcelModel.findOne({'Libelle':req.body.titre,'souscategorie':req.body.SousCategorie})
  const dataumanagerials= await Umanagerials.findOne({'souscategorie':req.body.SousCategorie})
  const dataucomportementales= await UComportementales.findOne({'souscategorie':req.body.SousCategorie})
  const datauteck= await UCTecknique.findOne({'souscategorie':req.body.SousCategorie})

  res.json(dataucomportementales)
} catch (error) {
  console.log(error)
}
  })

module.exports = router;