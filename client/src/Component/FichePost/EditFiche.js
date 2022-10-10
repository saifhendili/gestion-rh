import React,{useState,useEffect,Fragment} from 'react'
import {  AddRattachements, EditRatachment, getFiche,editmyFournisseur,EditClient,EditAutreResponsabilite, EditMyFiche,  editmyCompetencesTransverses, editmyDimensionnementDuPoste, editIndicateursDePerformance} from '../../actions/fiche'
import {   AddFournisseursDuPoste, AddClientsDuPoste, AddAutreResponsabilite,AddCompetencesTransverses, AddDimensionnementDuPoste, AddIndicateursDePerformance,} from '../../actions/fichev'
import Aside from '../Layout/Aside';
import { useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
function EditFiche({editmyCompetencesTransverses,editmyDimensionnementDuPoste,editIndicateursDePerformance,  AddCompetencesTransverses,AddDimensionnementDuPoste,AddIndicateursDePerformance,  getFiche,EditMyFiche,AddClientsDuPoste ,AddAutreResponsabilite,EditRatachment,AddRattachements,editmyFournisseur,AddFournisseursDuPoste,EditClient,EditAutreResponsabilite,fiche:{fiche,loading}}) {
    const [Description, setdescription] = useState();
    const [AutreAppelations, setAutreAppelations] = useState('');
    const [RattachementsHierarchique, setRattachementsHierarchique] = useState('');
    const [RattachementsFonctionnel, setRattachementsFonctionnel] = useState('');
    const [editRatachment, seteditRatachment] = useState(false);
    const [editFournisseur, seteditFournisseur] = useState(false);
    const [editClientrposte, seteditClientrposte] = useState(false);
    const [editautreres, seteditautreres] = useState(false);
    const [editCompetencesTransverses, seteditCompetencesTransverses] = useState(false);
    const [CompetencesTransverses, setCompetencesTransverses] = useState('');
    const [NiveauTransverses, setNiveauTransverses] = useState('');
    const [DescriptionTransverses, setDescriptionTransverses] = useState('');
    
    const [editDimenssion, seteditDimenssion] = useState(false);
    const [NatureDeIndicateur, setNatureDeIndicateur] = useState('');
    const [IndicateurDeDimensionnement, setIndicateurDeDimensionnement] = useState('');
    const [ElementsChiffres, setElementsChiffres] = useState('');
    const [CommentairesDimensionnement, setCommentairesDimensionnement] = useState('');

    const [editindicateur, seteditindicateur] = useState(false);
    const [IndicateursDePerformance, setIndicateursDePerformance] = useState('');
    const [ElementsDeCalcul, setElementsDeCalcul] = useState('');
    const [Commentaires, setCommentaires] = useState('');

    const [niveauMetier1, setniveauMetier1] = useState();
    const [niveauMetier2, setniveauMetier2] = useState();
    const [niveauMetier3, setniveauMetier3] = useState();
    const [niveauMetier4, setniveauMetier4] = useState();
    const [niveauMetier5, setniveauMetier5] = useState();
    const [niveauMetier6, setniveauMetier6] = useState();
    const [NiveauComportementales1, setNiveauComportementales1] = useState();
    const [NiveauComportementales2, setNiveauComportementales2] = useState();
    const [NiveauComportementales3, setNiveauComportementales3] = useState();
    const [NiveauComportementales4, setNiveauComportementales4] = useState();
    const [NiveauManagerials1, setNiveauManagerials1] = useState();
    const [NiveauManagerials2, setNiveauManagerials2] = useState();
    const [NiveauManagerials3, setNiveauManagerials3] = useState();
    const [NiveauManagerials4, setNiveauManagerials4] = useState();
    const [NiveauManagerials5, setNiveauManagerials5] = useState();
    const [NiveauManagerials6, setNiveauManagerials6] = useState();
    const [Execution, setExecution] = useState();
    const [Expertise, setExpertise] = useState();
    const [Operationnel, setOperationnel] = useState();
    const [decisions, setdecisions] = useState();
    const [Production, setProduction] = useState();
    const [myclass, setmyclass] = useState();
    

    
    const [Fournisseur, setFournisseur] = useState('');
    const [Inputs, setInputs] = useState('');
     const [Client, setClient] = useState('');
    const [Outputs, setOutputs] = useState('');
    const [responsability, setresponsability] = useState('');
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
    const [IllustrationAgilitNB, setIllustrationAgilitNB] = useState();
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
    
    
    const [EtatDeFiche, setEtatDeFiche] = useState('');

    const [searchParams] = useSearchParams();
    useEffect (() => {
      getFiche(searchParams.get("id")); 
      
    });
   
   
    const submitupdate =(e)=>{
      e.preventDefault();
      EditMyFiche(searchParams.get("id"),{RattachementsHierarchique,RattachementsFonctionnel,Description,AutreAppelations,EtatDeFiche,niveauMetier1,niveauMetier2,niveauMetier3,niveauMetier4,niveauMetier5,niveauMetier6,NiveauComportementales1,NiveauComportementales2,NiveauComportementales3,NiveauComportementales4,NiveauManagerials1,NiveauManagerials2,NiveauManagerials3,NiveauManagerials4,NiveauManagerials5,NiveauManagerials6,Execution,Expertise,Operationnel,decisions,Production,myclass, IllustrationCM,
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
        IllustrationLinguistiquesBureautiques13, IllustrationOrientationstrategique,
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
        IllustrationGestionEquipe13,Illustrationinnovation,
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
        IllustrationRespectEngagement13})    }

    const edittransvefunction =(e,x)=>{
      e.preventDefault();
      editmyCompetencesTransverses(searchParams.get("id"),x,{CompetencesTransverses ,NiveauTransverses,DescriptionTransverses})
      seteditCompetencesTransverses(false)
    }
    const editDimensionnementfunction =(e,x)=>{
      e.preventDefault();
      editmyDimensionnementDuPoste(searchParams.get("id"),x,{NatureDeIndicateur ,IndicateurDeDimensionnement,ElementsChiffres,CommentairesDimensionnement})
      seteditDimenssion(false)
    }
    const editIndicateursfunction =(e,x)=>{
      e.preventDefault();
      editIndicateursDePerformance(searchParams.get("id"),x,{IndicateursDePerformance ,ElementsDeCalcul,Commentaires})
      seteditindicateur(false)
    }
        
const editClientfunction =(e,x)=>{
  e.preventDefault();
  EditClient(searchParams.get("id"),x,{Client,Outputs})
  seteditFournisseur(false)
}
const editFournisseurfunction =(e,x)=>{
  e.preventDefault();
  editmyFournisseur(searchParams.get("id"),x,{Fournisseur,Inputs})
  seteditFournisseur(false)
}

const editRespfunction =(e,x)=>{
  e.preventDefault();
  EditAutreResponsabilite(searchParams.get("id"),x,{responsability})
  seteditautreres(false)
}
      return loading || fiche === null? (
        <Spinner />
      ) : (
        <Fragment>
 <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0">
  <h5>Description:

  </h5>
<input type="text" class="form-control" value={Description} name="Description" onChange={(e) => setdescription(e.target.value)} placeholder={fiche.Description}/> 
<h5>Classe:

</h5>
<input type="text" class="form-control" value={myclass} name="myclass" onChange={(e) => setmyclass(e.target.value)} placeholder={fiche.myclass}/> 

</div>

  </div>


  </div>
</div>
<div class="row fixrowmore">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Autres appellations</h6>
        
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Autres appellations</th>
               
              </tr>
            </thead>
            <tbody>
              
              
<input type="text" class="form-control" value={AutreAppelations} name="AutreAppelations"placeholder={fiche.AutreAppelations} onChange={(e) => setAutreAppelations(e.target.value)}/> 

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
        <h6>Rattachements</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rattachement<br/> hierarchique</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rattachement <br/> fonctionnel</th>
                {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">+</th> */}
               
                <th class="text-secondary opacity-7">+</th>
              </tr>
            </thead>
            <tbody>
         
     <div class="form-group ">
<label for="formGroupExampleInput">Rattachements Hierarchique</label>
<input type="text" class="form-control" value={RattachementsHierarchique} name="RattachementsHierarchique" onChange={(e) => setRattachementsHierarchique(e.target.value)} placeholder={fiche.RattachementsHierarchique}/> 

</div>
<div class="form-group">
<label for="formGroupExampleInput2">Rattachements Fonctionnel</label>
<input type="text" class="form-control" value={RattachementsFonctionnel} name="RattachementsFonctionnel" onChange={(e) => setRattachementsFonctionnel(e.target.value)} placeholder={fiche.RattachementsFonctionnel}/> 

</div>
                
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
        <h6>Etat de la fiche</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Etat de la fiche</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
<input type="text" class="form-control" value={EtatDeFiche} name="EtatDeFiche" onChange={(e) => setEtatDeFiche(e.target.value)} placeholder={fiche.EtatDeFiche}/> 


            </tbody>
          </table>
      
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row fixrowmore " >
<div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Founisseurs du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fournisseurs</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Inputs</th>
                <th class="text-secondary opacity-7">+</th>

                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {fiche.FournisseursDuPoste.map((x,i)=>
              !editFournisseur?
                 <tr key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Fournisseur}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Inputs}</span>
                 </td>
                 <td>
                  <button onClick={()=>seteditFournisseur(true)} className='btn btn-secondary'>edit</button>
               
                  </td> 
               </tr>:        <tr key={i} >
                
             
                <td class="align-middle  ">
                <input type='text' name='Fournisseur' class="text-secondary text-xs font-weight-bold" placeholder={x.Fournisseur} onChange={(e) => setFournisseur(e.target.value)}/>
                </td>
                <td class="align-middle ">
                <input type='text'name="Inputs" class="text-secondary text-xs font-weight-bold"placeholder={x.Inputs} onChange={(e) => setInputs(e.target.value)}/>
                </td>
                <td>
                <button onClick={(e)=>editFournisseurfunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
              
                 </td> 
              </tr>
                )}
             
        
 
            </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">Fournisseur</label>
<input type="text" class="form-control" name="Fournisseur" onChange={(e) => setFournisseur(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Inputs</label>
<input type="text" class="form-control" name="Inputs" onChange={(e) => setInputs(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<button onClick={(e)=>AddFournisseursDuPoste(searchParams.get("id"),{Fournisseur ,Inputs })} class="btn btn-primary" type="submit">Add</button>

        </div>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Client du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Client</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
                <th class="text-secondary opacity-7">+</th>

                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {fiche.ClientsDuPoste.map((x,i)=>
              !editClientrposte?
                 <tr key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Client}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Outputs}</span>
                 </td>
                 <td>
                  <button onClick={()=>seteditClientrposte(true)} className='btn btn-secondary'>edit</button>
               
                  </td> 
               </tr>:        <tr key={i} >
                
             
                <td class="align-middle  ">
                <input type='text' name='Client' class="text-secondary text-xs font-weight-bold"placeholder={x.Client} onChange={(e) => setClient(e.target.value)}/>
                </td>
                <td class="align-middle ">
                <input type='text'name="Outputs" class="text-secondary text-xs font-weight-bold"placeholder={x.Outputs} onChange={(e) => setOutputs(e.target.value)}/>
                </td>
                <td>
                <button onClick={(e)=>editClientfunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
              
                 </td> 
              </tr>
                )}
             
        
 
            </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">Client</label>
<input type="text" class="form-control" name="Client" onChange={(e) => setClient(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Outputs</label>
<input type="text" class="form-control" name="Outputs" onChange={(e) => setOutputs(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<button onClick={(e)=>AddClientsDuPoste(searchParams.get("id"),{Client ,Outputs })} class="btn btn-primary" type="submit">Add</button>

        </div>
      </div>
    </div>
  </div>
</div>
<div class="row fixrowmore">

  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Autre responsabilités</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Autre responsabilités</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {fiche.AutreResponsabilite.map((x,i)=>
              !editautreres?
                 <tr key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{x.responsability}</span>
                 </td>
                 <td>
                  <button onClick={()=>seteditautreres(true)} className='btn btn-secondary'>edit</button>
               
                  </td> 
               </tr>:        <tr key={i} >
                
             
                <td class="align-middle  ">
                <input type='text' name='responsability' class="text-secondary text-xs font-weight-bold"placeholder={x.responsability} onChange={(e) => setresponsability(e.target.value)}/>
                </td>
                <td>
                <button onClick={(e)=>editRespfunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
        
                 </td> 
              </tr>
                )}
             
        
 
            </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">responsability</label>
<input type="text" class="form-control" name="responsability" onChange={(e) => setresponsability(e.target.value)} id="formGroupExampleInput" placeholder="responsability"/>
</div>
<button onClick={(e)=>AddAutreResponsabilite(searchParams.get("id"),{responsability })} class="btn btn-primary" type="submit">Add</button>

        </div>
      </div>
    </div>
  </div>
 
</div>
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
 
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaissances Métier	</span>
                </td>
                
                {/* <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                {fiche.niveauMetier1}
                </span>
                </td> */}

                        <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier1'
            value={niveauMetier1}
            onChange={(e) => setniveauMetier1(e.target.value)}
            
          >
            {fiche.niveauMetier1==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.niveauMetier1==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.niveauMetier1==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.niveauMetier1==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.niveauMetier1==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>

                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus <br/> de son métier
</span>
                </td>
                <td class="align-middle fixlistill">    
{fiche.IllustrationCM?<input onChange={(e)=>setIllustrationCM(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM} />:null} 
{fiche.IllustrationCM2?<input onChange={(e)=>setIllustrationCM2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM2} />:null} 
{fiche.IllustrationCM3?<input onChange={(e)=>setIllustrationCM3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationCM3} />:null} 
{fiche.IllustrationCM4?<input onChange={(e)=>setIllustrationCM4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM4} ></input> :null} 
{fiche.IllustrationCM5?<input onChange={(e)=>setIllustrationCM5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM5} />:null} 
{fiche.IllustrationCM6?<input onChange={(e)=>setIllustrationCM6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM6}/>:null} 
{fiche.IllustrationCM7?<input onChange={(e)=>setIllustrationCM7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM7} />:null} 
{fiche.IllustrationCM8?<input onChange={(e)=>setIllustrationCM8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM8} />:null} 
{fiche.IllustrationCM9?<input onChange={(e)=>setIllustrationCM9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM9} />:null} 
{fiche.IllustrationCM10?<input onChange={(e)=>setIllustrationCM10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM10} />:null} 
{fiche.IllustrationCM11?<input onChange={(e)=>setIllustrationCM11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM11} />:null} 
{fiche.IllustrationCM12?<input onChange={(e)=>setIllustrationCM12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM12} />:null} 
{fiche.IllustrationCM13?<input onChange={(e)=>setIllustrationCM13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCM13} />:null} 
</td>
              
                </tr>
                <tr>
 
 <td class="align-middle ">
 Connaissance des normes et <br/> certification	 </td>
 
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier2'
            value={niveauMetier2}
            onChange={(e) => setniveauMetier2(e.target.value)}
            
          >
            {fiche.niveauMetier2==0?  <option className='option-type-profile' selected>0</option>:  <option className='option-type-profile'>0</option>}  
            {fiche.niveauMetier2==1?  <option className='option-type-profile' selected>1</option>:  <option className='option-type-profile'>1</option>}  
            {fiche.niveauMetier2==2?  <option className='option-type-profile' selected>2</option>:  <option className='option-type-profile'>2</option>}  
            {fiche.niveauMetier2==3?  <option className='option-type-profile' selected>3</option>:  <option className='option-type-profile'>3</option>}  
            {fiche.niveauMetier2==4?  <option className='option-type-profile' selected>4</option>:  <option className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions <br/>liées: <br/> - au domaine d'activité de l'entreprise<br/> -  au domaine d'activité du poste concerné <br/>- au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle fixlistill">    
{fiche.IllustrationCNormes?<input onChange={(e)=>setIllustrationCNormes(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes} />:null} 
{fiche.IllustrationCNormes2?<input onChange={(e)=>setIllustrationCNormes2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes2} />:null} 
{fiche.IllustrationCNormes3?<input onChange={(e)=>setIllustrationCNormes3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationCNormes3} />:null} 
{fiche.IllustrationCNormes4?<input onChange={(e)=>setIllustrationCNormes4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes4} ></input> :null} 
{fiche.IllustrationCNormes5?<input onChange={(e)=>setIllustrationCNormes5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes5} />:null} 
{fiche.IllustrationCNormes6?<input onChange={(e)=>setIllustrationCNormes6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes6}/>:null} 
{fiche.IllustrationCNormes7?<input onChange={(e)=>setIllustrationCNormes7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes7} />:null} 
{fiche.IllustrationCNormes8?<input onChange={(e)=>setIllustrationCNormes8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes8} />:null} 
{fiche.IllustrationCNormes9?<input onChange={(e)=>setIllustrationCNormes9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes9} />:null} 
{fiche.IllustrationCNormes10?<input onChange={(e)=>setIllustrationCNormes10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes10} />:null} 
{fiche.IllustrationCNormes11?<input onChange={(e)=>setIllustrationCNormes11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes11} />:null} 
{fiche.IllustrationCNormes12?<input onChange={(e)=>setIllustrationCNormes12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes12} />:null} 
{fiche.IllustrationCNormes13?<input onChange={(e)=>setIllustrationCNormes13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationCNormes13} />:null} 
</td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br/>et de l'environnement externe		</span>
 </td>
 
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier3'
            value={niveauMetier3}
            onChange={(e) => setniveauMetier3(e.target.value)}
            
          >
            {fiche.niveauMetier3==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.niveauMetier3==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.niveauMetier3==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.niveauMetier3==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.niveauMetier3==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise: <br/> marché, produits et relations externes
</span>
 </td>
 <td class="align-middle fixlistill">    
{fiche.IllustrationActivite?<input onChange={(e)=>setIllustrationActivite(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite} />:null} 
{fiche.IllustrationActivite2?<input onChange={(e)=>setIllustrationActivite2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite2} />:null} 
{fiche.IllustrationActivite3?<input onChange={(e)=>setIllustrationActivite3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationActivite3} />:null} 
{fiche.IllustrationActivite4?<input onChange={(e)=>setIllustrationActivite4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite4} ></input> :null} 
{fiche.IllustrationActivite5?<input onChange={(e)=>setIllustrationActivite5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite5} />:null} 
{fiche.IllustrationActivite6?<input onChange={(e)=>setIllustrationActivite6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite6}/>:null} 
{fiche.IllustrationActivite7?<input onChange={(e)=>setIllustrationActivite7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite7} />:null} 
{fiche.IllustrationActivite8?<input onChange={(e)=>setIllustrationActivite8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite8} />:null} 
{fiche.IllustrationActivite9?<input onChange={(e)=>setIllustrationActivite9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite9} />:null} 
{fiche.IllustrationActivite10?<input onChange={(e)=>setIllustrationActivite10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite10} />:null} 
{fiche.IllustrationActivite11?<input onChange={(e)=>setIllustrationActivite11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite11} />:null} 
{fiche.IllustrationActivite12?<input onChange={(e)=>setIllustrationActivite12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite12} />:null} 
{fiche.IllustrationActivite13?<input onChange={(e)=>setIllustrationActivite13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationActivite13} />:null} 
</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br/>l'environnement  interne</span>
 </td>
 
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier4'
            value={niveauMetier4}
            onChange={(e) => setniveauMetier4(e.target.value)}
            
          >
            {fiche.niveauMetier4==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.niveauMetier4==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.niveauMetier4==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.niveauMetier4==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.niveauMetier4==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,<br/>  sa structure,sa culture et son fonctionnement <br/> général
</span>
 </td>
 <td class="align-middle fixlistill">

 {fiche.IllustrationOrganisation?<input onChange={(e)=>setIllustrationOrganisation(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation} />:null} 
{fiche.IllustrationOrganisation2?<input onChange={(e)=>setIllustrationOrganisation2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation2} />:null} 
{fiche.IllustrationOrganisation3?<input onChange={(e)=>setIllustrationOrganisation3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationOrganisation3} />:null} 
{fiche.IllustrationOrganisation4?<input onChange={(e)=>setIllustrationOrganisation4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation4} ></input> :null} 
{fiche.IllustrationOrganisation5?<input onChange={(e)=>setIllustrationOrganisation5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation5} />:null} 
{fiche.IllustrationOrganisation6?<input onChange={(e)=>setIllustrationOrganisation6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation6}/>:null} 
{fiche.IllustrationOrganisation7?<input onChange={(e)=>setIllustrationOrganisation7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation7} />:null} 
{fiche.IllustrationOrganisation8?<input onChange={(e)=>setIllustrationOrganisation8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation8} />:null} 
{fiche.IllustrationOrganisation9?<input onChange={(e)=>setIllustrationOrganisation9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation9} />:null} 
{fiche.IllustrationOrganisation10?<input onChange={(e)=>setIllustrationOrganisation10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation10} />:null} 
{fiche.IllustrationOrganisation11?<input onChange={(e)=>setIllustrationOrganisation11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation11} />:null} 
{fiche.IllustrationOrganisation12?<input onChange={(e)=>setIllustrationOrganisation12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation12} />:null} 
{fiche.IllustrationOrganisation13?<input onChange={(e)=>setIllustrationOrganisation13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrganisation13} />:null} 
</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
 </td>
 
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier5'
            value={niveauMetier5}
            onChange={(e) => setniveauMetier5(e.target.value)}
            
          >
            {fiche.niveauMetier5==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.niveauMetier5==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.niveauMetier5==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.niveauMetier5==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.niveauMetier5==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des <br/> bases de données liés au domaine d'activité du poste
</span>
 </td>
 <td class="align-middle fixlistill">

{fiche.IllustrationSIBD?<input onChange={(e)=>setIllustrationSIBD(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD} />:null} 
{fiche.IllustrationSIBD2?<input onChange={(e)=>setIllustrationSIBD2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD2} />:null} 
{fiche.IllustrationSIBD3?<input onChange={(e)=>setIllustrationSIBD3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationSIBD3} />:null} 
{fiche.IllustrationSIBD4?<input onChange={(e)=>setIllustrationSIBD4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD4} ></input> :null} 
{fiche.IllustrationSIBD5?<input onChange={(e)=>setIllustrationSIBD5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD5} />:null} 
{fiche.IllustrationSIBD6?<input onChange={(e)=>setIllustrationSIBD6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD6}/>:null} 
{fiche.IllustrationSIBD7?<input onChange={(e)=>setIllustrationSIBD7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD7} />:null} 
{fiche.IllustrationSIBD8?<input onChange={(e)=>setIllustrationSIBD8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD8} />:null} 
{fiche.IllustrationSIBD9?<input onChange={(e)=>setIllustrationSIBD9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD9} />:null} 
{fiche.IllustrationSIBD10?<input onChange={(e)=>setIllustrationSIBD10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD10} />:null} 
{fiche.IllustrationSIBD11?<input onChange={(e)=>setIllustrationSIBD11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD11} />:null} 
{fiche.IllustrationSIBD12?<input onChange={(e)=>setIllustrationSIBD12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD12} />:null} 
{fiche.IllustrationSIBD13?<input onChange={(e)=>setIllustrationSIBD13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSIBD13} />:null} 
</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  <select
class="form-select" 
            name='niveauMetier6'
            value={niveauMetier6}
            onChange={(e) => setniveauMetier6(e.target.value)}
            
          >
            {fiche.niveauMetier6==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.niveauMetier6==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.niveauMetier6==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.niveauMetier6==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.niveauMetier6==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br/>  allemand, italien..) et connaissance des applications<br/>  informatiques de bureautique

</span>
 </td>
 <td class="align-middle fixlistill">

{fiche.IllustrationLinguistiquesBureautiques?<input onChange={(e)=>setIllustrationSIBD(e.target.value)} class="text-secondary text-xs font-weight-bold " placeholder={fiche.IllustrationLinguistiquesBureautiques} />:null} 
{fiche.IllustrationLinguistiquesBureautiques2?<input onChange={(e)=>setIllustrationSIBD2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques2} />:null} 
{fiche.IllustrationLinguistiquesBureautiques3?<input onChange={(e)=>setIllustrationSIBD3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.IllustrationLinguistiquesBureautiques3} />:null} 
{fiche.IllustrationLinguistiquesBureautiques4?<input onChange={(e)=>setIllustrationSIBD4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques4} ></input> :null} 
{fiche.IllustrationLinguistiquesBureautiques5?<input onChange={(e)=>setIllustrationSIBD5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques5} />:null} 
{fiche.IllustrationLinguistiquesBureautiques6?<input onChange={(e)=>setIllustrationSIBD6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques6}/>:null} 
{fiche.IllustrationLinguistiquesBureautiques7?<input onChange={(e)=>setIllustrationSIBD7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques7} />:null} 
{fiche.IllustrationLinguistiquesBureautiques8?<input onChange={(e)=>setIllustrationSIBD8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques8} />:null} 
{fiche.IllustrationLinguistiquesBureautiques9?<input onChange={(e)=>setIllustrationSIBD9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques9} />:null} 
{fiche.IllustrationLinguistiquesBureautiques10?<input onChange={(e)=>setIllustrationSIBD10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques10} />:null} 
{fiche.IllustrationLinguistiquesBureautiques11?<input onChange={(e)=>setIllustrationSIBD11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques11} />:null} 
{fiche.IllustrationLinguistiquesBureautiques12?<input onChange={(e)=>setIllustrationSIBD12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques12} />:null} 
{fiche.IllustrationLinguistiquesBureautiques13?<input onChange={(e)=>setIllustrationSIBD13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLinguistiquesBureautiques13} />:null} 
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
        <h6>Caractéristiques du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">

            <tbody>
       
              <tr>
              <td>
Execution</td>



{Execution==null&&fiche.Execution==1?<td  onClick={e=>setExecution(1)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==1?<td  onClick={e=>setExecution(1)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(1)}   className='fixonclicktable ' scope="row"></td>}    
{Execution==null&&fiche.Execution==2?<td  onClick={e=>setExecution(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==2?<td  onClick={e=>setExecution(2)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(2)}   className='fixonclicktable ' scope="row"></td>}    
{Execution==null&&fiche.Execution==3?<td  onClick={e=>setExecution(3)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==3?<td  onClick={e=>setExecution(3)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(3)}   className='fixonclicktable ' scope="row"></td>}    
{Execution==null&&fiche.Execution==4?<td  onClick={e=>setExecution(4)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==4?<td  onClick={e=>setExecution(4)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(4)}   className='fixonclicktable ' scope="row"></td>}    
{Execution==null&&fiche.Execution==5?<td  onClick={e=>setExecution(5)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==5?<td  onClick={e=>setExecution(5)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(5)}   className='fixonclicktable ' scope="row"></td>}    
{Execution==null&&fiche.Execution==6?<td  onClick={e=>setExecution(6)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Execution==6?<td  onClick={e=>setExecution(6)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExecution(6)}   className='fixonclicktable ' scope="row"></td>}    

              {/* {Execution==1? <td  onClick={e=>setExecution(1)}  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  onClick={e=>setExecution(1)}  className='fixonclicktable ' scope="row"></td>}   */}
              {/* {Execution==2? <td onClick={e=>setExecution(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
       {Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
       {Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
       {Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}   */}
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
{Expertise==null&&fiche.Expertise==1?<td  onClick={e=>setExpertise(1)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==1?<td  onClick={e=>setExpertise(1)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(1)}   className='fixonclicktable ' scope="row"></td>}    
{Expertise==null&&fiche.Expertise==2?<td  onClick={e=>setExpertise(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==2?<td  onClick={e=>setExpertise(2)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(2)}   className='fixonclicktable ' scope="row"></td>}    
{Expertise==null&&fiche.Expertise==3?<td  onClick={e=>setExpertise(3)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==3?<td  onClick={e=>setExpertise(3)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(3)}   className='fixonclicktable ' scope="row"></td>}    
{Expertise==null&&fiche.Expertise==4?<td  onClick={e=>setExpertise(4)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==4?<td  onClick={e=>setExpertise(4)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(4)}   className='fixonclicktable ' scope="row"></td>}    
{Expertise==null&&fiche.Expertise==5?<td  onClick={e=>setExpertise(5)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==5?<td  onClick={e=>setExpertise(5)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(5)}   className='fixonclicktable ' scope="row"></td>}    
{Expertise==null&&fiche.Expertise==6?<td  onClick={e=>setExpertise(6)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Expertise==6?<td  onClick={e=>setExpertise(6)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setExpertise(6)}   className='fixonclicktable ' scope="row"></td>}    

              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
              {Operationnel==null&&fiche.Operationnel==1?<td  onClick={e=>setOperationnel(1)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==1?<td  onClick={e=>setOperationnel(1)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(1)}   className='fixonclicktable ' scope="row"></td>}    
              {Operationnel==null&&fiche.Operationnel==2?<td  onClick={e=>setOperationnel(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==2?<td  onClick={e=>setOperationnel(2)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(2)}   className='fixonclicktable ' scope="row"></td>}    
              {Operationnel==null&&fiche.Operationnel==3?<td  onClick={e=>setOperationnel(3)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==3?<td  onClick={e=>setOperationnel(3)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(3)}   className='fixonclicktable ' scope="row"></td>}    
              {Operationnel==null&&fiche.Operationnel==4?<td  onClick={e=>setOperationnel(4)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==4?<td  onClick={e=>setOperationnel(4)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(4)}   className='fixonclicktable ' scope="row"></td>}    
              {Operationnel==null&&fiche.Operationnel==5?<td  onClick={e=>setOperationnel(5)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==5?<td  onClick={e=>setOperationnel(5)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(5)}   className='fixonclicktable ' scope="row"></td>}    
              {Operationnel==null&&fiche.Operationnel==6?<td  onClick={e=>setOperationnel(6)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Operationnel==6?<td  onClick={e=>setOperationnel(6)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setOperationnel(6)}   className='fixonclicktable ' scope="row"></td>}    
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>

              {decisions==null&&fiche.decisions==1?<td  onClick={e=>setdecisions(1)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==1?<td  onClick={e=>setdecisions(1)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(1)}   className='fixonclicktable ' scope="row"></td>}    
              {decisions==null&&fiche.decisions==2?<td  onClick={e=>setdecisions(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==2?<td  onClick={e=>setdecisions(2)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(2)}   className='fixonclicktable ' scope="row"></td>}    
              {decisions==null&&fiche.decisions==3?<td  onClick={e=>setdecisions(3)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==3?<td  onClick={e=>setdecisions(3)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(3)}   className='fixonclicktable ' scope="row"></td>}    
              {decisions==null&&fiche.decisions==4?<td  onClick={e=>setdecisions(4)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==4?<td  onClick={e=>setdecisions(4)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(4)}   className='fixonclicktable ' scope="row"></td>}    
              {decisions==null&&fiche.decisions==5?<td  onClick={e=>setdecisions(5)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==5?<td  onClick={e=>setdecisions(5)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(5)}   className='fixonclicktable ' scope="row"></td>}    
              {decisions==null&&fiche.decisions==6?<td  onClick={e=>setdecisions(6)} className='fixonclicktable colorTableChmp' scope="row"></td>:  decisions==6?<td  onClick={e=>setdecisions(6)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setdecisions(6)}   className='fixonclicktable ' scope="row"></td>}    
  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
              {Production==null&&fiche.Production==1?<td  onClick={e=>setProduction(1)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==1?<td  onClick={e=>setProduction(1)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(1)}   className='fixonclicktable ' scope="row"></td>}    
              {Production==null&&fiche.Production==2?<td  onClick={e=>setProduction(2)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==2?<td  onClick={e=>setProduction(2)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(2)}   className='fixonclicktable ' scope="row"></td>}    
              {Production==null&&fiche.Production==3?<td  onClick={e=>setProduction(3)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==3?<td  onClick={e=>setProduction(3)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(3)}   className='fixonclicktable ' scope="row"></td>}    
              {Production==null&&fiche.Production==4?<td  onClick={e=>setProduction(4)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==4?<td  onClick={e=>setProduction(4)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(4)}   className='fixonclicktable ' scope="row"></td>}    
              {Production==null&&fiche.Production==5?<td  onClick={e=>setProduction(5)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==5?<td  onClick={e=>setProduction(5)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(5)}   className='fixonclicktable ' scope="row"></td>}    
              {Production==null&&fiche.Production==6?<td  onClick={e=>setProduction(6)} className='fixonclicktable colorTableChmp' scope="row"></td>:  Production==6?<td  onClick={e=>setProduction(6)} className='fixonclicktable colorTableChmp' scope="row"></td>: <td  onClick={e=>setProduction(6)}   className='fixonclicktable ' scope="row"></td>}    

              <td  scope="row">Dév - Support</td>

              </tr>
            
              <tr>
              <td>
              </td>
              <td className='fixonclicktable' scope="row"></td>              
              <td className='fixonclicktable' scope="row"></td>            
              <td className='fixonclicktable' scope="row"></td>      
              <td className='fixonclicktable' scope="row"></td>
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
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
            name='NiveauComportementales1'
            value={NiveauComportementales1}
            onChange={(e) => setNiveauComportementales1(e.target.value)}
            
          >
            {fiche.NiveauComportementales1==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauComportementales1==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauComportementales1==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauComportementales1==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauComportementales1==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                <td class="align-middle fixlistill">

    
{fiche.Illustrationinnovation?<input onChange={(e)=>setIllustrationinnovation(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation} />:null} 
{fiche.Illustrationinnovation2?<input onChange={(e)=>setIllustrationinnovation2(e.target.value)}  class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation2} />:null} 
{fiche.Illustrationinnovation3?<input onChange={(e)=>setIllustrationinnovation3(e.target.value)}  class="text-secondary text-xs font-weight-bold"placeholder={fiche.Illustrationinnovation3} />:null} 
{fiche.Illustrationinnovation4?<input onChange={(e)=>setIllustrationinnovation4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation4} ></input> :null} 
{fiche.Illustrationinnovation5?<input onChange={(e)=>setIllustrationinnovation5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation5} />:null} 
{fiche.Illustrationinnovation6?<input onChange={(e)=>setIllustrationinnovation6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation6}/>:null} 
{fiche.Illustrationinnovation7?<input onChange={(e)=>setIllustrationinnovation7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation7} />:null} 
{fiche.Illustrationinnovation8?<input onChange={(e)=>setIllustrationinnovation8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation8} />:null} 
{fiche.Illustrationinnovation9?<input onChange={(e)=>setIllustrationinnovation9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation9} />:null} 
{fiche.Illustrationinnovation10?<input onChange={(e)=>setIllustrationinnovation10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation10} />:null} 
{fiche.Illustrationinnovation11?<input onChange={(e)=>setIllustrationinnovation11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation11} />:null} 
{fiche.Illustrationinnovation12?<input onChange={(e)=>setIllustrationinnovation12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation12} />:null} 
{fiche.Illustrationinnovation13?<input onChange={(e)=>setIllustrationinnovation13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.Illustrationinnovation13} />:null} 




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
            name='NiveauComportementales2'
            value={NiveauComportementales2}
            onChange={(e) => setNiveauComportementales2(e.target.value)}
            
          >
            {fiche.NiveauComportementales2==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauComportementales2==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauComportementales2==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauComportementales2==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauComportementales2==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 <td class="align-middle fixlistill">

    
{fiche.IllustrationAgilit?<input onChange={(e)=>setIllustrationAgilit(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit} />:null} 
{fiche.IllustrationAgilit2?<input onChange={(e)=>setIllustrationAgilit2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit2} />:null} 
{fiche.IllustrationAgilit3?<input onChange={(e)=>setIllustrationAgilit3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit3} />:null} 
{fiche.IllustrationAgilit4?<input onChange={(e)=>setIllustrationAgilit4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit4} />:null} 
{fiche.IllustrationAgilit5?<input onChange={(e)=>setIllustrationAgilit5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit5} />:null} 
{fiche.IllustrationAgilit6?<input onChange={(e)=>setIllustrationAgilit6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit6} />:null} 
{fiche.IllustrationAgilit7?<input onChange={(e)=>setIllustrationAgilit7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit7} />:null} 
{fiche.IllustrationAgilit8?<input onChange={(e)=>setIllustrationAgilit8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit8} />:null} 
{fiche.IllustrationAgilit9?<input onChange={(e)=>setIllustrationAgilit9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit9} />:null} 
{fiche.IllustrationAgilit10?<input onChange={(e)=>setIllustrationAgilit10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit10} />:null} 
{fiche.IllustrationAgilit11?<input onChange={(e)=>setIllustrationAgilit11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit11} />:null} 
{fiche.IllustrationAgilit12?<input onChange={(e)=>setIllustrationAgilit12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit12} />:null} 
{fiche.IllustrationAgilit13?<input onChange={(e)=>setIllustrationAgilit13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationAgilit13} />:null} 




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
            name='NiveauComportementales3'
            value={NiveauComportementales3}
            onChange={(e) => setNiveauComportementales3(e.target.value)}
            
          >
            {fiche.NiveauComportementales3==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauComportementales3==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauComportementales3==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauComportementales3==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauComportementales3==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br/> d’atteindre son plein potentiel.
</span>
 </td>
 
 <td class="align-middle fixlistill">

    
{fiche.IllustrationForceCollectif?<input onChange={(e)=>setIllustrationForceCollectif(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif} />:null} 
{fiche.IllustrationForceCollectif2?<input onChange={(e)=>setIllustrationForceCollectif2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif2} />:null} 
{fiche.IllustrationForceCollectif3?<input onChange={(e)=>setIllustrationForceCollectif3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif3} />:null} 
{fiche.IllustrationForceCollectif4?<input onChange={(e)=>setIllustrationForceCollectif4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif4} />:null} 
{fiche.IllustrationForceCollectif5?<input onChange={(e)=>setIllustrationForceCollectif5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif5} />:null} 
{fiche.IllustrationForceCollectif6?<input onChange={(e)=>setIllustrationForceCollectif6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif6} />:null} 
{fiche.IllustrationForceCollectif7?<input onChange={(e)=>setIllustrationForceCollectif7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif7} />:null} 
{fiche.IllustrationForceCollectif8?<input onChange={(e)=>setIllustrationForceCollectif8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif8} />:null} 
{fiche.IllustrationForceCollectif9?<input onChange={(e)=>setIllustrationForceCollectif9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif9} />:null} 
{fiche.IllustrationForceCollectif10?<input onChange={(e)=>setIllustrationForceCollectif10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif10} />:null} 
{fiche.IllustrationForceCollectif11?<input onChange={(e)=>setIllustrationForceCollectif11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif11} />:null} 
{fiche.IllustrationForceCollectif12?<input onChange={(e)=>setIllustrationForceCollectif12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif12} />:null} 
{fiche.IllustrationForceCollectif13?<input onChange={(e)=>setIllustrationForceCollectif13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationForceCollectif13} />:null} 

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
            name='NiveauComportementales4'
            value={NiveauComportementales4}
            onChange={(e) => setNiveauComportementales4(e.target.value)}
            
          >
            {fiche.NiveauComportementales4==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauComportementales4==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauComportementales4==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauComportementales4==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauComportementales4==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 <td class="align-middle fixlistill">

    
{fiche.IllustrationRespectEngagement?<input onChange={(e)=>setIllustrationRespectEngagement(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement} />:null} 
{fiche.IllustrationRespectEngagement2?<input onChange={(e)=>setIllustrationRespectEngagement2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement2} />:null} 
{fiche.IllustrationRespectEngagement3?<input onChange={(e)=>setIllustrationRespectEngagement3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement3} />:null} 
{fiche.IllustrationRespectEngagement4?<input onChange={(e)=>setIllustrationRespectEngagement4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement4} />:null} 
{fiche.IllustrationRespectEngagement5?<input onChange={(e)=>setIllustrationRespectEngagement5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement5} />:null} 
{fiche.IllustrationRespectEngagement6?<input onChange={(e)=>setIllustrationRespectEngagement6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement6} />:null} 
{fiche.IllustrationRespectEngagement7?<input onChange={(e)=>setIllustrationRespectEngagement7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement7} />:null} 
{fiche.IllustrationRespectEngagement8?<input onChange={(e)=>setIllustrationRespectEngagement8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement8} />:null} 
{fiche.IllustrationRespectEngagement9?<input onChange={(e)=>setIllustrationRespectEngagement9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement9} />:null} 
{fiche.IllustrationRespectEngagement10?<input onChange={(e)=>setIllustrationRespectEngagement10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement10} />:null} 
{fiche.IllustrationRespectEngagement11?<input onChange={(e)=>setIllustrationRespectEngagement11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement11} />:null} 
{fiche.IllustrationRespectEngagement12?<input onChange={(e)=>setIllustrationRespectEngagement12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement12} />:null} 
{fiche.IllustrationRespectEngagement13?<input onChange={(e)=>setIllustrationRespectEngagement13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationRespectEngagement13} />:null} 

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
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ullistration</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
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
            name='NiveauManagerials1'
            value={NiveauManagerials1}
            onChange={(e) => setNiveauManagerials1(e.target.value)}
            
          >
            {fiche.NiveauManagerials1==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials1==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials1==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials1==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials1==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>
                <td class="align-middle fixlistill">

    
{fiche.IllustrationOrientationstrategique?<input onChange={(e)=>setIllustrationOrientationstrategique(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique} />:null} 
{fiche.IllustrationOrientationstrategique2?<input onChange={(e)=>setIllustrationOrientationstrategique2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique2} />:null} 
{fiche.IllustrationOrientationstrategique3?<input onChange={(e)=>setIllustrationOrientationstrategique3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique3} />:null} 
{fiche.IllustrationOrientationstrategique4?<input onChange={(e)=>setIllustrationOrientationstrategique4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique4} />:null} 
{fiche.IllustrationOrientationstrategique5?<input onChange={(e)=>setIllustrationOrientationstrategique5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique5} />:null} 
{fiche.IllustrationOrientationstrategique6?<input onChange={(e)=>setIllustrationOrientationstrategique6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique6} />:null} 
{fiche.IllustrationOrientationstrategique7?<input onChange={(e)=>setIllustrationOrientationstrategique7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique7} />:null} 
{fiche.IllustrationOrientationstrategique8?<input onChange={(e)=>setIllustrationOrientationstrategique8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique8} />:null} 
{fiche.IllustrationOrientationstrategique9?<input onChange={(e)=>setIllustrationOrientationstrategique9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique9} />:null} 
{fiche.IllustrationOrientationstrategique10?<input onChange={(e)=>setIllustrationOrientationstrategique10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique10} />:null} 
{fiche.IllustrationOrientationstrategique11?<input onChange={(e)=>setIllustrationOrientationstrategique11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique11} />:null} 
{fiche.IllustrationOrientationstrategique12?<input onChange={(e)=>setIllustrationOrientationstrategique12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique12} />:null} 
{fiche.IllustrationOrientationstrategique13?<input onChange={(e)=>setIllustrationOrientationstrategique13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationOrientationstrategique13} />:null} 

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
            name='NiveauManagerials2'
            value={NiveauManagerials2}
            onChange={(e) => setNiveauManagerials2(e.target.value)}
            
          >
            {fiche.NiveauManagerials2==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials2==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials2==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials2==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials2==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>
 <td class="align-middle fixlistill">

    
{fiche.IllustrationSensdesaffaires?<input onChange={(e)=>setIllustrationOrientationstrategique(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires} />:null} 
{fiche.IllustrationSensdesaffaires2?<input onChange={(e)=>setIllustrationOrientationstrategique2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires2} />:null} 
{fiche.IllustrationSensdesaffaires3?<input onChange={(e)=>setIllustrationOrientationstrategique3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires3} />:null} 
{fiche.IllustrationSensdesaffaires4?<input onChange={(e)=>setIllustrationOrientationstrategique4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires4} />:null} 
{fiche.IllustrationSensdesaffaires5?<input onChange={(e)=>setIllustrationOrientationstrategique5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires5} />:null} 
{fiche.IllustrationSensdesaffaires6?<input onChange={(e)=>setIllustrationOrientationstrategique6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires6} />:null} 
{fiche.IllustrationSensdesaffaires7?<input onChange={(e)=>setIllustrationOrientationstrategique7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires7} />:null} 
{fiche.IllustrationSensdesaffaires8?<input onChange={(e)=>setIllustrationOrientationstrategique8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires8} />:null} 
{fiche.IllustrationSensdesaffaires9?<input onChange={(e)=>setIllustrationOrientationstrategique9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires9} />:null} 
{fiche.IllustrationSensdesaffaires10?<input onChange={(e)=>setIllustrationOrientationstrategique10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires10} />:null} 
{fiche.IllustrationSensdesaffaires11?<input onChange={(e)=>setIllustrationOrientationstrategique11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires11} />:null} 
{fiche.IllustrationSensdesaffaires12?<input onChange={(e)=>setIllustrationOrientationstrategique12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires12} />:null} 
{fiche.IllustrationSensdesaffaires13?<input onChange={(e)=>setIllustrationOrientationstrategique13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationSensdesaffaires13} />:null} 

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
            name='NiveauManagerials3'
            value={NiveauManagerials3}
            onChange={(e) => setNiveauManagerials3(e.target.value)}
            
          >
            {fiche.NiveauManagerials3==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials3==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials3==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials3==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials3==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>

 <td class="align-middle fixlistill">

    
{fiche.IllustrationLeadership?<input onChange={(e)=>setIllustrationOrientationstrategique(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership} />:null} 
{fiche.IllustrationLeadership2?<input onChange={(e)=>setIllustrationOrientationstrategique2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership2} />:null} 
{fiche.IllustrationLeadership3?<input onChange={(e)=>setIllustrationOrientationstrategique3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership3} />:null} 
{fiche.IllustrationLeadership4?<input onChange={(e)=>setIllustrationOrientationstrategique4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership4} />:null} 
{fiche.IllustrationLeadership5?<input onChange={(e)=>setIllustrationOrientationstrategique5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership5} />:null} 
{fiche.IllustrationLeadership6?<input onChange={(e)=>setIllustrationOrientationstrategique6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership6} />:null} 
{fiche.IllustrationLeadership7?<input onChange={(e)=>setIllustrationOrientationstrategique7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership7} />:null} 
{fiche.IllustrationLeadership8?<input onChange={(e)=>setIllustrationOrientationstrategique8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership8} />:null} 
{fiche.IllustrationLeadership9?<input onChange={(e)=>setIllustrationOrientationstrategique9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership9} />:null} 
{fiche.IllustrationLeadership10?<input onChange={(e)=>setIllustrationOrientationstrategique10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership10} />:null} 
{fiche.IllustrationLeadership11?<input onChange={(e)=>setIllustrationOrientationstrategique11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership11} />:null} 
{fiche.IllustrationLeadership12?<input onChange={(e)=>setIllustrationOrientationstrategique12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership12} />:null} 
{fiche.IllustrationLeadership13?<input onChange={(e)=>setIllustrationOrientationstrategique13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationLeadership13} />:null} 

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
            name='NiveauManagerials4'
            value={NiveauManagerials4}
            onChange={(e) => setNiveauManagerials4(e.target.value)}
            
          >
            {fiche.NiveauManagerials4==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials4==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials4==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials4==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials4==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à persuader, convaincre, impressionner et faire des compromis avec les autres afin de les fédérer vers ses idées et points de vue	</span>
 </td>

 <td class="align-middle ">

    
{/* {fiche.IllustrationInfluence?<input onChange={(e)=>setIllustrationInfluence(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence} />:null} 
{fiche.IllustrationInfluence2?<input onChange={(e)=>setIllustrationInfluence2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence2} />:null} 
{fiche.IllustrationInfluence3?<input onChange={(e)=>setIllustrationInfluence3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence3} />:null} 
{fiche.IllustrationInfluence4?<input onChange={(e)=>setIllustrationInfluence4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence4} />:null} 
{fiche.IllustrationInfluence5?<input onChange={(e)=>setIllustrationInfluence5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence5} />:null} 
{fiche.IllustrationInfluence6?<input onChange={(e)=>setIllustrationOrientationstrategique6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence6} />:null} 
{fiche.IllustrationInfluence7?<input onChange={(e)=>setIllustrationOrientationstrategique7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence7} />:null} 
{fiche.IllustrationInfluence8?<input onChange={(e)=>setIllustrationOrientationstrategique8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence8} />:null} 
{fiche.IllustrationInfluence9?<input onChange={(e)=>setIllustrationOrientationstrategique9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence9} />:null} 
{fiche.IllustrationInfluence10?<input onChange={(e)=>setIllustrationOrientationstrategique10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence10} />:null} 
{fiche.IllustrationInfluence11?<input onChange={(e)=>setIllustrationOrientationstrategique11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence11} />:null} 
{fiche.IllustrationInfluence12?<input onChange={(e)=>setIllustrationOrientationstrategique12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence12} />:null} 
{fiche.IllustrationInfluence13?<input onChange={(e)=>setIllustrationOrientationstrategique13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationInfluence13} />:null}  */}

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
            name='NiveauManagerials5'
            value={NiveauManagerials5}
            onChange={(e) => setNiveauManagerials5(e.target.value)}
            
          >
            {fiche.NiveauManagerials5==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials5==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials5==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials5==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials5==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>
 <td class="align-middle fixlistill">

    
{fiche.IllustrationGestionOperationnelle?<input onChange={(e)=>setIllustrationGestionOperationnelle(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle} />:null} 
{fiche.IllustrationGestionOperationnelle2?<input onChange={(e)=>setIllustrationGestionOperationnelle2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle2} />:null} 
{fiche.IllustrationGestionOperationnelle3?<input onChange={(e)=>setIllustrationGestionOperationnelle3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle3} />:null} 
{fiche.IllustrationGestionOperationnelle4?<input onChange={(e)=>setIllustrationGestionOperationnelle4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle4} />:null} 
{fiche.IllustrationGestionOperationnelle5?<input onChange={(e)=>setIllustrationGestionOperationnelle5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle5} />:null} 
{fiche.IllustrationGestionOperationnelle6?<input onChange={(e)=>setIllustrationGestionOperationnelle6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle6} />:null} 
{fiche.IllustrationGestionOperationnelle7?<input onChange={(e)=>setIllustrationGestionOperationnelle7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle7} />:null} 
{fiche.IllustrationGestionOperationnelle8?<input onChange={(e)=>setIllustrationGestionOperationnelle8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle8} />:null} 
{fiche.IllustrationGestionOperationnelle9?<input onChange={(e)=>setIllustrationGestionOperationnelle9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle9} />:null} 
{fiche.IllustrationGestionOperationnelle10?<input onChange={(e)=>setIllustrationGestionOperationnelle10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle10} />:null} 
{fiche.IllustrationGestionOperationnelle11?<input onChange={(e)=>setIllustrationGestionOperationnelle11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle11} />:null} 
{fiche.IllustrationGestionOperationnelle12?<input onChange={(e)=>setIllustrationGestionOperationnelle12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle12} />:null} 
{fiche.IllustrationGestionOperationnelle13?<input onChange={(e)=>setIllustrationGestionOperationnelle13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionOperationnelle13} />:null} 

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
            name='NiveauManagerials6'
            value={NiveauManagerials6}
            onChange={(e) => setNiveauManagerials6(e.target.value)}
            
          >
            {fiche.NiveauManagerials6==0?  <option className='option-type-profile' value="0" selected>0</option>:  <option value="0"  className='option-type-profile'>0</option>}  
            {fiche.NiveauManagerials6==1?  <option className='option-type-profile'value="1"  selected>1</option>:  <option value="1"  className='option-type-profile'>1</option>}  
            {fiche.NiveauManagerials6==2?  <option className='option-type-profile'value="2"  selected>2</option>:  <option value="2"  className='option-type-profile'>2</option>}  
            {fiche.NiveauManagerials6==3?  <option className='option-type-profile' value="3" selected>3</option>:  <option value="3"  className='option-type-profile'>3</option>}  
            {fiche.NiveauManagerials6==4?  <option className='option-type-profile'value="4"  selected>4</option>:  <option value="4" className='option-type-profile'>4</option>}  
          
         
          </select></span>
                </td>
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>

 <td class="align-middle fixlistill">

    
{fiche.IllustrationGestionEquipe?<input onChange={(e)=>setIllustrationGestionEquipe(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe} />:null} 
{fiche.IllustrationGestionEquipe2?<input onChange={(e)=>setIllustrationGestionEquipe2(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe2} />:null} 
{fiche.IllustrationGestionEquipe3?<input onChange={(e)=>setIllustrationGestionEquipe3(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe3} />:null} 
{fiche.IllustrationGestionEquipe4?<input onChange={(e)=>setIllustrationGestionEquipe4(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe4} />:null} 
{fiche.IllustrationGestionEquipe5?<input onChange={(e)=>setIllustrationGestionEquipe5(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe5} />:null} 
{fiche.IllustrationGestionEquipe6?<input onChange={(e)=>setIllustrationGestionEquipe6(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe6} />:null} 
{fiche.IllustrationGestionEquipe7?<input onChange={(e)=>setIllustrationGestionEquipe7(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe7} />:null} 
{fiche.IllustrationGestionEquipe8?<input onChange={(e)=>setIllustrationGestionEquipe8(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe8} />:null} 
{fiche.IllustrationGestionEquipe9?<input onChange={(e)=>setIllustrationGestionEquipe9(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe9} />:null} 
{fiche.IllustrationGestionEquipe10?<input onChange={(e)=>setIllustrationGestionEquipe10(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe10} />:null} 
{fiche.IllustrationGestionEquipe11?<input onChange={(e)=>setIllustrationGestionEquipe11(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe11} />:null} 
{fiche.IllustrationGestionEquipe12?<input onChange={(e)=>setIllustrationGestionEquipe12(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe12} />:null} 
{fiche.IllustrationGestionEquipe13?<input onChange={(e)=>setIllustrationGestionEquipe13(e.target.value)} class="text-secondary text-xs font-weight-bold" placeholder={fiche.IllustrationGestionEquipe13} />:null} 

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
        <h6>Compétences transverses</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Compétences transverses</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Niveau</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {fiche.CompetencesTransverses.map((x,i)=>
                          !editCompetencesTransverses?

                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.CompetencesTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.NiveauTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.DescriptionTransverses}</span>
                 </td>
                
                 <td>
                  <button onClick={()=>seteditCompetencesTransverses(true)} className='btn btn-secondary'>edit</button>
               
                  </td> 
               </tr>:          <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <input type='text' name="CompetencesTransverses" class="text-secondary text-xs font-weight-bold" placeholder={x.CompetencesTransverses} onChange={(e) => setCompetencesTransverses(e.target.value)}/>
                 </td>  <td class="align-middle text-center text-sm">
                 <input type='text' name="NiveauTransverses" class="text-secondary text-xs font-weight-bold" placeholder={x.NiveauTransverses}onChange={(e) => setNiveauTransverses(e.target.value)}/>
                 </td>  <td class="align-middle text-center text-sm">
                 <input type='text' name="DescriptionTransverses" class="text-secondary text-xs font-weight-bold" placeholder={x.DescriptionTransverses}onChange={(e) => setDescriptionTransverses(e.target.value)}/>
                 
                 </td>
                
                 <td>
                  <button onClick={(e)=>edittransvefunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
               
                  </td> 
               </tr>
                )}
                          </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">Competences Transverses</label>
<input type="text" class="form-control" name="CompetencesTransverses" onChange={(e) => setCompetencesTransverses(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Niveau Transverses</label>
<input type="text" class="form-control" name="NiveauTransverses" onChange={(e) => setNiveauTransverses(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Description Transverses</label>
<input type="text" class="form-control" name="DescriptionTransverses" onChange={(e) => setDescriptionTransverses(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>

<button onClick={(e)=>AddCompetencesTransverses(searchParams.get("id"),{CompetencesTransverses ,NiveauTransverses,DescriptionTransverses })} class="btn btn-primary" type="submit">Add</button>

       
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row fixrowmore">

  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>DIMENSIONNEMENT DU POSTE</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nature De Indicateur</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Indicateur De Dimensionnement</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Elements Chiffres</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Commentaires Dimensionnement</th>
            </thead>
            <tbody>
                {fiche.DimensionnementDuPoste.map((x,i)=>
                              !editDimenssion?

                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.NatureDeIndicateur}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.IndicateurDeDimensionnement}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.ElementsChiffres}</span>
                 </td>
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.CommentairesDimensionnement}</span>
                 </td>
                
                 <td>
                  <button onClick={()=>seteditDimenssion(true)} className='btn btn-secondary'>edit</button>
               
                  </td> 
               </tr>: <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                <input type='text' name='NatureDeIndicateur' class="text-secondary text-xs font-weight-bold" placeholder={x.NatureDeIndicateur} onChange={(e) => setNatureDeIndicateur(e.target.value)}/>

                 </td>  <td class="align-middle text-center text-sm">
                 <input type='text' name='IndicateurDeDimensionnement' class="text-secondary text-xs font-weight-bold" placeholder={x.IndicateurDeDimensionnement} onChange={(e) => setIndicateurDeDimensionnement(e.target.value)}/>
                
                 </td>  <td class="align-middle text-center text-sm">
                 <input type='text' name='ElementsChiffres' class="text-secondary text-xs font-weight-bold" placeholder={x.ElementsChiffres} onChange={(e) => setElementsChiffres(e.target.value)}/>

                 </td>
                
                 <td class="align-middle text-center text-sm">
                 <input type='text' name='CommentairesDimensionnement' class="text-secondary text-xs font-weight-bold" placeholder={x.CommentairesDimensionnement} onChange={(e) => setCommentairesDimensionnement(e.target.value)}/>
                
                 </td>
                
                 <td>
                 <button onClick={(e)=>editDimensionnementfunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
               
                  </td> 
               </tr>
                )}
             
           
            </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">Nature De Indicateur</label>
<input type="text" class="form-control" name="NatureDeIndicateur" onChange={(e) => setNatureDeIndicateur(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Indicateur De Dimensionnement</label>
<input type="text" class="form-control" name="IndicateurDeDimensionnement" onChange={(e) => setIndicateurDeDimensionnement(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Elements Chiffres</label>
<input type="text" class="form-control" name="ElementsChiffres" onChange={(e) => setElementsChiffres(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Commentaires Dimensionnement</label>
<input type="text" class="form-control" name="CommentairesDimensionnement" onChange={(e) => setCommentairesDimensionnement(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<button onClick={(e)=>AddDimensionnementDuPoste(searchParams.get("id"),{NatureDeIndicateur ,IndicateurDeDimensionnement,ElementsChiffres,CommentairesDimensionnement })} class="btn btn-primary" type="submit">Add</button>

        </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
<div class="row fixrowmore">

  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Indicateurs de performance</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Indicateurs de performance
</th>
<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Elements de calcul</th>
<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Commentaires
<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
</th>
</th>


               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
                {fiche.IndicateursDePerformance.map((x,i)=>
                              !editindicateur?

                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.IndicateursDePerformance}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.ElementsDeCalcul}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Commentaires}</span>
                 </td>
                 <td>
                 <button onClick={(e)=>seteditindicateur(true)} className='btn btn-secondary'>edit</button>
                 </td>
                
            
               </tr>:  <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                <input type='text' name='IndicateursDePerformance' class="text-secondary text-xs font-weight-bold" placeholder={x.IndicateursDePerformance} onChange={(e) => setIndicateursDePerformance(e.target.value)}/>
                
                 </td>  <td class="align-middle text-center text-sm">
                <input type='text' name='ElementsDeCalcul' class="text-secondary text-xs font-weight-bold" placeholder={x.ElementsDeCalcul} onChange={(e) => setElementsDeCalcul(e.target.value)}/>

                 </td>  <td class="align-middle text-center text-sm">
                 <input type='text' name='Commentaires' class="text-secondary text-xs font-weight-bold" placeholder={x.Commentaires} onChange={(e) => setCommentaires(e.target.value)}/>
               
                 </td>
                 <td>
                <button onClick={(e)=>editIndicateursfunction(e,x._id)} className='btn btn-secondary'>Submit edit</button>
              
                 </td> 
             
               </tr>
                )}
             
           
            </tbody>
          </table>
          <div class="form-group ">
<label for="formGroupExampleInput">Indicateurs De Performance</label>
<input type="text" class="form-control" name="IndicateursDePerformance" onChange={(e) => setIndicateursDePerformance(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">ElementsDeCalcul</label>
<input type="text" class="form-control" name="ElementsDeCalcul" onChange={(e) => setElementsDeCalcul(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Commentaires</label>
<input type="text" class="form-control" name="Commentaires" onChange={(e) => setCommentaires(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
<button onClick={(e)=>AddIndicateursDePerformance(searchParams.get("id"),{IndicateursDePerformance ,ElementsDeCalcul,Commentaires })} class="btn btn-primary" type="submit">Add</button>

      </div>
    </div>
    <button className='btn btn-primary' onClick={e=>submitupdate(e)}>Update</button>

  </div>
 
</div>

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
</div>
</div>
</div>    </Fragment>
  )

}

const mapStateToProps = (state) => ({
    fiche: state.fiche,
  });
  export default  connect(mapStateToProps, {editmyCompetencesTransverses,editmyDimensionnementDuPoste,editIndicateursDePerformance,AddCompetencesTransverses,AddDimensionnementDuPoste,AddIndicateursDePerformance,    getFiche,EditMyFiche,AddClientsDuPoste ,AddAutreResponsabilite,AddFournisseursDuPoste,EditRatachment,AddRattachements,editmyFournisseur,EditClient,EditAutreResponsabilite}) (EditFiche)