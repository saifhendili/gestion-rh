import React,{useState,Fragment} from 'react'
import { AddNewFiche, addUComportementales, addUmanagerials, AdduTECK } from '../../actions/fichev';
import { connect } from 'react-redux';
import Aside from '../Layout/Aside';

function AddCompetance({AddNewFiche,addUComportementales, addUmanagerials, AdduTECK}) {
    const [niveauMetier1, setniveauMetier1] = useState(0);
    const [niveauMetier2, setniveauMetier2] = useState(0);
    const [niveauMetier3, setniveauMetier3] = useState(0);
    const [niveauMetier4, setniveauMetier4] = useState(0);
    const [niveauMetier5, setniveauMetier5] = useState(0);
    const [niveauMetier6, setniveauMetier6] = useState(0);
    
    const [NiveauComportementales1, setNiveauComportementales1] = useState(0);
    const [NiveauComportementales2, setNiveauComportementales2] = useState(0);
    const [NiveauComportementales3, setNiveauComportementales3] = useState(0);
    const [NiveauComportementales4, setNiveauComportementales4] = useState(0);
    
    const [NiveauManagerials1, setNiveauManagerials1] = useState(0);
    const [NiveauManagerials2, setNiveauManagerials2] = useState(0);
    const [NiveauManagerials3, setNiveauManagerials3] = useState(0);
    const [NiveauManagerials4, setNiveauManagerials4] = useState(0);
    const [NiveauManagerials5, setNiveauManagerials5] = useState(0);
    const [NiveauManagerials6, setNiveauManagerials6] = useState(0);
    const [Categories, setCategories] = useState(0);
    const [Libelle, setLibelle] = useState(0);
    const [souscategorie, setsouscategorie] = useState(0);
    const [Myclass, setMyclass] = useState(0);
    const [IllustrationCM, setIllustrationCM] = useState();
    const [IllustrationCM2, setIllustrationCM2] = useState();
    const [IllustrationCM3, setIllustrationCM3] = useState();
    const [IllustrationCM4, setIllustrationCM4] = useState();
    const [IllustrationCM5, setIllustrationCM5] = useState();
    const [IllustrationCM6, setIllustrationCM6] = useState();
    const [IllustrationCM7, setIllustrationCM7] = useState();
    const [IllustrationCM8, setIllustrationCM8] = useState();
    const [IllustrationCM9, setIllustrationCM9] = useState();
    const [IllustrationCM10, setIllustrationCM10] = useState();
    const [IllustrationCM11, setIllustrationCM11] = useState();
    const [IllustrationCM12, setIllustrationCM12] = useState();
    const [IllustrationCM13, setIllustrationCM13] = useState();
    const [IllustrationCNormes, setIllustrationCNormes] = useState();
    const [IllustrationCNormes1, setIllustrationCNormes1] = useState();
    const [IllustrationCNormes2, setIllustrationCNormes2] = useState();
    const [IllustrationCNormes3, setIllustrationCNormes3] = useState();
    const [IllustrationCNormes4, setIllustrationCNormes4] = useState();
    const [IllustrationCNormes5, setIllustrationCNormes5] = useState();
    const [IllustrationCNormes6, setIllustrationCNormes6] = useState();
    const [IllustrationCNormes7, setIllustrationCNormes7] = useState();
    const [IllustrationCNormes8, setIllustrationCNormes8] = useState();
    const [IllustrationCNormes9, setIllustrationCNormes9] = useState();
    const [IllustrationCNormes10, setIllustrationCNormes10] = useState();
    const [IllustrationCNormes11, setIllustrationCNormes11] = useState();
    const [IllustrationCNormes12, setIllustrationCNormes12] = useState();
    const [IllustrationCNormes13, setIllustrationCNormes13] = useState();

    const [IllustrationActivite, setIllustrationActivite] = useState();
    const [IllustrationActivite2, setIllustrationActivite2] = useState();
    const [IllustrationActivite3, setIllustrationActivite3] = useState();
    const [IllustrationActivite4, setIllustrationActivite4] = useState();
    const [IllustrationActivite5, setIllustrationActivite5] = useState();
    const [IllustrationActivite6, setIllustrationActivite6] = useState();
    const [IllustrationActivite7, setIllustrationActivite7] = useState();
    const [IllustrationActivite8, setIllustrationActivite8] = useState();
    const [IllustrationActivite9, setIllustrationActivite9] = useState();
    const [IllustrationActivite10, setIllustrationActivite10] = useState();
    const [IllustrationActivite11, setIllustrationActivite11] = useState();
    const [IllustrationActivite12, setIllustrationActivite12] = useState();
    const [IllustrationActivite13, setIllustrationActivite13] = useState();
    const [IllustrationOrganisation, setIllustrationOrganisation] = useState();
    const [IllustrationOrganisation2, setIllustrationOrganisation2] = useState();
    const [IllustrationOrganisation3, setIllustrationOrganisation3] = useState();
    const [IllustrationOrganisation4, setIllustrationOrganisation4] = useState();
    const [IllustrationOrganisation5, setIllustrationOrganisation5] = useState();
    const [IllustrationOrganisation6, setIllustrationOrganisation6] = useState();
    const [IllustrationOrganisation7, setIllustrationOrganisation7] = useState();
    const [IllustrationOrganisation8, setIllustrationOrganisation8] = useState();
    const [IllustrationOrganisation9, setIllustrationOrganisation9] = useState();
    const [IllustrationOrganisation10, setIllustrationOrganisation10] = useState();
    const [IllustrationOrganisation11, setIllustrationOrganisation11] = useState();
    const [IllustrationOrganisation12, setIllustrationOrganisation12] = useState();
    const [IllustrationOrganisation13, setIllustrationOrganisation13] = useState();
    const [IllustrationSIBD, setIllustrationSIBD] = useState();
    const [IllustrationSIBD2, setIllustrationSIBD2] = useState();
    const [IllustrationSIBD3, setIllustrationSIBD3] = useState();
    const [IllustrationSIBD4, setIllustrationSIBD4] = useState();
    const [IllustrationSIBD5, setIllustrationSIBD5] = useState();
    const [IllustrationSIBD6, setIllustrationSIBD6] = useState();
    const [IllustrationSIBD7, setIllustrationSIBD7] = useState();
    const [IllustrationSIBD8, setIllustrationSIBD8] = useState();
    const [IllustrationSIBD9, setIllustrationSIBD9] = useState();
    const [IllustrationSIBD10, setIllustrationSIBD10] = useState();
    const [IllustrationSIBD11, setIllustrationSIBD11] = useState();
    const [IllustrationSIBD12, setIllustrationSIBD12] = useState();
    const [IllustrationSIBD13, setIllustrationSIBD13] = useState();
    const [IllustrationLinguistiquesBureautiques, setIllustrationLinguistiquesBureautiques] = useState();
    const [IllustrationLinguistiquesBureautiques2, setIllustrationLinguistiquesBureautiques2] = useState();
    const [IllustrationLinguistiquesBureautiques3, setIllustrationLinguistiquesBureautiques3] = useState();
    const [IllustrationLinguistiquesBureautiques4, setIllustrationLinguistiquesBureautiques4] = useState();
    const [IllustrationLinguistiquesBureautiques5, setIllustrationLinguistiquesBureautiques5] = useState();
    const [IllustrationLinguistiquesBureautiques6, setIllustrationLinguistiquesBureautiques6] = useState();
    const [IllustrationLinguistiquesBureautiques7, setIllustrationLinguistiquesBureautiques7] = useState();
    const [IllustrationLinguistiquesBureautiques8, setIllustrationLinguistiquesBureautiques8] = useState();
    const [IllustrationLinguistiquesBureautiques9, setIllustrationLinguistiquesBureautiques9] = useState();
    const [IllustrationLinguistiquesBureautiques10, setIllustrationLinguistiquesBureautiques10] = useState();
    const [IllustrationLinguistiquesBureautiques11, setIllustrationLinguistiquesBureautiques11] = useState();
    const [IllustrationLinguistiquesBureautiques12, setIllustrationLinguistiquesBureautiques12] = useState();
    const [IllustrationLinguistiquesBureautiques13, setIllustrationLinguistiquesBureautiques13] = useState();
    const [IllustrationCMnb, setIllustrationCMnb] = useState(1);
    const [IllustrationCNormesnb, setIllustrationCNormesnb] = useState(0);
    const [IllustrationActiviteNB, setIllustrationActiviteNB] = useState(1);
    const [IllustrationOrganisationNB, setIllustrationOrganisationNB] = useState(1);
    const [IllustrationSIBDNB, setIllustrationSIBDNB] = useState(1);
    const [inguistiquesBureautiquesNb, setinguistiquesBureautiquesNb] = useState(1);
    

    const [Illustrationinnovation, setIllustrationinnovation] = useState();
    const [Illustrationinnovation2, setIllustrationinnovation2] = useState();
    const [Illustrationinnovation3, setIllustrationinnovation3] = useState();
    const [Illustrationinnovation4, setIllustrationinnovation4] = useState();
    const [Illustrationinnovation5, setIllustrationinnovation5] = useState();
    const [Illustrationinnovation6, setIllustrationinnovation6] = useState();
    const [Illustrationinnovation7, setIllustrationinnovation7] = useState();
    const [Illustrationinnovation8, setIllustrationinnovation8] = useState();
    const [Illustrationinnovation9, setIllustrationinnovation9] = useState();
    const [Illustrationinnovation10, setIllustrationinnovation10] = useState();
    const [Illustrationinnovation11, setIllustrationinnovation11] = useState();
    const [Illustrationinnovation12, setIllustrationinnovation12] = useState();
    const [Illustrationinnovation13, setIllustrationinnovation13] = useState();
    const [IllustrationAgilit, setIllustrationAgilit] = useState();
    const [IllustrationAgilit2, setIllustrationAgilit2] = useState();
    const [IllustrationAgilit3, setIllustrationAgilit3] = useState();
    const [IllustrationAgilit4, setIllustrationAgilit4] = useState();
    const [IllustrationAgilit5, setIllustrationAgilit5] = useState();
    const [IllustrationAgilit6, setIllustrationAgilit6] = useState();
    const [IllustrationAgilit7, setIllustrationAgilit7] = useState();
    const [IllustrationAgilit8, setIllustrationAgilit8] = useState();
    const [IllustrationAgilit9, setIllustrationAgilit9] = useState();
    const [IllustrationAgilit10, setIllustrationAgilit10] = useState();
    const [IllustrationAgilit11, setIllustrationAgilit11] = useState();
    const [IllustrationAgilit12, setIllustrationAgilit12] = useState();
    const [IllustrationAgilit13, setIllustrationAgilit13] = useState();
    const [IllustrationForceCollectif, setIllustrationForceCollectif] = useState();
    const [IllustrationForceCollectif2, setIllustrationForceCollectif2] = useState();
    const [IllustrationForceCollectif3, setIllustrationForceCollectif3] = useState();
    const [IllustrationForceCollectif4, setIllustrationForceCollectif4] = useState();
    const [IllustrationForceCollectif5, setIllustrationForceCollectif5] = useState();
    const [IllustrationForceCollectif6, setIllustrationForceCollectif6] = useState();
    const [IllustrationForceCollectif7, setIllustrationForceCollectif7] = useState();
    const [IllustrationForceCollectif8, setIllustrationForceCollectif8] = useState();
    const [IllustrationForceCollectif9, setIllustrationForceCollectif9] = useState();
    const [IllustrationForceCollectif10, setIllustrationForceCollectif10] = useState();
    const [IllustrationForceCollectif11, setIllustrationForceCollectif11] = useState();
    const [IllustrationForceCollectif12, setIllustrationForceCollectif12] = useState();
    const [IllustrationForceCollectif13, setIllustrationForceCollectif13] = useState();
    const [IllustrationRespectEngagement, setIllustrationRespectEngagement] = useState();
    const [IllustrationRespectEngagement2, setIllustrationRespectEngagement2] = useState();
    const [IllustrationRespectEngagement3, setIllustrationRespectEngagement3] = useState();
    const [IllustrationRespectEngagement4, setIllustrationRespectEngagement4] = useState();
    const [IllustrationRespectEngagement5, setIllustrationRespectEngagement5] = useState();
    const [IllustrationRespectEngagement6, setIllustrationRespectEngagement6] = useState();
    const [IllustrationRespectEngagement7, setIllustrationRespectEngagement7] = useState();
    const [IllustrationRespectEngagement8, setIllustrationRespectEngagement8] = useState();
    const [IllustrationRespectEngagement9, setIllustrationRespectEngagement9] = useState();
    const [IllustrationRespectEngagement10, setIllustrationRespectEngagement10] = useState();
    const [IllustrationRespectEngagement11, setIllustrationRespectEngagement11] = useState();
    const [IllustrationRespectEngagement12, setIllustrationRespectEngagement12] = useState();
    const [IllustrationRespectEngagement13, setIllustrationRespectEngagement13] = useState();
    const [IllustrationinnovationNB, setIllustrationinnovationNB] = useState(1);
    const [IllustrationAgilitNB, setIllustrationAgilitNB] = useState(1);
    const [IllustrationForceCollectifNB, setIllustrationForceCollectifNB] = useState(1);
    const [IllustrationRespectEngagementNB, setIllustrationRespectEngagementNB] = useState(1);

    const [IllustrationOrientationstrategique, setIllustrationOrientationstrategique] = useState();
    const [IllustrationOrientationstrategique2, setIllustrationOrientationstrategique2] = useState();
    const [IllustrationOrientationstrategique3, setIllustrationOrientationstrategique3] = useState();
    const [IllustrationOrientationstrategique4, setIllustrationOrientationstrategique4] = useState();
    const [IllustrationOrientationstrategique5, setIllustrationOrientationstrategique5] = useState();
    const [IllustrationOrientationstrategique6, setIllustrationOrientationstrategique6] = useState();
    const [IllustrationOrientationstrategique7, setIllustrationOrientationstrategique7] = useState();
    const [IllustrationOrientationstrategique8, setIllustrationOrientationstrategique8] = useState();
    const [IllustrationOrientationstrategique9, setIllustrationOrientationstrategique9] = useState();
    const [IllustrationOrientationstrategique10, setIllustrationOrientationstrategique10] = useState();
    const [IllustrationOrientationstrategique11, setIllustrationOrientationstrategique11] = useState();
    const [IllustrationOrientationstrategique12, setIllustrationOrientationstrategique12] = useState();
    const [IllustrationOrientationstrategique13, setIllustrationOrientationstrategique13] = useState();
    const [IllustrationSensdesaffaires, setIllustrationSensdesaffaires] = useState();
    const [IllustrationSensdesaffaires2, setIllustrationSensdesaffaires2] = useState();
    const [IllustrationSensdesaffaires3, setIllustrationSensdesaffaires3] = useState();
    const [IllustrationSensdesaffaires4, setIllustrationSensdesaffaires4] = useState();
    const [IllustrationSensdesaffaires5, setIllustrationSensdesaffaires5] = useState();
    const [IllustrationSensdesaffaires6, setIllustrationSensdesaffaires6] = useState();
    const [IllustrationSensdesaffaires7, setIllustrationSensdesaffaires7] = useState();
    const [IllustrationSensdesaffaires8, setIllustrationSensdesaffaires8] = useState();
    const [IllustrationSensdesaffaires9, setIllustrationSensdesaffaires9] = useState();
    const [IllustrationSensdesaffaires10, setIllustrationSensdesaffaires10] = useState();
    const [IllustrationSensdesaffaires11, setIllustrationSensdesaffaires11] = useState();
    const [IllustrationSensdesaffaires12, setIllustrationSensdesaffaires12] = useState();
    const [IllustrationSensdesaffaires13, setIllustrationSensdesaffaires13] = useState();
    const [IllustrationLeadership, setIllustrationLeadership] = useState();
    const [IllustrationLeadership2, setIllustrationLeadership2] = useState();
    const [IllustrationLeadership3, setIllustrationLeadership3] = useState();
    const [IllustrationLeadership4, setIllustrationLeadership4] = useState();
    const [IllustrationLeadership5, setIllustrationLeadership5] = useState();
    const [IllustrationLeadership6, setIllustrationLeadership6] = useState();
    const [IllustrationLeadership7, setIllustrationLeadership7] = useState();
    const [IllustrationLeadership8, setIllustrationLeadership8] = useState();
    const [IllustrationLeadership9, setIllustrationLeadership9] = useState();
    const [IllustrationLeadership10, setIllustrationLeadership10] = useState();
    const [IllustrationLeadership11, setIllustrationLeadership11] = useState();
    const [IllustrationLeadership12, setIllustrationLeadership12] = useState();
    const [IllustrationLeadership13, setIllustrationLeadership13] = useState();
    const [IllustrationGestionOperationnelle, setIllustrationGestionOperationnelle] = useState();
    const [IllustrationGestionOperationnelle2, setIllustrationGestionOperationnelle2] = useState();
    const [IllustrationGestionOperationnelle3, setIllustrationGestionOperationnelle3] = useState();
    const [IllustrationGestionOperationnelle4, setIllustrationGestionOperationnelle4] = useState();
    const [IllustrationGestionOperationnelle5, setIllustrationGestionOperationnelle5] = useState();
    const [IllustrationGestionOperationnelle6, setIllustrationGestionOperationnelle6] = useState();
    const [IllustrationGestionOperationnelle7, setIllustrationGestionOperationnelle7] = useState();
    const [IllustrationGestionOperationnelle8, setIllustrationGestionOperationnelle8] = useState();
    const [IllustrationGestionOperationnelle9, setIllustrationGestionOperationnelle9] = useState();
    const [IllustrationGestionOperationnelle10, setIllustrationGestionOperationnelle10] = useState();
    const [IllustrationGestionOperationnelle11, setIllustrationGestionOperationnelle11] = useState();
    const [IllustrationGestionOperationnelle12, setIllustrationGestionOperationnelle12] = useState();
    const [IllustrationGestionOperationnelle13, setIllustrationGestionOperationnelle13] = useState();
    const [IllustrationGestionEquipe, setIllustrationGestionEquipe] = useState();
    const [IllustrationGestionEquipe2, setIllustrationGestionEquipe2] = useState();
    const [IllustrationGestionEquipe3, setIllustrationGestionEquipe3] = useState();
    const [IllustrationGestionEquipe4, setIllustrationGestionEquipe4] = useState();
    const [IllustrationGestionEquipe5, setIllustrationGestionEquipe5] = useState();
    const [IllustrationGestionEquipe6, setIllustrationGestionEquipe6] = useState();
    const [IllustrationGestionEquipe7, setIllustrationGestionEquipe7] = useState();
    const [IllustrationGestionEquipe8, setIllustrationGestionEquipe8] = useState();
    const [IllustrationGestionEquipe9, setIllustrationGestionEquipe9] = useState();
    const [IllustrationGestionEquipe10, setIllustrationGestionEquipe10] = useState();
    const [IllustrationGestionEquipe11, setIllustrationGestionEquipe11] = useState();
    const [IllustrationGestionEquipe12, setIllustrationGestionEquipe12] = useState();
    const [IllustrationGestionEquipe13, setIllustrationGestionEquipe13] = useState();
    const [IllustrationOrientationstrategiqueNB, setIllustrationOrientationstrategiqueNB] = useState(1);
    const [IllustrationSensdesaffairesNB, setIllustrationSensdesaffairesNB] = useState(1);
    const [IllustrationLeadershipnb, setIllustrationLeadershipnb] = useState(1);
    const [IllustrationGestionOperationnelleNB, setIllustrationGestionOperationnelleNB] = useState(1);
    const [IllustrationGestionEquipeNB, setIllustrationGestionEquipeNB] = useState(1);
    
    
    
    const onclickaddIllustrationGestionEquipeNB=async(e)=>{
      e.preventDefault();
      setIllustrationGestionEquipeNB(IllustrationGestionEquipeNB+1)
    }    
    const onclickaddIIllustrationGestionOperationnelleNB=async(e)=>{
      e.preventDefault();
      setIllustrationGestionOperationnelleNB(IllustrationGestionOperationnelleNB+1)
    }    
    const onclickaddIllustrationLeadershipnb=async(e)=>{
      e.preventDefault();
      setIllustrationLeadershipnb(IllustrationLeadershipnb+1)
    }    
    const onclickaddIllustrationSensdesaffairesNB=async(e)=>{
      e.preventDefault();
      setIllustrationSensdesaffairesNB(IllustrationSensdesaffairesNB+1)
    }    
    const onclickaddIllustrationOrientationstrategiquenb=async(e)=>{
      e.preventDefault();
      setIllustrationOrientationstrategiqueNB(IllustrationOrientationstrategiqueNB+1)
    }    
    const onclickaddIllustrationRespectEngagement=async(e)=>{
      e.preventDefault();
      setIllustrationRespectEngagementNB(IllustrationRespectEngagementNB+1)
    }    
    
    const onclickaddIllustrationForceCollectifNB=async(e)=>{
      e.preventDefault();
      setIllustrationForceCollectifNB(IllustrationForceCollectifNB+1)
    }  
   
    const onclickaddIllustrationAgilitNB=async(e)=>{
      e.preventDefault();
    
      setIllustrationAgilitNB(IllustrationAgilitNB+1)
    }   

    const onclickaddIllustrationinnovationNB=async(e)=>{
      e.preventDefault();
    
      setIllustrationinnovationNB(IllustrationinnovationNB+1)
    }   
    const onclickaddinguistiquesBureautiquesNb=async(e)=>{
      e.preventDefault();
    
      setinguistiquesBureautiquesNb(inguistiquesBureautiquesNb+1)
    }   
    const onclickaddIllustrationSIBDNB=async(e)=>{
      e.preventDefault();
    
      setIllustrationSIBDNB(IllustrationSIBDNB+1)
    }   

    const onclickaddIllustrationOrganisationNB=async(e)=>{
      e.preventDefault();
    
      setIllustrationOrganisationNB(IllustrationOrganisationNB+1)
    }   
    const onclickaddIllustrationActiviteNB=async(e)=>{
      e.preventDefault();
    
          setIllustrationActiviteNB(IllustrationCMnb+1)
    }   
const onSubmitfiche=(e) => {
  e.preventDefault();
  AdduTECK({souscategorie,   IllustrationCM,
    IllustrationCM2,
    IllustrationCM3,
    IllustrationCM4,
    IllustrationCM5,
    IllustrationCM6,
    IllustrationCM7,
    IllustrationCM8,
    IllustrationCM9,
    IllustrationCM10,
    IllustrationCM11,
    IllustrationCM12,
    IllustrationCM13,
    IllustrationCNormes,
    IllustrationCNormes1,
    IllustrationCNormes2,
    IllustrationCNormes3,
    IllustrationCNormes4,
    IllustrationCNormes5,
    IllustrationCNormes6,
    IllustrationCNormes7,
    IllustrationCNormes8,
    IllustrationCNormes9,
    IllustrationCNormes10,
    IllustrationCNormes11,
    IllustrationCNormes12,
    IllustrationCNormes13,
    IllustrationActivite,
    IllustrationActivite2,
    IllustrationActivite3,
    IllustrationActivite4,
    IllustrationActivite5,
    IllustrationActivite6,
    IllustrationActivite7,
    IllustrationActivite8,
    IllustrationActivite9,
    IllustrationActivite10,
    IllustrationActivite11,
    IllustrationActivite12,
    IllustrationActivite13,
    IllustrationOrganisation,
    IllustrationOrganisation2,
    IllustrationOrganisation3,
    IllustrationOrganisation4,
    IllustrationOrganisation5,
    IllustrationOrganisation6,
    IllustrationOrganisation7,
    IllustrationOrganisation8,
    IllustrationOrganisation9,
    IllustrationOrganisation10,
    IllustrationOrganisation11,
    IllustrationOrganisation12,
    IllustrationOrganisation13,
    IllustrationSIBD,
    IllustrationSIBD2,
    IllustrationSIBD3,
    IllustrationSIBD4,
    IllustrationSIBD5,
    IllustrationSIBD6,
    IllustrationSIBD7,
    IllustrationSIBD8,
    IllustrationSIBD9,
    IllustrationSIBD10,
    IllustrationSIBD11,
    IllustrationSIBD12,
    IllustrationSIBD13,
    IllustrationLinguistiquesBureautiques,
    IllustrationLinguistiquesBureautiques2,
    IllustrationLinguistiquesBureautiques3,
    IllustrationLinguistiquesBureautiques4,
    IllustrationLinguistiquesBureautiques5,
    IllustrationLinguistiquesBureautiques6,
    IllustrationLinguistiquesBureautiques7,
    IllustrationLinguistiquesBureautiques8,
    IllustrationLinguistiquesBureautiques9,
    IllustrationLinguistiquesBureautiques10,
    IllustrationLinguistiquesBureautiques11,
    IllustrationLinguistiquesBureautiques12,
    IllustrationLinguistiquesBureautiques13,})
    addUmanagerials({souscategorie,
      IllustrationOrientationstrategique,
      IllustrationOrientationstrategique2,
      IllustrationOrientationstrategique3,
      IllustrationOrientationstrategique4,
      IllustrationOrientationstrategique5,
      IllustrationOrientationstrategique6,
      IllustrationOrientationstrategique7,
      IllustrationOrientationstrategique8,
      IllustrationOrientationstrategique9,
      IllustrationOrientationstrategique10,
      IllustrationOrientationstrategique11,
      IllustrationOrientationstrategique12,
      IllustrationOrientationstrategique13,
      IllustrationSensdesaffaires,
      IllustrationSensdesaffaires2,
      IllustrationSensdesaffaires3,
      IllustrationSensdesaffaires4,
      IllustrationSensdesaffaires5,
      IllustrationSensdesaffaires6,
      IllustrationSensdesaffaires7,
      IllustrationSensdesaffaires8,
      IllustrationSensdesaffaires9,
      IllustrationSensdesaffaires10,
      IllustrationSensdesaffaires11,
      IllustrationSensdesaffaires12,
      IllustrationSensdesaffaires13,
      IllustrationLeadership,
      IllustrationLeadership2,
      IllustrationLeadership3,
      IllustrationLeadership4,
      IllustrationLeadership5,
      IllustrationLeadership6,
      IllustrationLeadership7,
      IllustrationLeadership8,
      IllustrationLeadership9,
      IllustrationLeadership10,
      IllustrationLeadership11,
      IllustrationLeadership12,
      IllustrationLeadership13,
      IllustrationGestionOperationnelle,
      IllustrationGestionOperationnelle2,
      IllustrationGestionOperationnelle3,
      IllustrationGestionOperationnelle4,
      IllustrationGestionOperationnelle5,
      IllustrationGestionOperationnelle6,
      IllustrationGestionOperationnelle7,
      IllustrationGestionOperationnelle8,
      IllustrationGestionOperationnelle9,
      IllustrationGestionOperationnelle10,
      IllustrationGestionOperationnelle11,
      IllustrationGestionOperationnelle12,
      IllustrationGestionOperationnelle13,
      IllustrationGestionEquipe,
      IllustrationGestionEquipe2,
      IllustrationGestionEquipe3,
      IllustrationGestionEquipe4,
      IllustrationGestionEquipe5,
      IllustrationGestionEquipe6,
      IllustrationGestionEquipe7,
      IllustrationGestionEquipe8,
      IllustrationGestionEquipe9,
      IllustrationGestionEquipe10,
      IllustrationGestionEquipe11,
      IllustrationGestionEquipe12,
      IllustrationGestionEquipe13,
    })
    addUComportementales({souscategorie,
      Illustrationinnovation,
      Illustrationinnovation2,
      Illustrationinnovation3,
      Illustrationinnovation4,
      Illustrationinnovation5,
      Illustrationinnovation6,
      Illustrationinnovation7,
      Illustrationinnovation8,
      Illustrationinnovation9,
      Illustrationinnovation10,
      Illustrationinnovation11,
      Illustrationinnovation12,
      Illustrationinnovation13,
      IllustrationAgilit,
      IllustrationAgilit2,
      IllustrationAgilit3,
      IllustrationAgilit4,
      IllustrationAgilit5,
      IllustrationAgilit6,
      IllustrationAgilit7,
      IllustrationAgilit8,
      IllustrationAgilit9,
      IllustrationAgilit10,
      IllustrationAgilit11,
      IllustrationAgilit12,
      IllustrationAgilit13,
      IllustrationForceCollectif,
      IllustrationForceCollectif2,
      IllustrationForceCollectif3,
      IllustrationForceCollectif4,
      IllustrationForceCollectif5,
      IllustrationForceCollectif6,
      IllustrationForceCollectif7,
      IllustrationForceCollectif8,
      IllustrationForceCollectif9,
      IllustrationForceCollectif10,
      IllustrationForceCollectif11,
      IllustrationForceCollectif12,
      IllustrationForceCollectif13,
      IllustrationRespectEngagement,
      IllustrationRespectEngagement2,
      IllustrationRespectEngagement3,
      IllustrationRespectEngagement4,
      IllustrationRespectEngagement5,
      IllustrationRespectEngagement6,
      IllustrationRespectEngagement7,
      IllustrationRespectEngagement8,
      IllustrationRespectEngagement9,
      IllustrationRespectEngagement10,
      IllustrationRespectEngagement11,
      IllustrationRespectEngagement12,
      IllustrationRespectEngagement13,})
  AddNewFiche({Categories,Libelle,souscategorie,Myclass,niveauMetier1,niveauMetier2,niveauMetier3,niveauMetier4,niveauMetier5,niveauMetier6,NiveauComportementales1,NiveauComportementales2 ,NiveauComportementales3,NiveauComportementales4,NiveauManagerials1,NiveauManagerials2,NiveauManagerials3,NiveauManagerials4,NiveauManagerials5,NiveauManagerials6});  
   }

    const onclickaddullis=async(e)=>{
  e.preventDefault();

      setIllustrationCMnb(IllustrationCMnb+1)
}
    
const onclickaddIllustrationCMnb=async(e)=>{
  e.preventDefault();

  setIllustrationCNormesnb(IllustrationCNormesnb+1)
}


  return (
    <Fragment>
    <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
      <form className='fixecard'   >
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 fixtable">
  <h6>Ajouter Fiche</h6>
</div>



             <div class="form-group ">
<label for="formGroupExampleInput">Categorie</label>
<input type="text" class="form-control" name="Categories" onChange={(e) => setCategories(e.target.value)} id="formGroupExampleInput" placeholder="Categorie"/>
</div>

<div class="form-group ">
<label for="formGroupExampleInput">Sous Categorie</label>
<input type="text" class="form-control" name="souscategorie" onChange={(e) => setsouscategorie(e.target.value)} id="formGroupExampleInput" placeholder="Sous Categorie"/>

</div>
<div class="form-group ">
<label for="formGroupExampleInput">Titre du poste</label>
<input type="text" class="form-control" name="Libelle" onChange={(e) => setLibelle(e.target.value)} id="formGroupExampleInput" placeholder="Libelle"/>

</div>

<div class="form-group ">
<label for="formGroupExampleInput">Class</label>
<input type="text" class="form-control" name="Myclass" onChange={(e) => setMyclass(e.target.value)} id="formGroupExampleInput" placeholder="Class"/>
</div>






  </div>


  </div>
</div>
<div>

<div class="row fixrowmore">



  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Compétences Techniques</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Compétences</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Niveau</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ullistration</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
 
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaissances Métier	</span>
                </td>
                
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={niveauMetier1}
            onChange={(e) => setniveauMetier1(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus <br/> de son métier
</span>
                </td>
                <td class="align-middle ">
                <input type="text" class="form-control" name="IllustrationCM" value={IllustrationCM}  onChange={(e) => setIllustrationCM(e.target.value)} id="formGroupExampleInput" placeholder="Class"/>
              {IllustrationCMnb==2||IllustrationCMnb>2?                <input type="text" class="form-control" name="IllustrationCM2" value={IllustrationCM2}  onChange={(e) => setIllustrationCM2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==3||IllustrationCMnb>3?                <input type="text" class="form-control" name="IllustrationCM3" value={IllustrationCM3}  onChange={(e) => setIllustrationCM3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==4||IllustrationCMnb>4?                <input type="text" class="form-control" name="IllustrationCM4" value={IllustrationCM4}  onChange={(e) => setIllustrationCM4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==5||IllustrationCMnb>5?                <input type="text" class="form-control" name="IllustrationCM5" value={IllustrationCM5}  onChange={(e) => setIllustrationCM5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==6||IllustrationCMnb>6?                <input type="text" class="form-control" name="IllustrationCM6" value={IllustrationCM6}  onChange={(e) => setIllustrationCM6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==7||IllustrationCMnb>7?                <input type="text" class="form-control" name="IllustrationCM7" value={IllustrationCM7}  onChange={(e) => setIllustrationCM7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==8||IllustrationCMnb>8?                <input type="text" class="form-control" name="IllustrationCM8" value={IllustrationCM8}  onChange={(e) => setIllustrationCM8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==9||IllustrationCMnb>9?                <input type="text" class="form-control" name="IllustrationCM9" value={IllustrationCM9}  onChange={(e) => setIllustrationCM9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==10||IllustrationCMnb>10?                <input type="text" class="form-control" name="IllustrationCM10" value={IllustrationCM10}  onChange={(e) => setIllustrationCM10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==11||IllustrationCMnb>11?                <input type="text" class="form-control" name="IllustrationCM11" value={IllustrationCM11}  onChange={(e) => setIllustrationCM11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==12||IllustrationCMnb>12?                <input type="text" class="form-control" name="IllustrationCM12" value={IllustrationCM12}  onChange={(e) => setIllustrationCM12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCMnb==13||IllustrationCMnb>13?                <input type="text" class="form-control" name="IllustrationCM13" value={IllustrationCM13}  onChange={(e) => setIllustrationCM13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationCMnb==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddullis(e)}>Add Ullistration</button>}


                </td> 
              
                </tr>
                <tr>
 
 <td class="align-middle ">
 Connaissance des normes et <br/> certification	 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> <select
class="form-select" 
value={niveauMetier2}
onChange={(e) => setniveauMetier2(e.target.value)}          >
            
            <option className='option-type-profile'>0</option>
            <option className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
 </td>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions <br/>liées: <br/> - au domaine d'activité de l'entreprise<br/> -  au domaine d'activité du poste concerné <br/>- au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle">

 <input type="text" class="form-control" name="IllustrationCNormes" value={IllustrationCNormes}  onChange={(e) => setIllustrationCNormes(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
              {IllustrationCNormesnb==1||IllustrationCNormesnb>1?                <input type="text" class="form-control" name="IllustrationCNormes1" value={IllustrationCNormes1}  onChange={(e) => setIllustrationCNormes1(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==2||IllustrationCNormesnb>2?                <input type="text" class="form-control" name="IllustrationCNormes2" value={IllustrationCNormes2}  onChange={(e) => setIllustrationCNormes2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==3||IllustrationCNormesnb>3?                <input type="text" class="form-control" name="IllustrationCNormes3" value={IllustrationCNormes3}  onChange={(e) => setIllustrationCNormes3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==4||IllustrationCNormesnb>4?                <input type="text" class="form-control" name="IllustrationCNormes4" value={IllustrationCNormes4}  onChange={(e) => setIllustrationCNormes4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==5||IllustrationCNormesnb>5?                <input type="text" class="form-control" name="IllustrationCNormes5" value={IllustrationCNormes5}  onChange={(e) => setIllustrationCNormes5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==6||IllustrationCNormesnb>6?                <input type="text" class="form-control" name="IllustrationCNormes6" value={IllustrationCNormes6}  onChange={(e) => setIllustrationCNormes6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==7||IllustrationCNormesnb>7?                <input type="text" class="form-control" name="IllustrationCNormes7" value={IllustrationCNormes7}  onChange={(e) => setIllustrationCNormes7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==8||IllustrationCNormesnb>8?                <input type="text" class="form-control" name="IllustrationCNormes8" value={IllustrationCNormes8}  onChange={(e) => setIllustrationCNormes8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==9||IllustrationCNormesnb>9?                <input type="text" class="form-control" name="IllustrationCNormes9" value={IllustrationCNormes9}  onChange={(e) => setIllustrationCNormes9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==10||IllustrationCNormesnb>10?                <input type="text" class="form-control" name="IllustrationCNormes10" value={IllustrationCNormes10}  onChange={(e) => setIllustrationCNormes10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==11||IllustrationCNormesnb>11?                <input type="text" class="form-control" name="IllustrationCNormes11" value={IllustrationCNormes11}  onChange={(e) => setIllustrationCNormes11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==12||IllustrationCNormesnb>12?                <input type="text" class="form-control" name="IllustrationCNormes12" value={IllustrationCNormes12}  onChange={(e) => setIllustrationCNormes12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
              {IllustrationCNormesnb==13||IllustrationCNormesnb>13?                <input type="text" class="form-control" name="IllustrationCNormes13" value={IllustrationCNormes13}  onChange={(e) => setIllustrationCNormes13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationCNormesnb==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationCMnb(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br/>et de l'environnement externe		</span>
 </td>
 
 <td class="align-middle text-center">
 <select
class="form-select" 
value={niveauMetier3}
onChange={(e) => setniveauMetier3(e.target.value)}          >
            
            <option className='option-type-profile'>0</option>
            <option className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise: <br/> marché, produits et relations externes
</span>
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationActivite" value={IllustrationActivite}  onChange={(e) => setIllustrationActivite(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationActiviteNB==2||IllustrationActiviteNB>2?                <input type="text" class="form-control" name="IllustrationActivite2" value={IllustrationActivite2}  onChange={(e) => setIllustrationActivite2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==3||IllustrationActiviteNB>3?                <input type="text" class="form-control" name="IllustrationActivite3" value={IllustrationActivite3}  onChange={(e) => setIllustrationActivite3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==4||IllustrationActiviteNB>4?                <input type="text" class="form-control" name="IllustrationActivite4" value={IllustrationActivite4}  onChange={(e) => setIllustrationActivite4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==5||IllustrationActiviteNB>5?                <input type="text" class="form-control" name="IllustrationActivite5" value={IllustrationActivite5}  onChange={(e) => setIllustrationActivite5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==6||IllustrationActiviteNB>6?                <input type="text" class="form-control" name="IllustrationActivite6" value={IllustrationActivite6}  onChange={(e) => setIllustrationActivite6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==7||IllustrationActiviteNB>7?                <input type="text" class="form-control" name="IllustrationActivite7" value={IllustrationActivite7}  onChange={(e) => setIllustrationActivite7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==8||IllustrationActiviteNB>8?                <input type="text" class="form-control" name="IllustrationActivite8" value={IllustrationActivite8}  onChange={(e) => setIllustrationActivite8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==9||IllustrationActiviteNB>9?                <input type="text" class="form-control" name="IllustrationActivite9" value={IllustrationActivite9}  onChange={(e) => setIllustrationActivite9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==10||IllustrationActiviteNB>10?                <input type="text" class="form-control" name="IllustrationActivite10" value={IllustrationActivite10}  onChange={(e) => setIllustrationActivite10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==11||IllustrationActiviteNB>11?                <input type="text" class="form-control" name="IllustrationActivite11" value={IllustrationActivite11}  onChange={(e) => setIllustrationActivite11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==12||IllustrationActiviteNB>12?                <input type="text" class="form-control" name="IllustrationActivite12" value={IllustrationActivite12}  onChange={(e) => setIllustrationActivite12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationActiviteNB==13||IllustrationActiviteNB>13?                <input type="text" class="form-control" name="IllustrationActivite13" value={IllustrationActivite13}  onChange={(e) => setIllustrationActivite13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationActiviteNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationActiviteNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br/>l'environnement  interne</span>
 </td>
 
 <td class="align-middle text-center">
 <select
class="form-select" 
value={niveauMetier4}
onChange={(e) => setniveauMetier4(e.target.value)}          >
            
            <option className='option-type-profile'>0</option>
            <option className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select> </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,<br/>  sa structure,sa culture et son fonctionnement <br/> général
</span>
 </td>
 
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationOrganisation" value={IllustrationOrganisation}  onChange={(e) => setIllustrationOrganisation(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationOrganisationNB==2||IllustrationOrganisationNB>2?                <input type="text" class="form-control" name="IllustrationOrganisation2" value={IllustrationOrganisation2}  onChange={(e) => setIllustrationOrganisation2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==3||IllustrationOrganisationNB>3?                <input type="text" class="form-control" name="IllustrationOrganisation3" value={IllustrationOrganisation3}  onChange={(e) => setIllustrationOrganisation3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==4||IllustrationOrganisationNB>4?                <input type="text" class="form-control" name="IllustrationOrganisation4" value={IllustrationOrganisation4}  onChange={(e) => setIllustrationOrganisation4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==5||IllustrationOrganisationNB>5?                <input type="text" class="form-control" name="IllustrationOrganisation5" value={IllustrationOrganisation5}  onChange={(e) => setIllustrationOrganisation5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==6||IllustrationOrganisationNB>6?                <input type="text" class="form-control" name="IllustrationOrganisation6" value={IllustrationOrganisation6}  onChange={(e) => setIllustrationOrganisation6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==7||IllustrationOrganisationNB>7?                <input type="text" class="form-control" name="IllustrationOrganisation7" value={IllustrationOrganisation7}  onChange={(e) => setIllustrationOrganisation7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==8||IllustrationOrganisationNB>8?                <input type="text" class="form-control" name="IllustrationOrganisation8" value={IllustrationOrganisation8}  onChange={(e) => setIllustrationOrganisation8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==9||IllustrationOrganisationNB>9?                <input type="text" class="form-control" name="IllustrationOrganisation9" value={IllustrationOrganisation9}  onChange={(e) => setIllustrationOrganisation9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==10||IllustrationOrganisationNB>10?                <input type="text" class="form-control" name="IllustrationOrganisation10" value={IllustrationOrganisation10}  onChange={(e) => setIllustrationOrganisation10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==11||IllustrationOrganisationNB>11?                <input type="text" class="form-control" name="IllustrationOrganisation11" value={IllustrationOrganisation11}  onChange={(e) => setIllustrationOrganisation11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==12||IllustrationOrganisationNB>12?                <input type="text" class="form-control" name="IllustrationOrganisation12" value={IllustrationOrganisation12}  onChange={(e) => setIllustrationOrganisation12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrganisationNB==13||IllustrationOrganisationNB>13?                <input type="text" class="form-control" name="IllustrationOrganisation13" value={IllustrationOrganisation13}  onChange={(e) => setIllustrationOrganisation13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationOrganisationNB==13?null:<button className='btn btn-primary'onClick={(e)=>onclickaddIllustrationOrganisationNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> <select
class="form-select" 
value={niveauMetier5}
onChange={(e) => setniveauMetier5(e.target.value)}          >
            
            <option className='option-type-profile'>0</option>
            <option className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des <br/> bases de données liés au domaine d'activité du poste
</span>
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationSIBD" value={IllustrationSIBD}  onChange={(e) => setIllustrationSIBD(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationSIBDNB==2||IllustrationSIBDNB>2?                <input type="text" class="form-control" name="IllustrationSIBD2" value={IllustrationSIBD2}  onChange={(e) => setIllustrationSIBD2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==3||IllustrationSIBDNB>3?                <input type="text" class="form-control" name="IllustrationSIBD3" value={IllustrationSIBD3}  onChange={(e) => setIllustrationSIBD3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==4||IllustrationSIBDNB>4?                <input type="text" class="form-control" name="IllustrationSIBD4" value={IllustrationSIBD4}  onChange={(e) => setIllustrationSIBD4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==5||IllustrationSIBDNB>5?                <input type="text" class="form-control" name="IllustrationSIBD5" value={IllustrationSIBD5}  onChange={(e) => setIllustrationSIBD5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==6||IllustrationSIBDNB>6?                <input type="text" class="form-control" name="IllustrationSIBD6" value={IllustrationSIBD6}  onChange={(e) => setIllustrationSIBD6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==7||IllustrationSIBDNB>7?                <input type="text" class="form-control" name="IllustrationSIBD7" value={IllustrationSIBD7}  onChange={(e) => setIllustrationSIBD7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==8||IllustrationSIBDNB>8?                <input type="text" class="form-control" name="IllustrationSIBD8" value={IllustrationSIBD8}  onChange={(e) => setIllustrationSIBD8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==9||IllustrationSIBDNB>9?                <input type="text" class="form-control" name="IllustrationSIBD9" value={IllustrationSIBD9}  onChange={(e) => setIllustrationSIBD9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==10||IllustrationSIBDNB>10?                <input type="text" class="form-control" name="IllustrationSIBD10" value={IllustrationSIBD10}  onChange={(e) => setIllustrationSIBD10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==11||IllustrationSIBDNB>11?                <input type="text" class="form-control" name="IllustrationSIBD11" value={IllustrationSIBD11}  onChange={(e) => setIllustrationSIBD11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==12||IllustrationSIBDNB>12?                <input type="text" class="form-control" name="IllustrationSIBD12" value={IllustrationSIBD12}  onChange={(e) => setIllustrationSIBD12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSIBDNB==13||IllustrationSIBDNB>13?                <input type="text" class="form-control" name="IllustrationSIBD13" value={IllustrationSIBD13}  onChange={(e) => setIllustrationSIBD13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationSIBDNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationSIBDNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> <select
class="form-select" 
value={niveauMetier6}
onChange={(e) => setniveauMetier6(e.target.value)}          >
            
            <option className='option-type-profile'>0</option>
            <option className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br/>  allemand, italien..) et connaissance des applications<br/>  informatiques de bureautique

</span>
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques" value={IllustrationLinguistiquesBureautiques}  onChange={(e) => setIllustrationLinguistiquesBureautiques(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {inguistiquesBureautiquesNb==2||inguistiquesBureautiquesNb>2?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques2" value={IllustrationLinguistiquesBureautiques2}  onChange={(e) => setIllustrationLinguistiquesBureautiques2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==3||inguistiquesBureautiquesNb>3?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques3" value={IllustrationLinguistiquesBureautiques3}  onChange={(e) => setIllustrationLinguistiquesBureautiques3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==4||inguistiquesBureautiquesNb>4?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques4" value={IllustrationLinguistiquesBureautiques4}  onChange={(e) => setIllustrationLinguistiquesBureautiques4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==5||inguistiquesBureautiquesNb>5?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques5" value={IllustrationLinguistiquesBureautiques5}  onChange={(e) => setIllustrationLinguistiquesBureautiques5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==6||inguistiquesBureautiquesNb>6?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques6" value={IllustrationLinguistiquesBureautiques6}  onChange={(e) => setIllustrationLinguistiquesBureautiques6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==7||inguistiquesBureautiquesNb>7?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques7" value={IllustrationLinguistiquesBureautiques7}  onChange={(e) => setIllustrationLinguistiquesBureautiques7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==8||inguistiquesBureautiquesNb>8?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques8" value={IllustrationLinguistiquesBureautiques8}  onChange={(e) => setIllustrationLinguistiquesBureautiques8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==9||inguistiquesBureautiquesNb>9?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques9" value={IllustrationLinguistiquesBureautiques9}  onChange={(e) => setIllustrationLinguistiquesBureautiques9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==10||inguistiquesBureautiquesNb>10?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques10" value={IllustrationLinguistiquesBureautiques10}  onChange={(e) => setIllustrationLinguistiquesBureautiques10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==11||inguistiquesBureautiquesNb>11?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques11" value={IllustrationLinguistiquesBureautiques11}  onChange={(e) => setIllustrationLinguistiquesBureautiques11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==12||inguistiquesBureautiquesNb>12?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques12" value={IllustrationLinguistiquesBureautiques12}  onChange={(e) => setIllustrationLinguistiquesBureautiques12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {inguistiquesBureautiquesNb==13||inguistiquesBureautiquesNb>13?                <input type="text" class="form-control" name="IllustrationLinguistiquesBureautiques13" value={IllustrationLinguistiquesBureautiques13}  onChange={(e) => setIllustrationLinguistiquesBureautiques13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{inguistiquesBureautiquesNb==13?null:<button className='btn btn-primary'onClick={(e)=>onclickaddinguistiquesBureautiquesNb(e)}>Add Ullistration</button>}

</td>

 </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row fixrowmore">

  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Compétences comportementales
</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Compétences</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Niveau</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ullistration</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
 
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Innovation</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauComportementales1}
            onChange={(e) => setNiveauComportementales1(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                <td class="align-middle">

<input type="text" class="form-control" name="Illustrationinnovation" value={Illustrationinnovation}  onChange={(e) => setIllustrationinnovation(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationinnovationNB==2||IllustrationinnovationNB>2?                <input type="text" class="form-control" name="Illustrationinnovation2" value={Illustrationinnovation2}  onChange={(e) => setIllustrationinnovation2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==3||IllustrationinnovationNB>3?                <input type="text" class="form-control" name="Illustrationinnovation3" value={Illustrationinnovation3}  onChange={(e) => setIllustrationinnovation3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==4||IllustrationinnovationNB>4?                <input type="text" class="form-control" name="Illustrationinnovation4" value={Illustrationinnovation4}  onChange={(e) => setIllustrationinnovation4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==5||IllustrationinnovationNB>5?                <input type="text" class="form-control" name="Illustrationinnovation5" value={Illustrationinnovation5}  onChange={(e) => setIllustrationinnovation5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==6||IllustrationinnovationNB>6?                <input type="text" class="form-control" name="Illustrationinnovation6" value={Illustrationinnovation6}  onChange={(e) => setIllustrationinnovation6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==7||IllustrationinnovationNB>7?                <input type="text" class="form-control" name="Illustrationinnovation7" value={Illustrationinnovation7}  onChange={(e) => setIllustrationinnovation7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==8||IllustrationinnovationNB>8?                <input type="text" class="form-control" name="Illustrationinnovation8" value={Illustrationinnovation8}  onChange={(e) => setIllustrationinnovation8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==9||IllustrationinnovationNB>9?                <input type="text" class="form-control" name="Illustrationinnovation9" value={Illustrationinnovation9}  onChange={(e) => setIllustrationinnovation9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==10||IllustrationinnovationNB>10?                <input type="text" class="form-control" name="Illustrationinnovation10" value={Illustrationinnovation10}  onChange={(e) => setIllustrationinnovation10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==11||IllustrationinnovationNB>11?                <input type="text" class="form-control" name="Illustrationinnovation11" value={Illustrationinnovation11}  onChange={(e) => setIllustrationinnovation11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==12||IllustrationinnovationNB>12?                <input type="text" class="form-control" name="Illustrationinnovation12" value={Illustrationinnovation12}  onChange={(e) => setIllustrationinnovation12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationinnovationNB==13||IllustrationinnovationNB>13?                <input type="text" class="form-control" name="Illustrationinnovation13" value={Illustrationinnovation13}  onChange={(e) => setIllustrationinnovation13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationinnovationNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationinnovationNB(e)}>Add Ullistration</button>}

</td>
              
                </tr>
                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauComportementales2}
            onChange={(e) => setNiveauComportementales2(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>


 </td>
 <td class="align-middle ">

 <input type="text" class="form-control" name="IllustrationAgilit" value={IllustrationAgilit}  onChange={(e) => setIllustrationAgilit(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationAgilitNB==2||IllustrationAgilitNB>2?                <input type="text" class="form-control" name="IllustrationAgilit2" value={IllustrationAgilit2}  onChange={(e) => setIllustrationAgilit2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==3||IllustrationAgilitNB>3?                <input type="text" class="form-control" name="IllustrationAgilit3" value={IllustrationAgilit3}  onChange={(e) => setIllustrationAgilit3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==4||IllustrationAgilitNB>4?                <input type="text" class="form-control" name="IllustrationAgilit4" value={IllustrationAgilit4}  onChange={(e) => setIllustrationAgilit4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==5||IllustrationAgilitNB>5?                <input type="text" class="form-control" name="IllustrationAgilit5" value={IllustrationAgilit5}  onChange={(e) => setIllustrationAgilit5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==6||IllustrationAgilitNB>6?                <input type="text" class="form-control" name="IllustrationAgilit6" value={IllustrationAgilit6}  onChange={(e) => setIllustrationAgilit6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==7||IllustrationAgilitNB>7?                <input type="text" class="form-control" name="IllustrationAgilit7" value={IllustrationAgilit7}  onChange={(e) => setIllustrationAgilit7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==8||IllustrationAgilitNB>8?                <input type="text" class="form-control" name="IllustrationAgilit8" value={IllustrationAgilit8}  onChange={(e) => setIllustrationAgilit8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==9||IllustrationAgilitNB>9?                <input type="text" class="form-control" name="IllustrationAgilit9" value={IllustrationAgilit9}  onChange={(e) => setIllustrationAgilit9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==10||IllustrationAgilitNB>10?                <input type="text" class="form-control" name="IllustrationAgilit10" value={IllustrationAgilit10}  onChange={(e) => setIllustrationAgilit10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==11||IllustrationAgilitNB>11?                <input type="text" class="form-control" name="IllustrationAgilit11" value={IllustrationAgilit11}  onChange={(e) => setIllustrationAgilit11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==12||IllustrationAgilitNB>12?                <input type="text" class="form-control" name="IllustrationAgilit12" value={IllustrationAgilit12}  onChange={(e) => setIllustrationAgilit12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationAgilitNB==13||IllustrationAgilitNB>13?                <input type="text" class="form-control" name="IllustrationAgilit13" value={IllustrationAgilit13}  onChange={(e) => setIllustrationAgilit13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationAgilitNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationAgilitNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauComportementales3}
            onChange={(e) => setNiveauComportementales3(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br/> d’atteindre son plein potentiel.
</span>
 </td>
 <td class="align-middle ">

<input type="text" class="form-control" name="IllustrationForceCollectif" value={IllustrationForceCollectif}  onChange={(e) => setIllustrationForceCollectif(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
            {IllustrationForceCollectifNB==2||IllustrationForceCollectifNB>2?                <input type="text" class="form-control" name="IllustrationForceCollectif2" value={IllustrationForceCollectif2}  onChange={(e) => setIllustrationForceCollectif2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==3||IllustrationForceCollectifNB>3?                <input type="text" class="form-control" name="IllustrationForceCollectif3" value={IllustrationForceCollectif3}  onChange={(e) => setIllustrationForceCollectif3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==4||IllustrationForceCollectifNB>4?                <input type="text" class="form-control" name="IllustrationForceCollectif4" value={IllustrationForceCollectif4}  onChange={(e) => setIllustrationForceCollectif4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==5||IllustrationForceCollectifNB>5?                <input type="text" class="form-control" name="IllustrationForceCollectif5" value={IllustrationForceCollectif5}  onChange={(e) => setIllustrationForceCollectif5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==6||IllustrationForceCollectifNB>6?                <input type="text" class="form-control" name="IllustrationForceCollectif6" value={IllustrationForceCollectif6}  onChange={(e) => setIllustrationForceCollectif6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==7||IllustrationForceCollectifNB>7?                <input type="text" class="form-control" name="IllustrationForceCollectif7" value={IllustrationForceCollectif7}  onChange={(e) => setIllustrationForceCollectif7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==8||IllustrationForceCollectifNB>8?                <input type="text" class="form-control" name="IllustrationForceCollectif8" value={IllustrationForceCollectif8}  onChange={(e) => setIllustrationForceCollectif8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==9||IllustrationForceCollectifNB>9?                <input type="text" class="form-control" name="IllustrationForceCollectif9" value={IllustrationForceCollectif9}  onChange={(e) => setIllustrationForceCollectif9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==10||IllustrationForceCollectifNB>10?                <input type="text" class="form-control" name="IllustrationForceCollectif10" value={IllustrationForceCollectif10}  onChange={(e) => setIllustrationForceCollectif10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==11||IllustrationForceCollectifNB>11?                <input type="text" class="form-control" name="IllustrationForceCollectif11" value={IllustrationForceCollectif11}  onChange={(e) => setIllustrationForceCollectif11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==12||IllustrationForceCollectifNB>12?                <input type="text" class="form-control" name="IllustrationForceCollectif12" value={IllustrationForceCollectif12}  onChange={(e) => setIllustrationForceCollectif12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationForceCollectifNB==13||IllustrationForceCollectifNB>13?                <input type="text" class="form-control" name="IllustrationForceCollectif13" value={IllustrationForceCollectif13}  onChange={(e) => setIllustrationForceCollectif13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationForceCollectifNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationForceCollectifNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauComportementales4}
            onChange={(e) => setNiveauComportementales4(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 
 <td class="align-middle ">

<input type="text" class="form-control" name="IllustrationRespectEngagement" value={IllustrationRespectEngagement}  onChange={(e) => setIllustrationRespectEngagement(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
            {IllustrationRespectEngagementNB==2||IllustrationRespectEngagementNB>2?                <input type="text" class="form-control" name="IllustrationRespectEngagement2" value={IllustrationRespectEngagement2}  onChange={(e) => setIllustrationRespectEngagement2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==3||IllustrationRespectEngagementNB>3?                <input type="text" class="form-control" name="IllustrationRespectEngagement3" value={IllustrationRespectEngagement3}  onChange={(e) => setIllustrationRespectEngagement3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==4||IllustrationRespectEngagementNB>4?                <input type="text" class="form-control" name="IllustrationRespectEngagement4" value={IllustrationRespectEngagement4}  onChange={(e) => setIllustrationRespectEngagement4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==5||IllustrationRespectEngagementNB>5?                <input type="text" class="form-control" name="IllustrationRespectEngagement5" value={IllustrationRespectEngagement5}  onChange={(e) => setIllustrationRespectEngagement5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==6||IllustrationRespectEngagementNB>6?                <input type="text" class="form-control" name="IllustrationRespectEngagement6" value={IllustrationRespectEngagement6}  onChange={(e) => setIllustrationRespectEngagement6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==7||IllustrationRespectEngagementNB>7?                <input type="text" class="form-control" name="IllustrationRespectEngagement7" value={IllustrationRespectEngagement7}  onChange={(e) => setIllustrationRespectEngagement7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==8||IllustrationRespectEngagementNB>8?                <input type="text" class="form-control" name="IllustrationRespectEngagement8" value={IllustrationRespectEngagement8}  onChange={(e) => setIllustrationRespectEngagement8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==9||IllustrationRespectEngagementNB>9?                <input type="text" class="form-control" name="IllustrationRespectEngagement9" value={IllustrationRespectEngagement9}  onChange={(e) => setIllustrationRespectEngagement9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==10||IllustrationRespectEngagementNB>10?                <input type="text" class="form-control" name="IllustrationRespectEngagement10" value={IllustrationRespectEngagement10}  onChange={(e) => setIllustrationRespectEngagement10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==11||IllustrationRespectEngagementNB>11?                <input type="text" class="form-control" name="IllustrationRespectEngagement11" value={IllustrationRespectEngagement11}  onChange={(e) => setIllustrationRespectEngagement11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==12||IllustrationRespectEngagementNB>12?                <input type="text" class="form-control" name="IllustrationRespectEngagement12" value={IllustrationRespectEngagement12}  onChange={(e) => setIllustrationRespectEngagement12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
            {IllustrationRespectEngagementNB==13||IllustrationRespectEngagementNB>13?                <input type="text" class="form-control" name="IllustrationRespectEngagement13" value={IllustrationRespectEngagement13}  onChange={(e) => setIllustrationRespectEngagement13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationForceCollectifNB==13?null:<button className='btn btn-primary'onClick={(e)=>onclickaddIllustrationRespectEngagement(e)}>Add Ullistration</button>}

</td>
 </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row fixrowmore">

  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Compétences managériales</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Compétences</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Niveau</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
 
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">Orientation stratégique	</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials1}
            onChange={(e) => setNiveauManagerials1(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
 
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>

                <td class="align-middle">

<input type="text" class="form-control" name="IllustrationOrientationstrategique" value={IllustrationOrientationstrategique}  onChange={(e) => setIllustrationOrientationstrategique(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationOrientationstrategiqueNB==2||IllustrationOrientationstrategiqueNB>2?                <input type="text" class="form-control" name="IllustrationOrientationstrategique2" value={IllustrationOrientationstrategique2}  onChange={(e) => setIllustrationOrientationstrategique2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==3||IllustrationOrientationstrategiqueNB>3?                <input type="text" class="form-control" name="IllustrationOrientationstrategique3" value={IllustrationOrientationstrategique3}  onChange={(e) => setIllustrationOrientationstrategique3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==4||IllustrationOrientationstrategiqueNB>4?                <input type="text" class="form-control" name="IllustrationOrientationstrategique4" value={IllustrationOrientationstrategique4}  onChange={(e) => setIllustrationOrientationstrategique4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==5||IllustrationOrientationstrategiqueNB>5?                <input type="text" class="form-control" name="IllustrationOrientationstrategique5" value={IllustrationOrientationstrategique5}  onChange={(e) => setIllustrationOrientationstrategique5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==6||IllustrationOrientationstrategiqueNB>6?                <input type="text" class="form-control" name="IllustrationOrientationstrategique6" value={IllustrationOrientationstrategique6}  onChange={(e) => setIllustrationOrientationstrategique6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==7||IllustrationOrientationstrategiqueNB>7?                <input type="text" class="form-control" name="IllustrationOrientationstrategique7" value={IllustrationOrientationstrategique7}  onChange={(e) => setIllustrationOrientationstrategique7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==8||IllustrationOrientationstrategiqueNB>8?                <input type="text" class="form-control" name="IllustrationOrientationstrategique8" value={IllustrationOrientationstrategique8}  onChange={(e) => setIllustrationOrientationstrategique8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==9||IllustrationOrientationstrategiqueNB>9?                <input type="text" class="form-control" name="IllustrationOrientationstrategique9" value={IllustrationOrientationstrategique9}  onChange={(e) => setIllustrationOrientationstrategique9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==10||IllustrationOrientationstrategiqueNB>10?                <input type="text" class="form-control" name="IllustrationOrientationstrategique10" value={IllustrationOrientationstrategique10}  onChange={(e) => setIllustrationOrientationstrategique10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==11||IllustrationOrientationstrategiqueNB>11?                <input type="text" class="form-control" name="IllustrationOrientationstrategique11" value={IllustrationOrientationstrategique11}  onChange={(e) => setIllustrationOrientationstrategique11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==12||IllustrationOrientationstrategiqueNB>12?                <input type="text" class="form-control" name="IllustrationOrientationstrategique12" value={IllustrationOrientationstrategique12}  onChange={(e) => setIllustrationOrientationstrategique12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationOrientationstrategiqueNB==13||IllustrationOrientationstrategiqueNB>13?                <input type="text" class="form-control" name="IllustrationOrientationstrategique13" value={IllustrationOrientationstrategique13}  onChange={(e) => setIllustrationOrientationstrategique13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationOrientationstrategiqueNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationOrientationstrategiquenb(e)}>Add Ullistration</button>}

</td>
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials2}
            onChange={(e) => setNiveauManagerials2(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td>
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>

  
 
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationSensdesaffaires" value={IllustrationSensdesaffaires}  onChange={(e) => setIllustrationSensdesaffaires(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationSensdesaffairesNB==2||IllustrationSensdesaffairesNB>2?                <input type="text" class="form-control" name="IllustrationSensdesaffaires2" value={IllustrationSensdesaffaires2}  onChange={(e) => setIllustrationSensdesaffaires2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==3||IllustrationSensdesaffairesNB>3?                <input type="text" class="form-control" name="IllustrationSensdesaffaires3" value={IllustrationSensdesaffaires3}  onChange={(e) => setIllustrationSensdesaffaires3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==4||IllustrationSensdesaffairesNB>4?                <input type="text" class="form-control" name="IllustrationSensdesaffaires4" value={IllustrationSensdesaffaires4}  onChange={(e) => setIllustrationSensdesaffaires4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==5||IllustrationSensdesaffairesNB>5?                <input type="text" class="form-control" name="IllustrationSensdesaffaires5" value={IllustrationSensdesaffaires5}  onChange={(e) => setIllustrationSensdesaffaires5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==6||IllustrationSensdesaffairesNB>6?                <input type="text" class="form-control" name="IllustrationSensdesaffaires6" value={IllustrationSensdesaffaires6}  onChange={(e) => setIllustrationSensdesaffaires6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==7||IllustrationSensdesaffairesNB>7?                <input type="text" class="form-control" name="IllustrationSensdesaffaires7" value={IllustrationSensdesaffaires7}  onChange={(e) => setIllustrationSensdesaffaires7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==8||IllustrationSensdesaffairesNB>8?                <input type="text" class="form-control" name="IllustrationSensdesaffaires8" value={IllustrationSensdesaffaires8}  onChange={(e) => setIllustrationSensdesaffaires8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==9||IllustrationSensdesaffairesNB>9?                <input type="text" class="form-control" name="IllustrationSensdesaffaires9" value={IllustrationSensdesaffaires9}  onChange={(e) => setIllustrationSensdesaffaires9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==10||IllustrationSensdesaffairesNB>10?                <input type="text" class="form-control" name="IllustrationSensdesaffaires10" value={IllustrationSensdesaffaires10}  onChange={(e) => setIllustrationSensdesaffaires10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==11||IllustrationSensdesaffairesNB>11?                <input type="text" class="form-control" name="IllustrationSensdesaffaires11" value={IllustrationSensdesaffaires11}  onChange={(e) => setIllustrationSensdesaffaires11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==12||IllustrationSensdesaffairesNB>12?                <input type="text" class="form-control" name="IllustrationSensdesaffaires12" value={IllustrationSensdesaffaires12}  onChange={(e) => setIllustrationSensdesaffaires12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationSensdesaffairesNB==13||IllustrationSensdesaffairesNB>13?                <input type="text" class="form-control" name="IllustrationSensdesaffaires13" value={IllustrationSensdesaffaires13}  onChange={(e) => setIllustrationSensdesaffaires13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationSensdesaffairesNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationSensdesaffairesNB(e)}>Add Ullistration</button>}

</td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials3}
            onChange={(e) => setNiveauManagerials3(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>

 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationLeadership" value={IllustrationLeadership}  onChange={(e) => setIllustrationLeadership(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationLeadershipnb==2||IllustrationLeadershipnb>2?                <input type="text" class="form-control" name="IllustrationLeadership2" value={IllustrationLeadership2}  onChange={(e) => setIllustrationLeadership2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==3||IllustrationLeadershipnb>3?                <input type="text" class="form-control" name="IllustrationLeadership3" value={IllustrationLeadership3}  onChange={(e) => setIllustrationLeadership3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==4||IllustrationLeadershipnb>4?                <input type="text" class="form-control" name="IllustrationLeadership4" value={IllustrationLeadership4}  onChange={(e) => setIllustrationLeadership4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==5||IllustrationLeadershipnb>5?                <input type="text" class="form-control" name="IllustrationLeadership5" value={IllustrationLeadership5}  onChange={(e) => setIllustrationLeadership5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==6||IllustrationLeadershipnb>6?                <input type="text" class="form-control" name="IllustrationLeadership6" value={IllustrationLeadership6}  onChange={(e) => setIllustrationLeadership6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==7||IllustrationLeadershipnb>7?                <input type="text" class="form-control" name="IllustrationLeadership7" value={IllustrationLeadership7}  onChange={(e) => setIllustrationLeadership7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==8||IllustrationLeadershipnb>8?                <input type="text" class="form-control" name="IllustrationLeadership8" value={IllustrationLeadership8}  onChange={(e) => setIllustrationLeadership8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==9||IllustrationLeadershipnb>9?                <input type="text" class="form-control" name="IllustrationLeadership9" value={IllustrationLeadership9}  onChange={(e) => setIllustrationLeadership9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==10||IllustrationLeadershipnb>10?                <input type="text" class="form-control" name="IllustrationLeadership10" value={IllustrationLeadership10}  onChange={(e) => setIllustrationLeadership10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==11||IllustrationLeadershipnb>11?                <input type="text" class="form-control" name="IllustrationLeadership11" value={IllustrationLeadership11}  onChange={(e) => setIllustrationLeadership11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==12||IllustrationLeadershipnb>12?                <input type="text" class="form-control" name="IllustrationLeadership12" value={IllustrationLeadership12}  onChange={(e) => setIllustrationLeadership12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationLeadershipnb==13||IllustrationLeadershipnb>13?                <input type="text" class="form-control" name="IllustrationLeadership13" value={IllustrationLeadership13}  onChange={(e) => setIllustrationLeadership13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationLeadershipnb==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationLeadershipnb(e)}>Add Ullistration</button>}

</td>
 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials4}
            onChange={(e) => setNiveauManagerials4(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à persuader, convaincre, impressionner et faire des compromis avec les autres afin de les fédérer vers ses idées et points de vue	</span>
 </td>


 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion opérationnelle	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials5}
            onChange={(e) => setNiveauManagerials5(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationGestionOperationnelle" value={IllustrationGestionOperationnelle}  onChange={(e) => setIllustrationGestionOperationnelle(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationGestionOperationnelleNB==2||IllustrationGestionOperationnelleNB>2?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle2" value={IllustrationGestionOperationnelle2}  onChange={(e) => setIllustrationGestionOperationnelle2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==3||IllustrationGestionOperationnelleNB>3?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle3" value={IllustrationGestionOperationnelle3}  onChange={(e) => setIllustrationGestionOperationnelle3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==4||IllustrationGestionOperationnelleNB>4?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle4" value={IllustrationGestionOperationnelle4}  onChange={(e) => setIllustrationGestionOperationnelle4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==5||IllustrationGestionOperationnelleNB>5?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle5" value={IllustrationGestionOperationnelle5}  onChange={(e) => setIllustrationGestionOperationnelle5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==6||IllustrationGestionOperationnelleNB>6?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle6" value={IllustrationGestionOperationnelle6}  onChange={(e) => setIllustrationGestionOperationnelle6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==7||IllustrationGestionOperationnelleNB>7?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle7" value={IllustrationGestionOperationnelle7}  onChange={(e) => setIllustrationGestionOperationnelle7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==8||IllustrationGestionOperationnelleNB>8?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle8" value={IllustrationGestionOperationnelle8}  onChange={(e) => setIllustrationGestionOperationnelle8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==9||IllustrationGestionOperationnelleNB>9?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle9" value={IllustrationGestionOperationnelle9}  onChange={(e) => setIllustrationGestionOperationnelle9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==10||IllustrationGestionOperationnelleNB>10?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle10" value={IllustrationGestionOperationnelle10}  onChange={(e) => setIllustrationGestionOperationnelle10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==11||IllustrationGestionOperationnelleNB>11?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle11" value={IllustrationGestionOperationnelle11}  onChange={(e) => setIllustrationGestionOperationnelle11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==12||IllustrationGestionOperationnelleNB>12?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle12" value={IllustrationGestionOperationnelle12}  onChange={(e) => setIllustrationGestionOperationnelle12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionOperationnelleNB==13||IllustrationGestionOperationnelleNB>13?                <input type="text" class="form-control" name="IllustrationGestionOperationnelle13" value={IllustrationGestionOperationnelle13}  onChange={(e) => setIllustrationGestionOperationnelle13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationGestionOperationnelleNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIIllustrationGestionOperationnelleNB(e)}>Add Ullistration</button>}

</td>

 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='Role'
            value={NiveauManagerials6}
            onChange={(e) => setNiveauManagerials6(e.target.value)}
            
          >
            
            <option className='option-type-profile'>0</option>
            <option  className='option-type-profile'>1</option>
            <option className='option-type-profile'>2</option>
            <option className='option-type-profile'>3</option>
            <option className='option-type-profile'>4</option>
          </select></span>
                </td> 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>
 <td class="align-middle">

<input type="text" class="form-control" name="IllustrationGestionEquipe" value={IllustrationGestionEquipe}  onChange={(e) => setIllustrationGestionEquipe(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>
             {IllustrationGestionEquipeNB==2||IllustrationGestionEquipeNB>2?                <input type="text" class="form-control" name="IllustrationGestionEquipe2" value={IllustrationGestionEquipe2}  onChange={(e) => setIllustrationGestionEquipe2(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==3||IllustrationGestionEquipeNB>3?                <input type="text" class="form-control" name="IllustrationGestionEquipe3" value={IllustrationGestionEquipe3}  onChange={(e) => setIllustrationGestionEquipe3(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==4||IllustrationGestionEquipeNB>4?                <input type="text" class="form-control" name="IllustrationGestionEquipe4" value={IllustrationGestionEquipe4}  onChange={(e) => setIllustrationGestionEquipe4(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==5||IllustrationGestionEquipeNB>5?                <input type="text" class="form-control" name="IllustrationGestionEquipe5" value={IllustrationGestionEquipe5}  onChange={(e) => setIllustrationGestionEquipe5(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==6||IllustrationGestionEquipeNB>6?                <input type="text" class="form-control" name="IllustrationGestionEquipe6" value={IllustrationGestionEquipe6}  onChange={(e) => setIllustrationGestionEquipe6(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==7||IllustrationGestionEquipeNB>7?                <input type="text" class="form-control" name="IllustrationGestionEquipe7" value={IllustrationGestionEquipe7}  onChange={(e) => setIllustrationGestionEquipe7(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==8||IllustrationGestionEquipeNB>8?                <input type="text" class="form-control" name="IllustrationGestionEquipe8" value={IllustrationGestionEquipe8}  onChange={(e) => setIllustrationGestionEquipe8(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==9||IllustrationGestionEquipeNB>9?                <input type="text" class="form-control" name="IllustrationGestionEquipe9" value={IllustrationGestionEquipe9}  onChange={(e) => setIllustrationGestionEquipe9(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==10||IllustrationGestionEquipeNB>10?                <input type="text" class="form-control" name="IllustrationGestionEquipe10" value={IllustrationGestionEquipe10}  onChange={(e) => setIllustrationGestionEquipe10(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==11||IllustrationGestionEquipeNB>11?                <input type="text" class="form-control" name="IllustrationGestionEquipe11" value={IllustrationGestionEquipe11}  onChange={(e) => setIllustrationGestionEquipe11(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==12||IllustrationGestionEquipeNB>12?                <input type="text" class="form-control" name="IllustrationGestionEquipe12" value={IllustrationGestionEquipe12}  onChange={(e) => setIllustrationGestionEquipe12(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}
             {IllustrationGestionEquipeNB==13||IllustrationGestionEquipeNB>13?                <input type="text" class="form-control" name="IllustrationGestionEquipe13" value={IllustrationGestionEquipe13}  onChange={(e) => setIllustrationGestionEquipe13(e.target.value)} id="formGroupExampleInput" placeholder="Ullistration"/>:null}

{IllustrationGestionEquipeNB==13?null:<button className='btn btn-primary' onClick={(e)=>onclickaddIllustrationGestionEquipeNB(e)}>Add Ullistration</button>}

</td>

 </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
 <button className='btn btn-primary' onClick={(e)=>onSubmitfiche(e)}>Add New Fiche</button>
<footer class="footer pt-3  ">
  <div class="container-fluid">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6 mb-lg-0 mb-4">
        <div class="copyright text-center text-sm text-muted text-lg-start">
          © <script>
            document.write(new Date().getFullYear())
          </script>,
          made with <i class="fa fa-heart"></i> by
          <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>
          for a better web.
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div></form>
</div>
</div> </Fragment>  )
}
export default  connect(null, { AddNewFiche,addUComportementales, addUmanagerials, AdduTECK}) (AddCompetance)
