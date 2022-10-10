const express = require('express');
const auth = require('../../middleware/auth');
const Fiche = require('../../models/Fiche');
const router = express.Router();
const User = require('../../models/User');
const ExcelModel = require('../../models/Competances');
const UCTecknique = require('../../models/Utechnique');
const Umanagerials = require('../../models/Umanagerials');
const UComportementales = require('../../models/UComportementales');


var XLSX       = require('xlsx');

var multer     = require('multer');

var mongoose   = require('mongoose');
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

// var excelSchema = new mongoose.Schema({
//     Libelle:String,
//     souscategorie:String,
//   NiveauComportementales1:Number,
//   NiveauComportementales2:Number,
//   NiveauComportementales3:Number,
//   NiveauComportementales4:Number,
//   NiveauManagerials1:Number,
//   NiveauManagerials2:Number,
//   NiveauManagerials3:Number,
//   NiveauManagerials4:Number,
//   NiveauManagerials5:Number,
//   NiveauManagerials6:Number,
//   niveauMetier1:Number,
//   niveauMetier2:Number,
//   niveauMetier3:Number,
//   niveauMetier4:Number,
//   niveauMetier5:Number,
//   niveauMetier6:Number,

// });

// var excelModel = mongoose.model('competances',excelSchema);


router.post('/addCompetance',upload.single('excel'),(req,res)=>{
  var workbook =  XLSX.readFile(req.file.path);
  var sheet_namelist = workbook.SheetNames;
  var x=0;
  sheet_namelist.forEach(element => {
      var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
      ExcelModel.insertMany(xlData,(err,data)=>{
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
// router.get('/',async (req, res) => {
//   try {
//       const data=await excelModel.find()
//       res.json(data);
//   } catch (error) {
//       console.log(error)
//   }
    
  
//       });

router.post('/',auth,async (req, res) => {
    try {

    const datauteck= await UCTecknique.findOne({'souscategorie':req.body.SousCategorie})
    const dataumanagerials= await Umanagerials.findOne({'souscategorie':req.body.SousCategorie})
    const dataucomportementales= await UComportementales.findOne({'souscategorie':req.body.SousCategorie})

    const data= await ExcelModel.findOne({'Libelle':req.body.titre,'souscategorie':req.body.SousCategorie})
    const user = await User.findById(req.user.id).select('-password');

    const newVersionRequest={
      Illustrationinnovation:"",
      Illustrationinnovation2:"",
      Illustrationinnovation3:"",
      Illustrationinnovation4:"",
      Illustrationinnovation5:"",
      Illustrationinnovation6:"",
      Illustrationinnovation7:"",
      Illustrationinnovation8:"",
      Illustrationinnovation9:"",
      Illustrationinnovation10:"",
      Illustrationinnovation11:"",
      Illustrationinnovation12:"",
      Illustrationinnovation13:"",
      IllustrationAgilit:"",
      IllustrationAgilit2:"",
      IllustrationAgilit3:"",
      IllustrationAgilit4:"",
      IllustrationAgilit5:"",
      IllustrationAgilit6:"",
      IllustrationAgilit7:"",
      IllustrationAgilit8:"",
      IllustrationAgilit9:"",
      IllustrationAgilit10:"",
      IllustrationAgilit11:"",
      IllustrationAgilit12:"",
      IllustrationAgilit13:"",
      IllustrationForceCollectif:"",
      IllustrationForceCollectif2:"",
      IllustrationForceCollectif3:"",
      IllustrationForceCollectif4:"",
      IllustrationForceCollectif5:"",
      IllustrationForceCollectif6:"",
      IllustrationForceCollectif7:"",
      IllustrationForceCollectif8:"",
      IllustrationForceCollectif9:"",
      IllustrationForceCollectif10:"",
      IllustrationForceCollectif11:"",
      IllustrationForceCollectif12:"",
      IllustrationForceCollectif13:"",
      IllustrationRespectEngagement:"",
      IllustrationRespectEngagement2:"",
      IllustrationRespectEngagement3:"",
      IllustrationRespectEngagement4:"",
      IllustrationRespectEngagement5:"",
      IllustrationRespectEngagement6:"",
      IllustrationRespectEngagement7:"",
      IllustrationRespectEngagement8:"",
      IllustrationRespectEngagement9:"",
      IllustrationRespectEngagement10:"",
      IllustrationRespectEngagement11:"",
      IllustrationRespectEngagement12:"",
      IllustrationRespectEngagement13:"",
      IllustrationOrientationstrategique:"",
      IllustrationOrientationstrategique2:"",
      IllustrationOrientationstrategique3:"",
      IllustrationOrientationstrategique4:"",
      IllustrationOrientationstrategique5:"",
      IllustrationOrientationstrategique6:"",
      IllustrationOrientationstrategique7:"",
      IllustrationOrientationstrategique8:"",
      IllustrationOrientationstrategique9:"",
      IllustrationOrientationstrategique10:"",
      IllustrationOrientationstrategique11:"",
      IllustrationOrientationstrategique12:"",
      IllustrationOrientationstrategique13:"",
      IllustrationSensdesaffaires:"",
      IllustrationSensdesaffaires2:"",
      IllustrationSensdesaffaires3:"",
      IllustrationSensdesaffaires4:"",
      IllustrationSensdesaffaires5:"",
      IllustrationSensdesaffaires6:"",
      IllustrationSensdesaffaires7:"",
      IllustrationSensdesaffaires8:"",
      IllustrationSensdesaffaires9:"",
      IllustrationSensdesaffaires10:"",
      IllustrationSensdesaffaires11:"",
      IllustrationSensdesaffaires12:"",
      IllustrationSensdesaffaires13:"",
      IllustrationLeadership:"",
      IllustrationLeadership2:"",
      IllustrationLeadership3:"",
      IllustrationLeadership4:"",
      IllustrationLeadership5:"",
      IllustrationLeadership6:"",
      IllustrationLeadership7:"",
      IllustrationLeadership8:"",
      IllustrationLeadership9:"",
      IllustrationLeadership10:"",
      IllustrationLeadership11:"",
      IllustrationLeadership12:"",
      IllustrationLeadership13:"",
      IllustrationGestionOperationnelle:"",
      IllustrationGestionOperationnelle2:"",
      IllustrationGestionOperationnelle3:"",
      IllustrationGestionOperationnelle4:"",
      IllustrationGestionOperationnelle5:"",
      IllustrationGestionOperationnelle6:"",
      IllustrationGestionOperationnelle7:"",
      IllustrationGestionOperationnelle8:"",
      IllustrationGestionOperationnelle9:"",
      IllustrationGestionOperationnelle10:"",
      IllustrationGestionOperationnelle11:"",
      IllustrationGestionOperationnelle12:"",
      IllustrationGestionOperationnelle13:"",
      IllustrationGestionEquipe:"",
      IllustrationGestionEquipe2:"",
      IllustrationGestionEquipe3:"",
      IllustrationGestionEquipe4:"",
      IllustrationGestionEquipe5:"",
      IllustrationGestionEquipe6:"",
      IllustrationGestionEquipe7:"",
      IllustrationGestionEquipe8:"",
      IllustrationGestionEquipe9:"",
      IllustrationGestionEquipe10:"",
      IllustrationGestionEquipe11:"",
      IllustrationGestionEquipe12:"",
      IllustrationGestionEquipe13:"",
      IllustrationCM:"",
      IllustrationCM2:"",
      IllustrationCM3:"",
      IllustrationCM4:"",
      IllustrationCM5:"",
      IllustrationCM6:"",
      IllustrationCM7:"",
      IllustrationCM8:"",
      IllustrationCM9:"",
      IllustrationCM10:"",
      IllustrationCM11:"",
      IllustrationCM12:"",
      IllustrationCM13:"",
      IllustrationCNormes:"",
      IllustrationCNormes1:"",
      IllustrationCNormes2:"",
      IllustrationCNormes3:"",
      IllustrationCNormes4:"",
      IllustrationCNormes5:"",
      IllustrationCNormes6:"",
      IllustrationCNormes7:"",
      IllustrationCNormes8:"",
      IllustrationCNormes9:"",
      IllustrationCNormes10:"",
      IllustrationCNormes11:"",
      IllustrationCNormes12:"",
      IllustrationCNormes13:"",
      IllustrationActivite:"",
      IllustrationActivite2:"",
      IllustrationActivite3:"",
      IllustrationActivite4:"",
      IllustrationActivite5:"",
      IllustrationActivite6:"",
      IllustrationActivite7:"",
      IllustrationActivite8:"",
      IllustrationActivite9:"",
      IllustrationActivite10:"",
      IllustrationActivite11:"",
      IllustrationActivite12:"",
      IllustrationActivite13:"",
      IllustrationOrganisation:"",
      IllustrationOrganisation2:"",
      IllustrationOrganisation3:"",
      IllustrationOrganisation4:"",
      IllustrationOrganisation5:"",
      IllustrationOrganisation6:"",
      IllustrationOrganisation7:"",
      IllustrationOrganisation8:"",
      IllustrationOrganisation9:"",
      IllustrationOrganisation10:"",
      IllustrationOrganisation11:"",
      IllustrationOrganisation12:"",
      IllustrationOrganisation13:"",
      IllustrationSIBD:"",
      IllustrationSIBD2:"",
      IllustrationSIBD3:"",
      IllustrationSIBD4:"",
      IllustrationSIBD5:"",
      IllustrationSIBD6:"",
      IllustrationSIBD7:"",
      IllustrationSIBD8:"",
      IllustrationSIBD9:"",
      IllustrationSIBD10:"",
      IllustrationSIBD11:"",
      IllustrationSIBD12:"",
      IllustrationSIBD13:"",
      IllustrationLinguistiquesBureautiques:"",
      IllustrationLinguistiquesBureautiques2:"",
      IllustrationLinguistiquesBureautiques3:"",
      IllustrationLinguistiquesBureautiques4:"",
      IllustrationLinguistiquesBureautiques5:"",
      IllustrationLinguistiquesBureautiques6:"",
      IllustrationLinguistiquesBureautiques7:"",
      IllustrationLinguistiquesBureautiques8:"",
      IllustrationLinguistiquesBureautiques9:"",
      IllustrationLinguistiquesBureautiques10:"",
      IllustrationLinguistiquesBureautiques11:"",
      IllustrationLinguistiquesBureautiques12:"",
      IllustrationLinguistiquesBureautiques13:"",
      Description:"",
      myclass:"",
      AutreAppelations:"",
      EtatDeFiche:"",
     niveauMetier1:0,
      niveauMetier2:0,
      niveauMetier3:0,
      niveauMetier4:0,
      niveauMetier5:0,
      niveauMetier6:0,
      NiveauComportementales1:0,
     NiveauComportementales2:0,
      NiveauComportementales3:0,
      NiveauComportementales4:0,
      NiveauManagerials1:0,
      NiveauManagerials2:0,
      NiveauManagerials3:0,
      NiveauManagerials4:0,
      NiveauManagerials5:0,
      NiveauManagerials6:0,
      RattachementsHierarchique:"",
      RattachementsFonctionnel:"",
      ClientsDuPoste:[],
      FournisseursDuPoste:[],
      AutreResponsabilite:[],
      CompetencesTransverses:[],
      DimensionnementDuPoste:[],
      IndicateursDePerformance:[],
      Execution:0,
      Expertise:0,
      Operationnel:0,
      decisions:0,
      Production:0,

    } 
    const newFiche =await new Fiche({
      IllustrationCM:datauteck.IllustrationCM,
      IllustrationCM2:datauteck.IllustrationCM2,
      IllustrationCM3:datauteck.IllustrationCM3,
      IllustrationCM4:datauteck.IllustrationCM4,
      IllustrationCM5:datauteck.IllustrationCM5,
      IllustrationCM6:datauteck.IllustrationCM6,
      IllustrationCM7:datauteck.IllustrationCM7,
      IllustrationCM8:datauteck.IllustrationCM8,
      IllustrationCM9:datauteck.IllustrationCM9,
      IllustrationCM10:datauteck.IllustrationCM10,
      IllustrationCM11:datauteck.IllustrationCM11,
      IllustrationCM12:datauteck.IllustrationCM12,
      IllustrationCM13:datauteck.IllustrationCM13,
      IllustrationCNormes:datauteck.IllustrationCNormes,
      IllustrationCNormes1:datauteck.IllustrationCNormes1,
      IllustrationCNormes2:datauteck.IllustrationCNormes2,
      IllustrationCNormes3:datauteck.IllustrationCNormes3,
      IllustrationCNormes4:datauteck.IllustrationCNormes4,
      IllustrationCNormes5:datauteck.IllustrationCNormes5,
      IllustrationCNormes6:datauteck.IllustrationCNormes6,
      IllustrationCNormes7:datauteck.IllustrationCNormes7,
      IllustrationCNormes8:datauteck.IllustrationCNormes8,
      IllustrationCNormes9:datauteck.IllustrationCNormes9,
      IllustrationCNormes10:datauteck.IllustrationCNormes10,
      IllustrationCNormes11:datauteck.IllustrationCNormes11,
      IllustrationCNormes12:datauteck.IllustrationCNormes12,
      IllustrationCNormes13:datauteck.IllustrationCNormes13,
      IllustrationActivite:datauteck.IllustrationActivite,
      IllustrationActivite2:datauteck.IllustrationActivite2,
      IllustrationActivite3:datauteck.IllustrationActivite3,
      IllustrationActivite4:datauteck.IllustrationActivite4,
      IllustrationActivite5:datauteck.IllustrationActivite5,
      IllustrationActivite6:datauteck.IllustrationActivite6,
      IllustrationActivite7:datauteck.IllustrationActivite7,
      IllustrationActivite8:datauteck.IllustrationActivite8,
      IllustrationActivite9:datauteck.IllustrationActivite9,
      IllustrationActivite10:datauteck.IllustrationActivite10,
      IllustrationActivite11:datauteck.IllustrationActivite11,
      IllustrationActivite12:datauteck.IllustrationActivite12,
      IllustrationActivite13:datauteck.IllustrationActivite13,
      IllustrationOrganisation:datauteck.IllustrationOrganisation,
      IllustrationOrganisation2:datauteck.IllustrationOrganisation2,
      IllustrationOrganisation3:datauteck.IllustrationOrganisation3,
      IllustrationOrganisation4:datauteck.IllustrationOrganisation4,
      IllustrationOrganisation5:datauteck.IllustrationOrganisation5,
      IllustrationOrganisation6:datauteck.IllustrationOrganisation6,
      IllustrationOrganisation7:datauteck.IllustrationOrganisation7,
      IllustrationOrganisation8:datauteck.IllustrationOrganisation8,
      IllustrationOrganisation9:datauteck.IllustrationOrganisation9,
      IllustrationOrganisation10:datauteck.IllustrationOrganisation10,
      IllustrationOrganisation11:datauteck.IllustrationOrganisation11,
      IllustrationOrganisation12:datauteck.IllustrationOrganisation12,
      IllustrationOrganisation13:datauteck.IllustrationOrganisation13,
      IllustrationSIBD:datauteck.IllustrationSIBD,
      IllustrationSIBD2:datauteck.IllustrationSIBD2,
      IllustrationSIBD3:datauteck.IllustrationSIBD3,
      IllustrationSIBD4:datauteck.IllustrationSIBD4,
      IllustrationSIBD5:datauteck.IllustrationSIBD5,
      IllustrationSIBD6:datauteck.IllustrationSIBD6,
      IllustrationSIBD7:datauteck.IllustrationSIBD7,
      IllustrationSIBD8:datauteck.IllustrationSIBD8,
      IllustrationSIBD9:datauteck.IllustrationSIBD9,
      IllustrationSIBD10:datauteck.IllustrationSIBD10,
      IllustrationSIBD11:datauteck.IllustrationSIBD11,
      IllustrationSIBD12:datauteck.IllustrationSIBD12,
      IllustrationSIBD13:datauteck.IllustrationSIBD13,
      IllustrationLinguistiquesBureautiques:datauteck.IllustrationLinguistiquesBureautiques,
      IllustrationLinguistiquesBureautiques2:datauteck.IllustrationLinguistiquesBureautiques2,
      IllustrationLinguistiquesBureautiques3:datauteck.IllustrationLinguistiquesBureautiques3,
      IllustrationLinguistiquesBureautiques4:datauteck.IllustrationLinguistiquesBureautiques4,
      IllustrationLinguistiquesBureautiques5:datauteck.IllustrationLinguistiquesBureautiques5,
      IllustrationLinguistiquesBureautiques6:datauteck.IllustrationLinguistiquesBureautiques6,
      IllustrationLinguistiquesBureautiques7:datauteck.IllustrationLinguistiquesBureautiques7,
      IllustrationLinguistiquesBureautiques8:datauteck.IllustrationLinguistiquesBureautiques8,
      IllustrationLinguistiquesBureautiques9:datauteck.IllustrationLinguistiquesBureautiques9,
      IllustrationLinguistiquesBureautiques10:datauteck.IllustrationLinguistiquesBureautiques10,
      IllustrationLinguistiquesBureautiques11:datauteck.IllustrationLinguistiquesBureautiques11,
      IllustrationLinguistiquesBureautiques12:datauteck.IllustrationLinguistiquesBureautiques12,
      IllustrationLinguistiquesBureautiques13:datauteck.IllustrationLinguistiquesBureautiques13,



      IllustrationOrientationstrategique:dataumanagerials.IllustrationOrientationstrategique,
      IllustrationOrientationstrategique2:dataumanagerials.IllustrationOrientationstrategique2,
      IllustrationOrientationstrategique3:dataumanagerials.IllustrationOrientationstrategique3,
      IllustrationOrientationstrategique4:dataumanagerials.IllustrationOrientationstrategique4,
      IllustrationOrientationstrategique5:dataumanagerials.IllustrationOrientationstrategique5,
      IllustrationOrientationstrategique6:dataumanagerials.IllustrationOrientationstrategique6,
      IllustrationOrientationstrategique7:dataumanagerials.IllustrationOrientationstrategique7,
      IllustrationOrientationstrategique8:dataumanagerials.IllustrationOrientationstrategique8,
      IllustrationOrientationstrategique9:dataumanagerials.IllustrationOrientationstrategique9,
      IllustrationOrientationstrategique10:dataumanagerials.IllustrationOrientationstrategique10,
      IllustrationOrientationstrategique11:dataumanagerials.IllustrationOrientationstrategique11,
      IllustrationOrientationstrategique12:dataumanagerials.IllustrationOrientationstrategique12,
      IllustrationOrientationstrategique13:dataumanagerials.IllustrationOrientationstrategique13,
      IllustrationSensdesaffaires:dataumanagerials.IllustrationSensdesaffaires,
      IllustrationSensdesaffaires2:dataumanagerials.IllustrationSensdesaffaires2,
      IllustrationSensdesaffaires3:dataumanagerials.IllustrationSensdesaffaires3,
      IllustrationSensdesaffaires4:dataumanagerials.IllustrationSensdesaffaires4,
      IllustrationSensdesaffaires5:dataumanagerials.IllustrationSensdesaffaires5,
      IllustrationSensdesaffaires6:dataumanagerials.IllustrationSensdesaffaires6,
      IllustrationSensdesaffaires7:dataumanagerials.IllustrationSensdesaffaires7,
      IllustrationSensdesaffaires8:dataumanagerials.IllustrationSensdesaffaires8,
      IllustrationSensdesaffaires9:dataumanagerials.IllustrationSensdesaffaires9,
      IllustrationSensdesaffaires10:dataumanagerials.IllustrationSensdesaffaires10,
      IllustrationSensdesaffaires11:dataumanagerials.IllustrationSensdesaffaires11,
      IllustrationSensdesaffaires12:dataumanagerials.IllustrationSensdesaffaires12,
      IllustrationSensdesaffaires13:dataumanagerials.IllustrationSensdesaffaires13,
      IllustrationLeadership:dataumanagerials.IllustrationLeadership,
      IllustrationLeadership2:dataumanagerials.IllustrationLeadership2,
      IllustrationLeadership3:dataumanagerials.IllustrationLeadership3,
      IllustrationLeadership4:dataumanagerials.IllustrationLeadership4,
      IllustrationLeadership5:dataumanagerials.IllustrationLeadership5,
      IllustrationLeadership6:dataumanagerials.IllustrationLeadership6,
      IllustrationLeadership7:dataumanagerials.IllustrationLeadership7,
      IllustrationLeadership8:dataumanagerials.IllustrationLeadership8,
      IllustrationLeadership9:dataumanagerials.IllustrationLeadership9,
      IllustrationLeadership10:dataumanagerials.IllustrationLeadership10,
      IllustrationLeadership11:dataumanagerials.IllustrationLeadership11,
      IllustrationLeadership12:dataumanagerials.IllustrationLeadership12,
      IllustrationLeadership13:dataumanagerials.IllustrationLeadership13,
      IllustrationGestionOperationnelle:dataumanagerials.IllustrationGestionOperationnelle,
      IllustrationGestionOperationnelle2:dataumanagerials.IllustrationGestionOperationnelle2,
      IllustrationGestionOperationnelle3:dataumanagerials.IllustrationGestionOperationnelle3,
      IllustrationGestionOperationnelle4:dataumanagerials.IllustrationGestionOperationnelle4,
      IllustrationGestionOperationnelle5:dataumanagerials.IllustrationGestionOperationnelle5,
      IllustrationGestionOperationnelle6:dataumanagerials.IllustrationGestionOperationnelle6,
      IllustrationGestionOperationnelle7:dataumanagerials.IllustrationGestionOperationnelle7,
      IllustrationGestionOperationnelle8:dataumanagerials.IllustrationGestionOperationnelle8,
      IllustrationGestionOperationnelle9:dataumanagerials.IllustrationGestionOperationnelle9,
      IllustrationGestionOperationnelle10:dataumanagerials.IllustrationGestionOperationnelle10,
      IllustrationGestionOperationnelle11:dataumanagerials.IllustrationGestionOperationnelle11,
      IllustrationGestionOperationnelle12:dataumanagerials.IllustrationGestionOperationnelle12,
      IllustrationGestionOperationnelle13:dataumanagerials.IllustrationGestionOperationnelle13,
      IllustrationGestionEquipe:dataumanagerials.IllustrationGestionEquipe,
      IllustrationGestionEquipe2:dataumanagerials.IllustrationGestionEquipe2,
      IllustrationGestionEquipe3:dataumanagerials.IllustrationGestionEquipe3,
      IllustrationGestionEquipe4:dataumanagerials.IllustrationGestionEquipe4,
      IllustrationGestionEquipe5:dataumanagerials.IllustrationGestionEquipe5,
      IllustrationGestionEquipe6:dataumanagerials.IllustrationGestionEquipe6,
      IllustrationGestionEquipe7:dataumanagerials.IllustrationGestionEquipe7,
      IllustrationGestionEquipe8:dataumanagerials.IllustrationGestionEquipe8,
      IllustrationGestionEquipe9:dataumanagerials.IllustrationGestionEquipe9,
      IllustrationGestionEquipe10:dataumanagerials.IllustrationGestionEquipe10,
      IllustrationGestionEquipe11:dataumanagerials.IllustrationGestionEquipe11,
      IllustrationGestionEquipe12:dataumanagerials.IllustrationGestionEquipe12,
      IllustrationGestionEquipe13:dataumanagerials.IllustrationGestionEquipe13,


      Illustrationinnovation:dataucomportementales.Illustrationinnovation,
      Illustrationinnovation2:dataucomportementales.Illustrationinnovation2,
      Illustrationinnovation3:dataucomportementales.Illustrationinnovation3,
      Illustrationinnovation4:dataucomportementales.Illustrationinnovation4,
      Illustrationinnovation5:dataucomportementales.Illustrationinnovation5,
      Illustrationinnovation6:dataucomportementales.Illustrationinnovation6,
      Illustrationinnovation7:dataucomportementales.Illustrationinnovation7,
      Illustrationinnovation8:dataucomportementales.Illustrationinnovation8,
      Illustrationinnovation9:dataucomportementales.Illustrationinnovation9,
      Illustrationinnovation10:dataucomportementales.Illustrationinnovation10,
      Illustrationinnovation11:dataucomportementales.Illustrationinnovation11,
      Illustrationinnovation12:dataucomportementales.Illustrationinnovation12,
      Illustrationinnovation13:dataucomportementales.Illustrationinnovation13,
      IllustrationAgilit:dataucomportementales.IllustrationAgilit,
      IllustrationAgilit2:dataucomportementales.IllustrationAgilit2,
      IllustrationAgilit3:dataucomportementales.IllustrationAgilit3,
      IllustrationAgilit4:dataucomportementales.IllustrationAgilit4,
      IllustrationAgilit5:dataucomportementales.IllustrationAgilit5,
      IllustrationAgilit6:dataucomportementales.IllustrationAgilit6,
      IllustrationAgilit7:dataucomportementales.IllustrationAgilit7,
      IllustrationAgilit8:dataucomportementales.IllustrationAgilit8,
      IllustrationAgilit9:dataucomportementales.IllustrationAgilit9,
      IllustrationAgilit10:dataucomportementales.IllustrationAgilit10,
      IllustrationAgilit11:dataucomportementales.IllustrationAgilit11,
      IllustrationAgilit12:dataucomportementales.IllustrationAgilit12,
      IllustrationAgilit13:dataucomportementales.IllustrationAgilit13,
      IllustrationForceCollectif:dataucomportementales.IllustrationForceCollectif,
      IllustrationForceCollectif2:dataucomportementales.IllustrationForceCollectif2,
      IllustrationForceCollectif3:dataucomportementales.IllustrationForceCollectif3,
      IllustrationForceCollectif4:dataucomportementales.IllustrationForceCollectif4,
      IllustrationForceCollectif5:dataucomportementales.IllustrationForceCollectif5,
      IllustrationForceCollectif6:dataucomportementales.IllustrationForceCollectif6,
      IllustrationForceCollectif7:dataucomportementales.IllustrationForceCollectif7,
      IllustrationForceCollectif8:dataucomportementales.IllustrationForceCollectif8,
      IllustrationForceCollectif9:dataucomportementales.IllustrationForceCollectif9,
      IllustrationForceCollectif10:dataucomportementales.IllustrationForceCollectif10,
      IllustrationForceCollectif11:dataucomportementales.IllustrationForceCollectif11,
      IllustrationForceCollectif12:dataucomportementales.IllustrationForceCollectif12,
      IllustrationForceCollectif13:dataucomportementales.IllustrationForceCollectif13,
      IllustrationRespectEngagement:dataucomportementales.IllustrationRespectEngagement,
      IllustrationRespectEngagement2:dataucomportementales.IllustrationRespectEngagement2,
      IllustrationRespectEngagement3:dataucomportementales.IllustrationRespectEngagement3,
      IllustrationRespectEngagement4:dataucomportementales.IllustrationRespectEngagement4,
      IllustrationRespectEngagement5:dataucomportementales.IllustrationRespectEngagement5,
      IllustrationRespectEngagement6:dataucomportementales.IllustrationRespectEngagement6,
      IllustrationRespectEngagement7:dataucomportementales.IllustrationRespectEngagement7,
      IllustrationRespectEngagement8:dataucomportementales.IllustrationRespectEngagement8,
      IllustrationRespectEngagement9:dataucomportementales.IllustrationRespectEngagement9,
      IllustrationRespectEngagement10:dataucomportementales.IllustrationRespectEngagement10,
      IllustrationRespectEngagement11:dataucomportementales.IllustrationRespectEngagement11,
      IllustrationRespectEngagement12:dataucomportementales.IllustrationRespectEngagement12,
      IllustrationRespectEngagement13:dataucomportementales.IllustrationRespectEngagement13,


      Description: req.body.Description,
      titulaire: req.body.titulaire,
      profil: req.body.profil,
      exigence: req.body.exigence,
      SousCategorie: req.body.SousCategorie,
      myclass:data.class,
      RattachementsHierarchique:req.body.RattachementsHierarchique,
      RattachementsFonctionnel:req.body.RattachementsFonctionnel,

      firstname: user.firstname,
      lastname: user.lastname,
      Categorie: req.body.Categorie,
      titre: req.body.titre,
      user: req.user.id,
      NiveauComportementales1:data.NiveauComportementales1,
      NiveauComportementales2:data.NiveauComportementales2,
      NiveauComportementales3:data.NiveauComportementales3,
    

      NiveauComportementales4:data.NiveauComportementales4,
      NiveauManagerials1:data.NiveauManagerials1,
      NiveauManagerials2:data.NiveauManagerials2,
      NiveauManagerials3:data.NiveauManagerials3,
      NiveauManagerials4:data.NiveauManagerials4,
      NiveauManagerials5:data.NiveauManagerials5,
      NiveauManagerials6:data.NiveauManagerials6,
      niveauMetier1:data.niveauMetier1,
      niveauMetier2:data.niveauMetier2,
      niveauMetier3:data.niveauMetier3,
      niveauMetier4:data.niveauMetier4,
      niveauMetier5:data.niveauMetier5,
      niveauMetier6:data.niveauMetier6,
      RequestVestion:[{newVersionRequest}],
      newversion:false

    });

    const post = await newFiche.save();
    console.log(post.id)
    res.json(post.id);

    } catch (error) {
      res.json(error);
    }

    })



  router.post(
    '/ClientsDuPoste/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
     const NewClientsDuPoste = {
            Client: req.body.Client,
            Outputs: req.body.Outputs,

          };
  
          fiche.ClientsDuPoste.unshift(NewClientsDuPoste);
  
        await fiche.save();
  
        res.json(fiche.ClientsDuPoste);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.post(
    '/FournisseursDuPoste/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
       const NewFournisseursDuPoste = {
            Fournisseur: req.body.Fournisseur,
            Inputs: req.body.Inputs,
          };
  
          fiche.FournisseursDuPoste.unshift(NewFournisseursDuPoste);
  
        await fiche.save();
  
        res.json(fiche.FournisseursDuPoste);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  
  router.post(
    '/AutreResponsabilite/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
       const NewAutreResponsabilite = {
            responsability: req.body.responsability,
          };
  
          fiche.AutreResponsabilite.unshift(NewAutreResponsabilite);
  
        await fiche.save();
  
        res.json(fiche.AutreResponsabilite);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );



 
  router.post(
    '/CaracteristiqueDuPoste/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
        fiche.Execution= req.body.Execution,
        fiche.Expertise= req.body.Expertise,
        fiche.Operationnel= req.body.Operationnel,
        fiche.decisions= req.body.decisions,
        fiche.Production= req.body.Production,
          
  
  
        await fiche.save();
  
        res.json(fiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  router.post(
    '/CompetencesMetier/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
   
        fiche.niveauMetier1= req.body.niveauMetier1,
        fiche.niveauMetier2= req.body.niveauMetier2,
        fiche.niveauMetier3= req.body.niveauMetier3,
        fiche.niveauMetier4= req.body.niveauMetier4,
        fiche.niveauMetier5= req.body.niveauMetier5,
        fiche.niveauMetier6= req.body.niveauMetier6,

        await fiche.save();
  
        res.json(fiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  

  router.post(
    '/CompetencesComportementales/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
   
        fiche.NiveauComportementales1= req.body.NiveauComportementales1,
        fiche.NiveauComportementales2= req.body.NiveauComportementales2,
        fiche.NiveauComportementales3= req.body.NiveauComportementales3,
        fiche.NiveauComportementales4= req.body.NiveauComportementales4,


        await fiche.save();
  
        res.json(fiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  
  router.post(
    '/CompetencesManagerials/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
   
        fiche.NiveauManagerials1= req.body.NiveauManagerials1,
        fiche.NiveauManagerials2= req.body.NiveauManagerials2,
        fiche.NiveauManagerials3= req.body.NiveauManagerials3,
        fiche.NiveauManagerials4= req.body.NiveauManagerials4,
        fiche.NiveauManagerials5= req.body.NiveauManagerials5,
        fiche.NiveauManagerials6= req.body.NiveauManagerials6,

        await fiche.save();
  
        res.json(fiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  
  router.post(
    '/CompetencesTransverses/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
          const NewCompetencesTransverses = {
            CompetencesTransverses: req.body.CompetencesTransverses,
            NiveauTransverses: req.body.NiveauTransverses,
            DescriptionTransverses: req.body.DescriptionTransverses,

          };
          fiche.CompetencesTransverses.unshift(NewCompetencesTransverses);
  
        await fiche.save();
  
        res.json(fiche.CompetencesTransverses);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  router.post(
    '/DimensionnementDuPoste/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
             const NewDimensionnementDuPoste = {
            NatureDeIndicateur: req.body.NatureDeIndicateur,
            IndicateurDeDimensionnement: req.body.IndicateurDeDimensionnement,
            ElementsChiffres: req.body.ElementsChiffres,
            CommentairesDimensionnement: req.body.CommentairesDimensionnement,

          };
          fiche.DimensionnementDuPoste.unshift(NewDimensionnementDuPoste);
  
        await fiche.save();
  
        res.json(fiche.DimensionnementDuPoste);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  
  router.post(
    '/IndicateursDePerformance/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
              const NewIndicateursDePerformance = {
            IndicateursDePerformance: req.body.IndicateursDePerformance,
            ElementsDeCalcul: req.body.ElementsDeCalcul,
            Commentaires: req.body.Commentaires,

          };
          fiche.IndicateursDePerformance.unshift(NewIndicateursDePerformance);
  
        await fiche.save();
  
        res.json(fiche.IndicateursDePerformance);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  router.get(
    '/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
      
        res.json(fiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  router.get(
    '/',  auth,  async (req, res) => { 
      try {
        const fiches = await Fiche.find().sort("-date");
  
        res.json(fiches);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  
  router.post(
    '/AutreAppelations/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
   
        fiche.AutreAppelations= req.body.AutreAppelations,
        await fiche.save();
  
        res.json(fiche.AutreAppelations);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

   
  router.post(
    '/EtatDeFiche/:id',  auth,  async (req, res) => { 
      try {
        const fiche = await Fiche.findById(req.params.id);
   
        fiche.EtatDeFiche= req.body.EtatDeFiche,
        await fiche.save();
  
        res.json(fiche.EtatDeFiche);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.delete('/:id', auth, async (req, res) => {
    try {
      const fiche = await Fiche.findById(req.params.id);

      await fiche.remove();
      const fiches = await Fiche.find();

      res.json(fiches);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  

  router.put('/Fournisseur/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
          RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true
            fiche.RequestVestion[0].FournisseursDuPoste.map((x,i)=>{

          if(x.id==req.params.idr){
            test++
          }
      })
if(test==0){
  fiche.FournisseursDuPoste.map((x,i)=>{
    fiche.RequestVestion[0].FournisseursDuPoste.push(x)
  })
}
fiche.RequestVestion[0].FournisseursDuPoste.map((x)=>{
 if( x.id==req.params.idr){
    x.Fournisseur= req.body.Fournisseur?req.body.Fournisseur:x.Fournisseur;
    x.Inputs=req.body.Inputs?req.body.Inputs:x.Inputs;
 };
}
)
await fiche.save();
      res.json(fiche.RequestVestion[0].FournisseursDuPoste);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  router.put('/Clients/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
        firstname:user.firstname,
        lastname:user.lastname,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,
          RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
          RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true
      fiche.RequestVestion[0].ClientsDuPoste.map((x,i)=>{
        if(x.id==req.params.idr){
          test++
        }
    })
    if(test==0){
      fiche.ClientsDuPoste.map((x,i)=>{
        fiche.RequestVestion[0].ClientsDuPoste.push(x)
      })
    }
      fiche.RequestVestion[0].ClientsDuPoste.map((x)=>{
 if( x.id==req.params.idr){
    x.Client= req.body.Client?req.body.Client:x.Client;
    x.Outputs=req.body.Outputs?req.body.Outputs:x.Outputs;
 };
}
)
await fiche.save()
      res.json(fiche.RequestVestion[0].ClientsDuPoste);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  
  router.put('/AutreResponsabilite/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,
          RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
          RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true
            fiche.RequestVestion[0].AutreResponsabilite.map((x,i)=>{

          if(x.id==req.params.idr){
            test++
          }
      })
      if(test==0){
        fiche.AutreResponsabilite.map((x,i)=>{
          fiche.RequestVestion[0].AutreResponsabilite.push(x)
        })
      }
fiche.RequestVestion[0].AutreResponsabilite.map((x)=>{
 if( x.id==req.params.idr){
    x.responsability= req.body.responsability?req.body.responsability:x.responsability;
 };
}
)

await fiche.save();
      res.json(fiche.RequestVestion[0].AutreResponsabilite);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  router.put('/fiche/:id', auth, async (req, res) => {
    try {
    
      const fiche = await Fiche.findById(req.params.id);
      const user = await User.findById(req.user.id).select('-password');
    
      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:req.body.IllustrationCM?req.body.IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:req.body.IllustrationCM2?req.body.IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:req.body.IllustrationCM3?req.body.IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:req.body.IllustrationCM4?req.body.IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:req.body.IllustrationCM5?req.body.IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:req.body.IllustrationCM6?req.body.IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:req.body.IllustrationCM7?req.body.IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:req.body.IllustrationCM8?req.body.IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:req.body.IllustrationCM9?req.body.IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:req.body.IllustrationCM10?req.body.IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:req.body.IllustrationCM11?req.body.IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:req.body.IllustrationCM12?req.body.IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:req.body.IllustrationCM13?req.body.IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:req.body.IllustrationCNormes?req.body.IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:req.body.IllustrationCNormes1?req.body.IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:req.body.IllustrationCNormes2?req.body.IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:req.body.IllustrationCNormes3?req.body.IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:req.body.IllustrationCNormes4?req.body.IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:req.body.IllustrationCNormes5?req.body.IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:req.body.IllustrationCNormes6?req.body.IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:req.body.IllustrationCNormes7?req.body.IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:req.body.IllustrationCNormes8?req.body.IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:req.body.IllustrationCNormes9?req.body.IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:req.body.IllustrationCNormes10?req.body.IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:req.body.IllustrationCNormes11?req.body.IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:req.body.IllustrationCNormes12?req.body.IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:req.body.IllustrationCNormes13?req.body.IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:req.body.IllustrationActivite?req.body.IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:req.body.IllustrationActivite2?req.body.IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:req.body.IllustrationActivite3?req.body.IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:req.body.IllustrationActivite4?req.body.IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:req.body.IllustrationActivite5?req.body.IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:req.body.IllustrationActivite6?req.body.IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:req.body.IllustrationActivite7?req.body.IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:req.body.IllustrationActivite8?req.body.IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:req.body.IllustrationActivite9?req.body.IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:req.body.IllustrationActivite10?req.body.IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:req.body.IllustrationActivite11?req.body.IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:req.body.IllustrationActivite12?req.body.IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:req.body.IllustrationActivite13?req.body.IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:req.body.IllustrationOrganisation?req.body.IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:req.body.IllustrationOrganisation2?req.body.IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:req.body.IllustrationOrganisation3?req.body.IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:req.body.IllustrationOrganisation4?req.body.IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:req.body.IllustrationOrganisation5?req.body.IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:req.body.IllustrationOrganisation6?req.body.IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:req.body.IllustrationOrganisation7?req.body.IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:req.body.IllustrationOrganisation8?req.body.IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:req.body.IllustrationOrganisation9?req.body.IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:req.body.IllustrationOrganisation10?req.body.IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:req.body.IllustrationOrganisation11?req.body.IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:req.body.IllustrationOrganisation12?req.body.IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:req.body.IllustrationOrganisation13?req.body.IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:req.body.IllustrationSIBD?req.body.IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:req.body.IllustrationSIBD2?req.body.IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:req.body.IllustrationSIBD3?req.body.IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:req.body.IllustrationSIBD4?req.body.IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:req.body.IllustrationSIBD5?req.body.IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:req.body.IllustrationSIBD6?req.body.IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:req.body.IllustrationSIBD7?req.body.IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:req.body.IllustrationSIBD8?req.body.IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:req.body.IllustrationSIBD9?req.body.IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:req.body.IllustrationSIBD10?req.body.IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:req.body.IllustrationSIBD11?req.body.IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:req.body.IllustrationSIBD12?req.body.IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:req.body.IllustrationSIBD13?req.body.IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:req.body.IllustrationLinguistiquesBureautiques?req.body.IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:req.body.IllustrationLinguistiquesBureautiques2?req.body.IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:req.body.IllustrationLinguistiquesBureautiques3?req.body.IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:req.body.IllustrationLinguistiquesBureautiques4?req.body.IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:req.body.IllustrationLinguistiquesBureautiques5?req.body.IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:req.body.IllustrationLinguistiquesBureautiques6?req.body.IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:req.body.IllustrationLinguistiquesBureautiques7?req.body.IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:req.body.IllustrationLinguistiquesBureautiques8?req.body.IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:req.body.IllustrationLinguistiquesBureautiques9?req.body.IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:req.body.IllustrationLinguistiquesBureautiques10?req.body.IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:req.body.IllustrationLinguistiquesBureautiques11?req.body.IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:req.body.IllustrationLinguistiquesBureautiques12?req.body.IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:req.body.IllustrationLinguistiquesBureautiques13?req.body.IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:req.body.IllustrationOrientationstrategique?req.body.IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:req.body.IllustrationOrientationstrategique2?req.body.IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:req.body.IllustrationOrientationstrategique3?req.body.IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:req.body.IllustrationOrientationstrategique4?req.body.IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:req.body.IllustrationOrientationstrategique5?req.body.IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:req.body.IllustrationOrientationstrategique6?req.body.IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:req.body.IllustrationOrientationstrategique7?req.body.IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:req.body.IllustrationOrientationstrategique8?req.body.IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:req.body.IllustrationOrientationstrategique9?req.body.IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:req.body.IllustrationOrientationstrategique10?req.body.IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:req.body.IllustrationOrientationstrategique11?req.body.IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:req.body.IllustrationOrientationstrategique12?req.body.IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:req.body.IllustrationOrientationstrategique13?req.body.IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:req.body.IllustrationSensdesaffaires?req.body.IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:req.body.IllustrationSensdesaffaires2?req.body.IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:req.body.IllustrationSensdesaffaires3?req.body.IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:req.body.IllustrationSensdesaffaires4?req.body.IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:req.body.IllustrationSensdesaffaires5?req.body.IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:req.body.IllustrationSensdesaffaires6?req.body.IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:req.body.IllustrationSensdesaffaires7?req.body.IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:req.body.IllustrationSensdesaffaires8?req.body.IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:req.body.IllustrationSensdesaffaires9?req.body.IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:req.body.IllustrationSensdesaffaires10?req.body.IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:req.body.IllustrationSensdesaffaires11?req.body.IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:req.body.IllustrationSensdesaffaires12?req.body.IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:req.body.IllustrationSensdesaffaires13?req.body.IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:req.body.IllustrationLeadership?req.body.IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:req.body.IllustrationLeadership2?req.body.IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:req.body.IllustrationLeadership3?req.body.IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:req.body.IllustrationLeadership4?req.body.IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:req.body.IllustrationLeadership5?req.body.IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:req.body.IllustrationLeadership6?req.body.IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:req.body.IllustrationLeadership7?req.body.IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:req.body.IllustrationLeadership8?req.body.IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:req.body.IllustrationLeadership9?req.body.IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:req.body.IllustrationLeadership10?req.body.IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:req.body.IllustrationLeadership11?req.body.IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:req.body.IllustrationLeadership12?req.body.IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:req.body.IllustrationLeadership13?req.body.IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperationnelle:req.body.IllustrationGestionOperationnelle?req.body.IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:req.body.IllustrationGestionOperationnelle2?req.body.IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:req.body.IllustrationGestionOperationnelle3?req.body.IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:req.body.IllustrationGestionOperationnelle4?req.body.IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:req.body.IllustrationGestionOperationnelle5?req.body.IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:req.body.IllustrationGestionOperationnelle6?req.body.IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:req.body.IllustrationGestionOperationnelle7?req.body.IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:req.body.IllustrationGestionOperationnelle8?req.body.IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:req.body.IllustrationGestionOperationnelle9?req.body.IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:req.body.IllustrationGestionOperationnelle10?req.body.IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:req.body.IllustrationGestionOperationnelle11?req.body.IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:req.body.IllustrationGestionOperationnelle12?req.body.IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:req.body.IllustrationGestionOperationnelle13?req.body.IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:req.body.IllustrationGestionEquipe?req.body.IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:req.body.IllustrationGestionEquipe2?req.body.IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:req.body.IllustrationGestionEquipe3?req.body.IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:req.body.IllustrationGestionEquipe4?req.body.IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:req.body.IllustrationGestionEquipe5?req.body.IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:req.body.IllustrationGestionEquipe6?req.body.IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:req.body.IllustrationGestionEquipe7?req.body.IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:req.body.IllustrationGestionEquipe8?req.body.IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:req.body.IllustrationGestionEquipe9?req.body.IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:req.body.IllustrationGestionEquipe10?req.body.IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:req.body.IllustrationGestionEquipe11?req.body.IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:req.body.IllustrationGestionEquipe12?req.body.IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
        IllustrationGestionEquipe13:req.body.IllustrationGestionEquipe13?req.body.IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
        Illustrationinnovation:req.body.Illustrationinnovation?req.body.Illustrationinnovation:fiche.Illustrationinnovation,
        Illustrationinnovation2:req.body.Illustrationinnovation2?req.body.Illustrationinnovation2:fiche.Illustrationinnovation2,
        Illustrationinnovation3:req.body.Illustrationinnovation3?req.body.Illustrationinnovation3:fiche.Illustrationinnovation3,
        Illustrationinnovation4:req.body.Illustrationinnovation4?req.body.Illustrationinnovation4:fiche.Illustrationinnovation4,
        Illustrationinnovation5:req.body.Illustrationinnovation5?req.body.Illustrationinnovation5:fiche.Illustrationinnovation5,
        Illustrationinnovation6:req.body.Illustrationinnovation6?req.body.Illustrationinnovation6:fiche.Illustrationinnovation6,
        Illustrationinnovation7:req.body.Illustrationinnovation7?req.body.Illustrationinnovation7:fiche.Illustrationinnovation7,
        Illustrationinnovation8:req.body.Illustrationinnovation8?req.body.Illustrationinnovation8:fiche.Illustrationinnovation8,
        Illustrationinnovation9:req.body.Illustrationinnovation9?req.body.Illustrationinnovation9:fiche.Illustrationinnovation9,
        Illustrationinnovation10:req.body.Illustrationinnovation10?req.body.Illustrationinnovation10:fiche.Illustrationinnovation10,
        Illustrationinnovation11:req.body.Illustrationinnovation11?req.body.Illustrationinnovation11:fiche.Illustrationinnovation11,
        Illustrationinnovation12:req.body.Illustrationinnovation12?req.body.Illustrationinnovation12:fiche.Illustrationinnovation12,
        Illustrationinnovation13:req.body.Illustrationinnovation13?req.body.Illustrationinnovation13:fiche.Illustrationinnovation13,
        IllustrationAgilit:req.body.IllustrationAgilit?req.body.IllustrationAgilit:fiche.IllustrationAgilit,
        IllustrationAgilit2:req.body.IllustrationAgilit2?req.body.IllustrationAgilit2:fiche.IllustrationAgilit2,
        IllustrationAgilit3:req.body.IllustrationAgilit3?req.body.IllustrationAgilit3:fiche.IllustrationAgilit3,
        IllustrationAgilit4:req.body.IllustrationAgilit4?req.body.IllustrationAgilit4:fiche.IllustrationAgilit4,
        IllustrationAgilit5:req.body.IllustrationAgilit5?req.body.IllustrationAgilit5:fiche.IllustrationAgilit5,
        IllustrationAgilit6:req.body.IllustrationAgilit6?req.body.IllustrationAgilit6:fiche.IllustrationAgilit6,
        IllustrationAgilit7:req.body.IllustrationAgilit7?req.body.IllustrationAgilit7:fiche.IllustrationAgilit7,
        IllustrationAgilit8:req.body.IllustrationAgilit8?req.body.IllustrationAgilit8:fiche.IllustrationAgilit8,
        IllustrationAgilit9:req.body.IllustrationAgilit9?req.body.IllustrationAgilit9:fiche.IllustrationAgilit9,
        IllustrationAgilit10:req.body.IllustrationAgilit10?req.body.IllustrationAgilit10:fiche.IllustrationAgilit10,
        IllustrationAgilit11:req.body.IllustrationAgilit11?req.body.IllustrationAgilit11:fiche.IllustrationAgilit11,
        IllustrationAgilit12:req.body.IllustrationAgilit12?req.body.IllustrationAgilit12:fiche.IllustrationAgilit12,
        IllustrationAgilit13:req.body.IllustrationAgilit13?req.body.IllustrationAgilit13:fiche.IllustrationAgilit13,
        IllustrationForceCollectif:req.body.IllustrationForceCollectif?req.body.IllustrationForceCollectif:fiche.IllustrationForceCollectif,
        IllustrationForceCollectif2:req.body.IllustrationForceCollectif2?req.body.IllustrationForceCollectif2:fiche.IllustrationForceCollectif2,
        IllustrationForceCollectif3:req.body.IllustrationForceCollectif3?req.body.IllustrationForceCollectif3:fiche.IllustrationForceCollectif3,
        IllustrationForceCollectif4:req.body.IllustrationForceCollectif4?req.body.IllustrationForceCollectif4:fiche.IllustrationForceCollectif4,
        IllustrationForceCollectif5:req.body.IllustrationForceCollectif5?req.body.IllustrationForceCollectif5:fiche.IllustrationForceCollectif5,
        IllustrationForceCollectif6:req.body.IllustrationForceCollectif6?req.body.IllustrationForceCollectif6:fiche.IllustrationForceCollectif6,
        IllustrationForceCollectif7:req.body.IllustrationForceCollectif7?req.body.IllustrationForceCollectif7:fiche.IllustrationForceCollectif7,
        IllustrationForceCollectif8:req.body.IllustrationForceCollectif8?req.body.IllustrationForceCollectif8:fiche.IllustrationForceCollectif8,
        IllustrationForceCollectif9:req.body.IllustrationForceCollectif9?req.body.IllustrationForceCollectif9:fiche.IllustrationForceCollectif9,
        IllustrationForceCollectif10:req.body.IllustrationForceCollectif10?req.body.IllustrationForceCollectif10:fiche.IllustrationForceCollectif10,
        IllustrationForceCollectif11:req.body.IllustrationForceCollectif11?req.body.IllustrationForceCollectif11:fiche.IllustrationForceCollectif11,
        IllustrationForceCollectif12:req.body.IllustrationForceCollectif12?req.body.IllustrationForceCollectif12:fiche.IllustrationForceCollectif12,
        IllustrationForceCollectif13:req.body.IllustrationForceCollectif13?req.body.IllustrationForceCollectif13:fiche.IllustrationForceCollectif13,
        IllustrationRespectEngagement:req.body.IllustrationRespectEngagement?req.body.IllustrationRespectEngagement:fiche.IllustrationRespectEngagement,
        IllustrationRespectEngagement2:req.body.IllustrationRespectEngagement2?req.body.IllustrationRespectEngagement2:fiche.IllustrationRespectEngagement2,
        IllustrationRespectEngagement3:req.body.IllustrationRespectEngagement3?req.body.IllustrationRespectEngagement3:fiche.IllustrationRespectEngagement3,
        IllustrationRespectEngagement4:req.body.IllustrationRespectEngagement4?req.body.IllustrationRespectEngagement4:fiche.IllustrationRespectEngagement4,
        IllustrationRespectEngagement5:req.body.IllustrationRespectEngagement5?req.body.IllustrationRespectEngagement5:fiche.IllustrationRespectEngagement5,
        IllustrationRespectEngagement6:req.body.IllustrationRespectEngagement6?req.body.IllustrationRespectEngagement6:fiche.IllustrationRespectEngagement6,
        IllustrationRespectEngagement7:req.body.IllustrationRespectEngagement7?req.body.IllustrationRespectEngagement7:fiche.IllustrationRespectEngagement7,
        IllustrationRespectEngagement8:req.body.IllustrationRespectEngagement8?req.body.IllustrationRespectEngagement8:fiche.IllustrationRespectEngagement8,
        IllustrationRespectEngagement9:req.body.IllustrationRespectEngagement9?req.body.IllustrationRespectEngagement9:fiche.IllustrationRespectEngagement9,
        IllustrationRespectEngagement10:req.body.IllustrationRespectEngagement10?req.body.IllustrationRespectEngagement10:fiche.IllustrationRespectEngagement10,
        IllustrationRespectEngagement11:req.body.IllustrationRespectEngagement11?req.body.IllustrationRespectEngagement11:fiche.IllustrationRespectEngagement11,
        IllustrationRespectEngagement12:req.body.IllustrationRespectEngagement12?req.body.IllustrationRespectEngagement12:fiche.IllustrationRespectEngagement12,
        IllustrationRespectEngagement13:req.body.IllustrationRespectEngagement13?req.body.IllustrationRespectEngagement13:fiche.IllustrationRespectEngagement13,
       
        RattachementsHierarchique:req.body.RattachementsHierarchique?req.body.RattachementsHierarchique:fiche.RattachementsHierarchique,
        RattachementsFonctionnel:req.body.RattachementsFonctionnel?req.body.RattachementsFonctionnel:fiche.RattachementsFonctionnel,
        Description:req.body.Description?req.body.Description:fiche.Description,
        myclass:req.body.myclass?req.body.myclass:fiche.myclass,
        AutreAppelations:req.body.AutreAppelations?req.body.AutreAppelations:fiche.AutreAppelations,
        EtatDeFiche:req.body.EtatDeFiche?req.body.EtatDeFiche:fiche.EtatDeFiche,
       niveauMetier1:req.body.niveauMetier1?req.body.niveauMetier1:fiche.niveauMetier1,
        niveauMetier2:req.body.niveauMetier2?req.body.niveauMetier2:fiche.niveauMetier2,
        niveauMetier3:req.body.niveauMetier3?req.body.niveauMetier3:fiche.niveauMetier3,
        niveauMetier4:req.body.niveauMetier4?req.body.niveauMetier4:fiche.niveauMetier4,
        niveauMetier5:req.body.niveauMetier5?req.body.niveauMetier5:fiche.niveauMetier5,
        niveauMetier6:req.body.niveauMetier6?req.body.niveauMetier6:fiche.niveauMetier6,
        NiveauComportementales1:req.body.NiveauComportementales1?req.body.NiveauComportementales1:fiche.NiveauComportementales1,
       NiveauComportementales2:req.body.NiveauComportementales2?req.body.NiveauComportementales2:fiche.NiveauComportementales2,
        NiveauComportementales3:req.body.NiveauComportementales3?req.body.NiveauComportementales3:fiche.NiveauComportementales3,
        NiveauComportementales4:req.body.NiveauComportementales4?req.body.NiveauComportementales4:fiche.NiveauComportementales4,
        NiveauManagerials1:req.body.NiveauManagerials1?req.body.NiveauManagerials1:fiche.NiveauManagerials1,
        NiveauManagerials2:req.body.NiveauManagerials2?req.body.NiveauManagerials2:fiche.NiveauManagerials2,
        NiveauManagerials3:req.body.NiveauManagerials3?req.body.NiveauManagerials3:fiche.NiveauManagerials3,
        NiveauManagerials4:req.body.NiveauManagerials4?req.body.NiveauManagerials4:fiche.NiveauManagerials4,
        NiveauManagerials5:req.body.NiveauManagerials5?req.body.NiveauManagerials5:fiche.NiveauManagerials5,      
        NiveauManagerials6:req.body.NiveauManagerials6?req.body.NiveauManagerials6:fiche.NiveauManagerials6,
        ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length>0?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
        FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length>0?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
        AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length>0?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
        CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length>0?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
        DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length>0?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
        IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length>0?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,
        Execution:req.body.Execution?req.body.Execution:fiche.Execution,
        Expertise:req.body.Expertise?req.body.Expertise:fiche.Expertise,
        Operationnel:req.body.Operationnel?req.body.Operationnel:fiche.Operationnel,
        decisions:req.body.decisions?req.body.decisions:fiche.decisions,
        Production:req.body.Production?req.body.Production:fiche.Production,

      }
      fiche.RequestVestion[0]=newVersionRequest;
fiche.newversion=true

fiche.save();
res.json(fiche)

    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
   
  router.put('/CompetencesTransverses/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,
          RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
          RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length>0?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length>0?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length>0?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length>0?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length>0?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true   
         fiche.RequestVestion[0].CompetencesTransverses.map((x,i)=>{
        if(x.id==req.params.idr){
          test++
        }
    })
    if(test==0){
      fiche.CompetencesTransverses.map((x,i)=>{
        fiche.RequestVestion[0].CompetencesTransverses.push(x)
      })
    }
      fiche.RequestVestion[0].CompetencesTransverses.map((x)=>{
 if( x.id==req.params.idr){
    x.CompetencesTransverses= req.body.CompetencesTransverses?req.body.CompetencesTransverses:x.CompetencesTransverses;
    x.NiveauTransverses=req.body.NiveauTransverses?req.body.NiveauTransverses:x.NiveauTransverses;
    x.DescriptionTransverses=req.body.DescriptionTransverses?req.body.DescriptionTransverses:x.DescriptionTransverses;
 };
}
)
await fiche.save()
      res.json(fiche.RequestVestion[0].CompetencesTransverses);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  router.put('/DimensionnementDuPoste/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,
          RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
          RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true
            fiche.RequestVestion[0].DimensionnementDuPoste.map((x,i)=>{
        if(x.id==req.params.idr){
          test++
        }
    })
    if(test==0){
      fiche.DimensionnementDuPoste.map((x,i)=>{
        fiche.RequestVestion[0].DimensionnementDuPoste.push(x)
      })
    }
      fiche.RequestVestion[0].DimensionnementDuPoste.map((x)=>{
 if( x.id==req.params.idr){
    x.NatureDeIndicateur= req.body.NatureDeIndicateur?req.body.NatureDeIndicateur:x.NatureDeIndicateur;
    x.IndicateurDeDimensionnement= req.body.IndicateurDeDimensionnement?req.body.IndicateurDeDimensionnement:x.IndicateurDeDimensionnement;
    x.ElementsChiffres=req.body.ElementsChiffres?req.body.ElementsChiffres:x.ElementsChiffres;
    x.CommentairesDimensionnement=req.body.CommentairesDimensionnement?req.body.CommentairesDimensionnement:x.CommentairesDimensionnement;
 };
}
)
await fiche.save()
      res.json(fiche.RequestVestion[0].DimensionnementDuPoste);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  router.put('/IndicateursDePerformance/:id/:idr', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      const fiche = await Fiche.findById(req.params.id);

      const newVersionRequest={
        firstname:user.firstname,
        lastname:user.lastname,
        IllustrationCM:fiche.RequestVestion[0].IllustrationCM?fiche.RequestVestion[0].IllustrationCM:fiche.IllustrationCM,
        IllustrationCM2:fiche.RequestVestion[0].IllustrationCM2?fiche.RequestVestion[0].IllustrationCM2:fiche.IllustrationCM2,
        IllustrationCM3:fiche.RequestVestion[0].IllustrationCM3?fiche.RequestVestion[0].IllustrationCM3:fiche.IllustrationCM3,
        IllustrationCM4:fiche.RequestVestion[0].IllustrationCM4?fiche.RequestVestion[0].IllustrationCM4:fiche.IllustrationCM4,
        IllustrationCM5:fiche.RequestVestion[0].IllustrationCM5?fiche.RequestVestion[0].IllustrationCM5:fiche.IllustrationCM5,
        IllustrationCM6:fiche.RequestVestion[0].IllustrationCM6?fiche.RequestVestion[0].IllustrationCM6:fiche.IllustrationCM6,
        IllustrationCM7:fiche.RequestVestion[0].IllustrationCM7?fiche.RequestVestion[0].IllustrationCM7:fiche.IllustrationCM7,
        IllustrationCM8:fiche.RequestVestion[0].IllustrationCM8?fiche.RequestVestion[0].IllustrationCM8:fiche.IllustrationCM8,
        IllustrationCM9:fiche.RequestVestion[0].IllustrationCM9?fiche.RequestVestion[0].IllustrationCM9:fiche.IllustrationCM9,
        IllustrationCM10:fiche.RequestVestion[0].IllustrationCM10?fiche.RequestVestion[0].IllustrationCM10:fiche.IllustrationCM10,
        IllustrationCM11:fiche.RequestVestion[0].IllustrationCM11?fiche.RequestVestion[0].IllustrationCM11:fiche.IllustrationCM11,
        IllustrationCM12:fiche.RequestVestion[0].IllustrationCM12?fiche.RequestVestion[0].IllustrationCM12:fiche.IllustrationCM12,
        IllustrationCM13:fiche.RequestVestion[0].IllustrationCM13?fiche.RequestVestion[0].IllustrationCM13:fiche.IllustrationCM13,
        IllustrationCNormes:fiche.RequestVestion[0].IllustrationCNormes?fiche.RequestVestion[0].IllustrationCNormes:fiche.IllustrationCNormes,
        IllustrationCNormes1:fiche.RequestVestion[0].IllustrationCNormes1?fiche.RequestVestion[0].IllustrationCNormes1:fiche.IllustrationCNormes1,
        IllustrationCNormes2:fiche.RequestVestion[0].IllustrationCNormes2?fiche.RequestVestion[0].IllustrationCNormes2:fiche.IllustrationCNormes2,
        IllustrationCNormes3:fiche.RequestVestion[0].IllustrationCNormes3?fiche.RequestVestion[0].IllustrationCNormes3:fiche.IllustrationCNormes3,
        IllustrationCNormes4:fiche.RequestVestion[0].IllustrationCNormes4?fiche.RequestVestion[0].IllustrationCNormes4:fiche.IllustrationCNormes4,
        IllustrationCNormes5:fiche.RequestVestion[0].IllustrationCNormes5?fiche.RequestVestion[0].IllustrationCNormes5:fiche.IllustrationCNormes5,
        IllustrationCNormes6:fiche.RequestVestion[0].IllustrationCNormes6?fiche.RequestVestion[0].IllustrationCNormes6:fiche.IllustrationCNormes6,
        IllustrationCNormes7:fiche.RequestVestion[0].IllustrationCNormes7?fiche.RequestVestion[0].IllustrationCNormes7:fiche.IllustrationCNormes7,
        IllustrationCNormes8:fiche.RequestVestion[0].IllustrationCNormes8?fiche.RequestVestion[0].IllustrationCNormes8:fiche.IllustrationCNormes8,
        IllustrationCNormes9:fiche.RequestVestion[0].IllustrationCNormes9?fiche.RequestVestion[0].IllustrationCNormes9:fiche.IllustrationCNormes9,
        IllustrationCNormes10:fiche.RequestVestion[0].IllustrationCNormes10?fiche.RequestVestion[0].IllustrationCNormes10:fiche.IllustrationCNormes10,
        IllustrationCNormes11:fiche.RequestVestion[0].IllustrationCNormes11?fiche.RequestVestion[0].IllustrationCNormes11:fiche.IllustrationCNormes11,
        IllustrationCNormes12:fiche.RequestVestion[0].IllustrationCNormes12?fiche.RequestVestion[0].IllustrationCNormes12:fiche.IllustrationCNormes12,
        IllustrationCNormes13:fiche.RequestVestion[0].IllustrationCNormes13?fiche.RequestVestion[0].IllustrationCNormes13:fiche.IllustrationCNormes13,
        IllustrationActivite:fiche.RequestVestion[0].IllustrationActivite?fiche.RequestVestion[0].IllustrationActivite:fiche.IllustrationActivite,
        IllustrationActivite2:fiche.RequestVestion[0].IllustrationActivite2?fiche.RequestVestion[0].IllustrationActivite2:fiche.IllustrationActivite2,
        IllustrationActivite3:fiche.RequestVestion[0].IllustrationActivite3?fiche.RequestVestion[0].IllustrationActivite3:fiche.IllustrationActivite3,
        IllustrationActivite4:fiche.RequestVestion[0].IllustrationActivite4?fiche.RequestVestion[0].IllustrationActivite4:fiche.IllustrationActivite4,
        IllustrationActivite5:fiche.RequestVestion[0].IllustrationActivite5?fiche.RequestVestion[0].IllustrationActivite5:fiche.IllustrationActivite5,
        IllustrationActivite6:fiche.RequestVestion[0].IllustrationActivite6?fiche.RequestVestion[0].IllustrationActivite6:fiche.IllustrationActivite6,
        IllustrationActivite7:fiche.RequestVestion[0].IllustrationActivite7?fiche.RequestVestion[0].IllustrationActivite7:fiche.IllustrationActivite7,
        IllustrationActivite8:fiche.RequestVestion[0].IllustrationActivite8?fiche.RequestVestion[0].IllustrationActivite8:fiche.IllustrationActivite8,
        IllustrationActivite9:fiche.RequestVestion[0].IllustrationActivite9?fiche.RequestVestion[0].IllustrationActivite9:fiche.IllustrationActivite9,
        IllustrationActivite10:fiche.RequestVestion[0].IllustrationActivite10?fiche.RequestVestion[0].IllustrationActivite10:fiche.IllustrationActivite10,
        IllustrationActivite11:fiche.RequestVestion[0].IllustrationActivite11?fiche.RequestVestion[0].IllustrationActivite11:fiche.IllustrationActivite11,
        IllustrationActivite12:fiche.RequestVestion[0].IllustrationActivite12?fiche.RequestVestion[0].IllustrationActivite12:fiche.IllustrationActivite12,
        IllustrationActivite13:fiche.RequestVestion[0].IllustrationActivite13?fiche.RequestVestion[0].IllustrationActivite13:fiche.IllustrationActivite13,
        IllustrationOrganisation:fiche.RequestVestion[0].IllustrationOrganisation?fiche.RequestVestion[0].IllustrationOrganisation:fiche.IllustrationOrganisation,
        IllustrationOrganisation2:fiche.RequestVestion[0].IllustrationOrganisation2?fiche.RequestVestion[0].IllustrationOrganisation2:fiche.IllustrationOrganisation2,
        IllustrationOrganisation3:fiche.RequestVestion[0].IllustrationOrganisation3?fiche.RequestVestion[0].IllustrationOrganisation3:fiche.IllustrationOrganisation3,
        IllustrationOrganisation4:fiche.RequestVestion[0].IllustrationOrganisation4?fiche.RequestVestion[0].IllustrationOrganisation4:fiche.IllustrationOrganisation4,
        IllustrationOrganisation5:fiche.RequestVestion[0].IllustrationOrganisation5?fiche.RequestVestion[0].IllustrationOrganisation5:fiche.IllustrationOrganisation5,
        IllustrationOrganisation6:fiche.RequestVestion[0].IllustrationOrganisation6?fiche.RequestVestion[0].IllustrationOrganisation6:fiche.IllustrationOrganisation6,
        IllustrationOrganisation7:fiche.RequestVestion[0].IllustrationOrganisation7?fiche.RequestVestion[0].IllustrationOrganisation7:fiche.IllustrationOrganisation7,
        IllustrationOrganisation8:fiche.RequestVestion[0].IllustrationOrganisation8?fiche.RequestVestion[0].IllustrationOrganisation8:fiche.IllustrationOrganisation8,
        IllustrationOrganisation9:fiche.RequestVestion[0].IllustrationOrganisation9?fiche.RequestVestion[0].IllustrationOrganisation9:fiche.IllustrationOrganisation9,
        IllustrationOrganisation10:fiche.RequestVestion[0].IllustrationOrganisation10?fiche.RequestVestion[0].IllustrationOrganisation10:fiche.IllustrationOrganisation10,
        IllustrationOrganisation11:fiche.RequestVestion[0].IllustrationOrganisation11?fiche.RequestVestion[0].IllustrationOrganisation11:fiche.IllustrationOrganisation11,
        IllustrationOrganisation12:fiche.RequestVestion[0].IllustrationOrganisation12?fiche.RequestVestion[0].IllustrationOrganisation12:fiche.IllustrationOrganisation12,
        IllustrationOrganisation13:fiche.RequestVestion[0].IllustrationOrganisation13?fiche.RequestVestion[0].IllustrationOrganisation13:fiche.IllustrationOrganisation13,
        IllustrationSIBD:fiche.RequestVestion[0].IllustrationSIBD?fiche.RequestVestion[0].IllustrationSIBD:fiche.IllustrationSIBD,
        IllustrationSIBD2:fiche.RequestVestion[0].IllustrationSIBD2?fiche.RequestVestion[0].IllustrationSIBD2:fiche.IllustrationSIBD2,
        IllustrationSIBD3:fiche.RequestVestion[0].IllustrationSIBD3?fiche.RequestVestion[0].IllustrationSIBD3:fiche.IllustrationSIBD3,
        IllustrationSIBD4:fiche.RequestVestion[0].IllustrationSIBD4?fiche.RequestVestion[0].IllustrationSIBD4:fiche.IllustrationSIBD4,
        IllustrationSIBD5:fiche.RequestVestion[0].IllustrationSIBD5?fiche.RequestVestion[0].IllustrationSIBD5:fiche.IllustrationSIBD5,
        IllustrationSIBD6:fiche.RequestVestion[0].IllustrationSIBD6?fiche.RequestVestion[0].IllustrationSIBD6:fiche.IllustrationSIBD6,
        IllustrationSIBD7:fiche.RequestVestion[0].IllustrationSIBD7?fiche.RequestVestion[0].IllustrationSIBD7:fiche.IllustrationSIBD7,
        IllustrationSIBD8:fiche.RequestVestion[0].IllustrationSIBD8?fiche.RequestVestion[0].IllustrationSIBD8:fiche.IllustrationSIBD8,
        IllustrationSIBD9:fiche.RequestVestion[0].IllustrationSIBD9?fiche.RequestVestion[0].IllustrationSIBD9:fiche.IllustrationSIBD9,
        IllustrationSIBD10:fiche.RequestVestion[0].IllustrationSIBD10?fiche.RequestVestion[0].IllustrationSIBD10:fiche.IllustrationSIBD10,
        IllustrationSIBD11:fiche.RequestVestion[0].IllustrationSIBD11?fiche.RequestVestion[0].IllustrationSIBD11:fiche.IllustrationSIBD11,
        IllustrationSIBD12:fiche.RequestVestion[0].IllustrationSIBD12?fiche.RequestVestion[0].IllustrationSIBD12:fiche.IllustrationSIBD12,
        IllustrationSIBD13:fiche.RequestVestion[0].IllustrationSIBD13?fiche.RequestVestion[0].IllustrationSIBD13:fiche.IllustrationSIBD13,
        IllustrationLinguistiquesBureautiques:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques:fiche.IllustrationLinguistiquesBureautiques,
        IllustrationLinguistiquesBureautiques2:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques2:fiche.IllustrationLinguistiquesBureautiques2,
        IllustrationLinguistiquesBureautiques3:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques3:fiche.IllustrationLinguistiquesBureautiques3,
        IllustrationLinguistiquesBureautiques4:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques4:fiche.IllustrationLinguistiquesBureautiques4,
        IllustrationLinguistiquesBureautiques5:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques5:fiche.IllustrationLinguistiquesBureautiques5,
        IllustrationLinguistiquesBureautiques6:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques6:fiche.IllustrationLinguistiquesBureautiques6,
        IllustrationLinguistiquesBureautiques7:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques7:fiche.IllustrationLinguistiquesBureautiques7,
        IllustrationLinguistiquesBureautiques8:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques8:fiche.IllustrationLinguistiquesBureautiques8,
        IllustrationLinguistiquesBureautiques9:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques9:fiche.IllustrationLinguistiquesBureautiques9,
        IllustrationLinguistiquesBureautiques10:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques10:fiche.IllustrationLinguistiquesBureautiques10,
        IllustrationLinguistiquesBureautiques11:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques11:fiche.IllustrationLinguistiquesBureautiques11,
        IllustrationLinguistiquesBureautiques12:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques12:fiche.IllustrationLinguistiquesBureautiques12,
        IllustrationLinguistiquesBureautiques13:fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13?fiche.RequestVestion[0].IllustrationLinguistiquesBureautiques13:fiche.IllustrationLinguistiquesBureautiques13,
        IllustrationOrientationstrategique:fiche.RequestVestion[0].IllustrationOrientationstrategique?fiche.RequestVestion[0].IllustrationOrientationstrategique:fiche.IllustrationOrientationstrategique,
        IllustrationOrientationstrategique2:fiche.RequestVestion[0].IllustrationOrientationstrategique2?fiche.RequestVestion[0].IllustrationOrientationstrategique2:fiche.IllustrationOrientationstrategique2,
        IllustrationOrientationstrategique3:fiche.RequestVestion[0].IllustrationOrientationstrategique3?fiche.RequestVestion[0].IllustrationOrientationstrategique3:fiche.IllustrationOrientationstrategique3,
        IllustrationOrientationstrategique4:fiche.RequestVestion[0].IllustrationOrientationstrategique4?fiche.RequestVestion[0].IllustrationOrientationstrategique4:fiche.IllustrationOrientationstrategique4,
        IllustrationOrientationstrategique5:fiche.RequestVestion[0].IllustrationOrientationstrategique5?fiche.RequestVestion[0].IllustrationOrientationstrategique5:fiche.IllustrationOrientationstrategique5,
        IllustrationOrientationstrategique6:fiche.RequestVestion[0].IllustrationOrientationstrategique6?fiche.RequestVestion[0].IllustrationOrientationstrategique6:fiche.IllustrationOrientationstrategique6,
        IllustrationOrientationstrategique7:fiche.RequestVestion[0].IllustrationOrientationstrategique7?fiche.RequestVestion[0].IllustrationOrientationstrategique7:fiche.IllustrationOrientationstrategique7,
        IllustrationOrientationstrategique8:fiche.RequestVestion[0].IllustrationOrientationstrategique8?fiche.RequestVestion[0].IllustrationOrientationstrategique8:fiche.IllustrationOrientationstrategique8,
        IllustrationOrientationstrategique9:fiche.RequestVestion[0].IllustrationOrientationstrategique9?fiche.RequestVestion[0].IllustrationOrientationstrategique9:fiche.IllustrationOrientationstrategique9,
        IllustrationOrientationstrategique10:fiche.RequestVestion[0].IllustrationOrientationstrategique10?fiche.RequestVestion[0].IllustrationOrientationstrategique10:fiche.IllustrationOrientationstrategique10,
        IllustrationOrientationstrategique11:fiche.RequestVestion[0].IllustrationOrientationstrategique11?fiche.RequestVestion[0].IllustrationOrientationstrategique11:fiche.IllustrationOrientationstrategique11,
        IllustrationOrientationstrategique12:fiche.RequestVestion[0].IllustrationOrientationstrategique12?fiche.RequestVestion[0].IllustrationOrientationstrategique12:fiche.IllustrationOrientationstrategique12,
        IllustrationOrientationstrategique13:fiche.RequestVestion[0].IllustrationOrientationstrategique13?fiche.RequestVestion[0].IllustrationOrientationstrategique13:fiche.IllustrationOrientationstrategique13,
        IllustrationSensdesaffaires:fiche.RequestVestion[0].IllustrationSensdesaffaires?fiche.RequestVestion[0].IllustrationSensdesaffaires:fiche.IllustrationSensdesaffaires,
        IllustrationSensdesaffaires2:fiche.RequestVestion[0].IllustrationSensdesaffaires2?fiche.RequestVestion[0].IllustrationSensdesaffaires2:fiche.IllustrationSensdesaffaires2,
        IllustrationSensdesaffaires3:fiche.RequestVestion[0].IllustrationSensdesaffaires3?fiche.RequestVestion[0].IllustrationSensdesaffaires3:fiche.IllustrationSensdesaffaires3,
        IllustrationSensdesaffaires4:fiche.RequestVestion[0].IllustrationSensdesaffaires4?fiche.RequestVestion[0].IllustrationSensdesaffaires4:fiche.IllustrationSensdesaffaires4,
        IllustrationSensdesaffaires5:fiche.RequestVestion[0].IllustrationSensdesaffaires5?fiche.RequestVestion[0].IllustrationSensdesaffaires5:fiche.IllustrationSensdesaffaires5,
        IllustrationSensdesaffaires6:fiche.RequestVestion[0].IllustrationSensdesaffaires6?fiche.RequestVestion[0].IllustrationSensdesaffaires6:fiche.IllustrationSensdesaffaires6,
        IllustrationSensdesaffaires7:fiche.RequestVestion[0].IllustrationSensdesaffaires7?fiche.RequestVestion[0].IllustrationSensdesaffaires7:fiche.IllustrationSensdesaffaires7,
        IllustrationSensdesaffaires8:fiche.RequestVestion[0].IllustrationSensdesaffaires8?fiche.RequestVestion[0].IllustrationSensdesaffaires8:fiche.IllustrationSensdesaffaires8,
        IllustrationSensdesaffaires9:fiche.RequestVestion[0].IllustrationSensdesaffaires9?fiche.RequestVestion[0].IllustrationSensdesaffaires9:fiche.IllustrationSensdesaffaires9,
        IllustrationSensdesaffaires10:fiche.RequestVestion[0].IllustrationSensdesaffaires10?fiche.RequestVestion[0].IllustrationSensdesaffaires10:fiche.IllustrationSensdesaffaires10,
        IllustrationSensdesaffaires11:fiche.RequestVestion[0].IllustrationSensdesaffaires11?fiche.RequestVestion[0].IllustrationSensdesaffaires11:fiche.IllustrationSensdesaffaires11,
        IllustrationSensdesaffaires12:fiche.RequestVestion[0].IllustrationSensdesaffaires12?fiche.RequestVestion[0].IllustrationSensdesaffaires12:fiche.IllustrationSensdesaffaires12,
        IllustrationSensdesaffaires13:fiche.RequestVestion[0].IllustrationSensdesaffaires13?fiche.RequestVestion[0].IllustrationSensdesaffaires13:fiche.IllustrationSensdesaffaires13,
        IllustrationLeadership:fiche.RequestVestion[0].IllustrationLeadership?fiche.RequestVestion[0].IllustrationLeadership:fiche.IllustrationLeadership,
        IllustrationLeadership2:fiche.RequestVestion[0].IllustrationLeadership2?fiche.RequestVestion[0].IllustrationLeadership2:fiche.IllustrationLeadership2,
        IllustrationLeadership3:fiche.RequestVestion[0].IllustrationLeadership3?fiche.RequestVestion[0].IllustrationLeadership3:fiche.IllustrationLeadership3,
        IllustrationLeadership4:fiche.RequestVestion[0].IllustrationLeadership4?fiche.RequestVestion[0].IllustrationLeadership4:fiche.IllustrationLeadership4,
        IllustrationLeadership5:fiche.RequestVestion[0].IllustrationLeadership5?fiche.RequestVestion[0].IllustrationLeadership5:fiche.IllustrationLeadership5,
        IllustrationLeadership6:fiche.RequestVestion[0].IllustrationLeadership6?fiche.RequestVestion[0].IllustrationLeadership6:fiche.IllustrationLeadership6,
        IllustrationLeadership7:fiche.RequestVestion[0].IllustrationLeadership7?fiche.RequestVestion[0].IllustrationLeadership7:fiche.IllustrationLeadership7,
        IllustrationLeadership8:fiche.RequestVestion[0].IllustrationLeadership8?fiche.RequestVestion[0].IllustrationLeadership8:fiche.IllustrationLeadership8,
        IllustrationLeadership9:fiche.RequestVestion[0].IllustrationLeadership9?fiche.RequestVestion[0].IllustrationLeadership9:fiche.IllustrationLeadership9,
        IllustrationLeadership10:fiche.RequestVestion[0].IllustrationLeadership10?fiche.RequestVestion[0].IllustrationLeadership10:fiche.IllustrationLeadership10,
        IllustrationLeadership11:fiche.RequestVestion[0].IllustrationLeadership11?fiche.RequestVestion[0].IllustrationLeadership11:fiche.IllustrationLeadership11,
        IllustrationLeadership12:fiche.RequestVestion[0].IllustrationLeadership12?fiche.RequestVestion[0].IllustrationLeadership12:fiche.IllustrationLeadership12,
        IllustrationLeadership13:fiche.RequestVestion[0].IllustrationLeadership13?fiche.RequestVestion[0].IllustrationLeadership13:fiche.IllustrationLeadership13,
        IllustrationGestionOperaionnelle:fiche.RequestVestion[0].IllustrationGestionOperationnelle?fiche.RequestVestion[0].IllustrationGestionOperationnelle:fiche.IllustrationGestionOperationnelle,
        IllustrationGestionOperationnelle2:fiche.RequestVestion[0].IllustrationGestionOperationnelle2?fiche.RequestVestion[0].IllustrationGestionOperationnelle2:fiche.IllustrationGestionOperationnelle2,
        IllustrationGestionOperationnelle3:fiche.RequestVestion[0].IllustrationGestionOperationnelle3?fiche.RequestVestion[0].IllustrationGestionOperationnelle3:fiche.IllustrationGestionOperationnelle3,
        IllustrationGestionOperationnelle4:fiche.RequestVestion[0].IllustrationGestionOperationnelle4?fiche.RequestVestion[0].IllustrationGestionOperationnelle4:fiche.IllustrationGestionOperationnelle4,
        IllustrationGestionOperationnelle5:fiche.RequestVestion[0].IllustrationGestionOperationnelle5?fiche.RequestVestion[0].IllustrationGestionOperationnelle5:fiche.IllustrationGestionOperationnelle5,
        IllustrationGestionOperationnelle6:fiche.RequestVestion[0].IllustrationGestionOperationnelle6?fiche.RequestVestion[0].IllustrationGestionOperationnelle6:fiche.IllustrationGestionOperationnelle6,
        IllustrationGestionOperationnelle7:fiche.RequestVestion[0].IllustrationGestionOperationnelle7?fiche.RequestVestion[0].IllustrationGestionOperationnelle7:fiche.IllustrationGestionOperationnelle7,
        IllustrationGestionOperationnelle8:fiche.RequestVestion[0].IllustrationGestionOperationnelle8?fiche.RequestVestion[0].IllustrationGestionOperationnelle8:fiche.IllustrationGestionOperationnelle8,
        IllustrationGestionOperationnelle9:fiche.RequestVestion[0].IllustrationGestionOperationnelle9?fiche.RequestVestion[0].IllustrationGestionOperationnelle9:fiche.IllustrationGestionOperationnelle9,
        IllustrationGestionOperationnelle10:fiche.RequestVestion[0].IllustrationGestionOperationnelle10?fiche.RequestVestion[0].IllustrationGestionOperationnelle10:fiche.IllustrationGestionOperationnelle10,
        IllustrationGestionOperationnelle11:fiche.RequestVestion[0].IllustrationGestionOperationnelle11?fiche.RequestVestion[0].IllustrationGestionOperationnelle11:fiche.IllustrationGestionOperationnelle11,
        IllustrationGestionOperationnelle12:fiche.RequestVestion[0].IllustrationGestionOperationnelle12?fiche.RequestVestion[0].IllustrationGestionOperationnelle12:fiche.IllustrationGestionOperationnelle12,
        IllustrationGestionOperationnelle13:fiche.RequestVestion[0].IllustrationGestionOperationnelle13?fiche.RequestVestion[0].IllustrationGestionOperationnelle13:fiche.IllustrationGestionOperationnelle13,
        IllustrationGestionEquipe:fiche.RequestVestion[0].IllustrationGestionEquipe?fiche.RequestVestion[0].IllustrationGestionEquipe:fiche.IllustrationGestionEquipe,
        IllustrationGestionEquipe2:fiche.RequestVestion[0].IllustrationGestionEquipe2?fiche.RequestVestion[0].IllustrationGestionEquipe2:fiche.IllustrationGestionEquipe2,
        IllustrationGestionEquipe3:fiche.RequestVestion[0].IllustrationGestionEquipe3?fiche.RequestVestion[0].IllustrationGestionEquipe3:fiche.IllustrationGestionEquipe3,
        IllustrationGestionEquipe4:fiche.RequestVestion[0].IllustrationGestionEquipe4?fiche.RequestVestion[0].IllustrationGestionEquipe4:fiche.IllustrationGestionEquipe4,
        IllustrationGestionEquipe5:fiche.RequestVestion[0].IllustrationGestionEquipe5?fiche.RequestVestion[0].IllustrationGestionEquipe5:fiche.IllustrationGestionEquipe5,
        IllustrationGestionEquipe6:fiche.RequestVestion[0].IllustrationGestionEquipe6?fiche.RequestVestion[0].IllustrationGestionEquipe6:fiche.IllustrationGestionEquipe6,
        IllustrationGestionEquipe7:fiche.RequestVestion[0].IllustrationGestionEquipe7?fiche.RequestVestion[0].IllustrationGestionEquipe7:fiche.IllustrationGestionEquipe7,
        IllustrationGestionEquipe8:fiche.RequestVestion[0].IllustrationGestionEquipe8?fiche.RequestVestion[0].IllustrationGestionEquipe8:fiche.IllustrationGestionEquipe8,
        IllustrationGestionEquipe9:fiche.RequestVestion[0].IllustrationGestionEquipe9?fiche.RequestVestion[0].IllustrationGestionEquipe9:fiche.IllustrationGestionEquipe9,
        IllustrationGestionEquipe10:fiche.RequestVestion[0].IllustrationGestionEquipe10?fiche.RequestVestion[0].IllustrationGestionEquipe10:fiche.IllustrationGestionEquipe10,
        IllustrationGestionEquipe11:fiche.RequestVestion[0].IllustrationGestionEquipe11?fiche.RequestVestion[0].IllustrationGestionEquipe11:fiche.IllustrationGestionEquipe11,
        IllustrationGestionEquipe12:fiche.RequestVestion[0].IllustrationGestionEquipe12?fiche.RequestVestion[0].IllustrationGestionEquipe12:fiche.IllustrationGestionEquipe12,
       IllustrationGestionEquipe13:fiche.RequestVestion[0].IllustrationGestionEquipe13?fiche.RequestVestion[0].IllustrationGestionEquipe13:fiche.IllustrationGestionEquipe13,
        RattachementsHierarchique:fiche.RequestVestion[0].RattachementsHierarchique?fiche.RequestVestion[0].RattachementsHierarchique:fiche.RattachementsHierarchique,
        RattachementsFonctionnel:fiche.RequestVestion[0].RattachementsFonctionnel?fiche.RequestVestion[0].RattachementsFonctionnel:fiche.RattachementsFonctionnel,
          Description:fiche.RequestVestion[0].Description?fiche.RequestVestion[0].Description:fiche.Description,
          myclass:fiche.RequestVestion[0].myclass?fiche.RequestVestion[0].myclass:fiche.myclass,    
          AutreAppelations:fiche.RequestVestion[0].AutreAppelations?fiche.RequestVestion[0].AutreAppelations:fiche.AutreAppelations,
          EtatDeFiche:fiche.RequestVestion[0].EtatDeFiche?fiche.RequestVestion[0].EtatDeFiche:fiche.EtatDeFiche,
         niveauMetier1:fiche.RequestVestion[0].niveauMetier1?fiche.RequestVestion[0].niveauMetier1:fiche.niveauMetier1,
          niveauMetier2:fiche.RequestVestion[0].niveauMetier2?fiche.RequestVestion[0].niveauMetier2:fiche.niveauMetier2,
          niveauMetier3:fiche.RequestVestion[0].niveauMetier3?fiche.RequestVestion[0].niveauMetier3:fiche.niveauMetier3,
          niveauMetier4:fiche.RequestVestion[0].niveauMetier4?fiche.RequestVestion[0].niveauMetier4:fiche.niveauMetier4,
          niveauMetier5:fiche.RequestVestion[0].niveauMetier5?fiche.RequestVestion[0].niveauMetier5:fiche.niveauMetier5,
          niveauMetier6:fiche.RequestVestion[0].niveauMetier6?fiche.RequestVestion[0].niveauMetier6:fiche.niveauMetier6,
          NiveauComportementales1:fiche.RequestVestion[0].NiveauComportementales1?fiche.RequestVestion[0].NiveauComportementales1:fiche.NiveauComportementales1,
          NiveauComportementales2:fiche.RequestVestion[0].NiveauComportementales2?fiche.RequestVestion[0].NiveauComportementales2:fiche.NiveauComportementales2,
           NiveauComportementales3:fiche.RequestVestion[0].NiveauComportementales3?fiche.RequestVestion[0].NiveauComportementales3:fiche.NiveauComportementales3,
           NiveauComportementales4:fiche.RequestVestion[0].NiveauComportementales4?fiche.RequestVestion[0].NiveauComportementales4:fiche.NiveauComportementales4,
           NiveauManagerials1:fiche.RequestVestion[0].NiveauManagerials1?fiche.RequestVestion[0].NiveauManagerials1:fiche.NiveauManagerials1,
           NiveauManagerials2:fiche.RequestVestion[0].NiveauManagerials2?fiche.RequestVestion[0].NiveauManagerials2:fiche.NiveauManagerials2,
           NiveauManagerials3:fiche.RequestVestion[0].NiveauManagerials3?fiche.RequestVestion[0].NiveauManagerials3:fiche.NiveauManagerials3,
           NiveauManagerials4:fiche.RequestVestion[0].NiveauManagerials4?fiche.RequestVestion[0].NiveauManagerials4:fiche.NiveauManagerials4,
           NiveauManagerials5:fiche.RequestVestion[0].NiveauManagerials5?fiche.RequestVestion[0].NiveauManagerials5:fiche.NiveauManagerials5,      
           NiveauManagerials6:fiche.RequestVestion[0].NiveauManagerials6?fiche.RequestVestion[0].NiveauManagerials6:fiche.NiveauManagerials6,
           ClientsDuPoste:fiche.RequestVestion[0].ClientsDuPoste.length?fiche.RequestVestion[0].ClientsDuPoste:fiche.ClientsDuPoste,
           FournisseursDuPoste:fiche.RequestVestion[0].FournisseursDuPoste.length?fiche.RequestVestion[0].FournisseursDuPoste:fiche.FournisseursDuPoste,
           AutreResponsabilite:fiche.RequestVestion[0].AutreResponsabilite.length?fiche.RequestVestion[0].AutreResponsabilite:fiche.AutreResponsabilite,
           CompetencesTransverses:fiche.RequestVestion[0].CompetencesTransverses.length?fiche.RequestVestion[0].CompetencesTransverses:fiche.CompetencesTransverses,
           DimensionnementDuPoste:fiche.RequestVestion[0].DimensionnementDuPoste.length?fiche.RequestVestion[0].DimensionnementDuPoste:fiche.DimensionnementDuPoste,
           IndicateursDePerformance:fiche.RequestVestion[0].IndicateursDePerformance.length?fiche.RequestVestion[0].IndicateursDePerformance:fiche.IndicateursDePerformance,

        }
      let test =0;
      fiche.RequestVestion[0]=newVersionRequest
      fiche.newversion=true
            fiche.RequestVestion[0].IndicateursDePerformance.map((x,i)=>{
        if(x.id==req.params.idr){
          test++
        }
    })
    if(test==0){
      fiche.IndicateursDePerformance.map((x,i)=>{
        fiche.RequestVestion[0].IndicateursDePerformance.push(x)
      })
    }
      fiche.RequestVestion[0].IndicateursDePerformance.map((x)=>{
 if( x.id==req.params.idr){
    x.IndicateursDePerformance= req.body.IndicateursDePerformance?req.body.IndicateursDePerformance:x.IndicateursDePerformance;
    x.ElementsDeCalcul=req.body.ElementsDeCalcul?req.body.ElementsDeCalcul:x.ElementsDeCalcul;
    x.Commentaires=req.body.Commentaires?req.body.Commentaires:x.Commentaires;
 };
}
)
await fiche.save()
      res.json(fiche.RequestVestion[0].IndicateursDePerformance);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });































  
module.exports = router;