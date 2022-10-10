const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var excelSchema = Schema({
    Categories:String,
    Libelle:String,
    souscategorie:String,
    class:String,
  NiveauComportementales1:Number,
  NiveauComportementales2:Number,
  NiveauComportementales3:Number,
  NiveauComportementales4:Number,
  NiveauManagerials1:Number,
  NiveauManagerials2:Number,
  NiveauManagerials3:Number,
  NiveauManagerials4:Number,
  NiveauManagerials5:Number,
  NiveauManagerials6:Number,
  niveauMetier1:Number,
  niveauMetier2:Number,
  niveauMetier3:Number,
  niveauMetier4:Number,
  niveauMetier5:Number,
  niveauMetier6:Number,

});

module.exports =  ExcelModel = mongoose.model('competances',excelSchema);
