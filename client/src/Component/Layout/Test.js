import React,{useState,useEffect} from 'react'
import { AddAutreAppelations,AddEtatDeFiche,AddRattachements,AddCompetencesManagerials,AddCompetencesComportementales,addFiche,AddClientsDuPoste, getFiche,AddFournisseursDuPoste ,AddAutreResponsabilite,AddCaracteristiqueDuPoste,AddIndicateursDePerformance,AddDimensionnementDuPoste,AddCompetencesTransverses,AddCompetencesMetier} from '../../actions/fiche'
import Aside from '../Layout/Aside';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


import { connect } from 'react-redux';
function Test({AddAutreAppelations,AddEtatDeFiche,AddRattachements,AddCompetencesManagerials,AddCompetencesComportementales,addFiche,AddClientsDuPoste,AddCaracteristiqueDuPoste,AddAutreResponsabilite,getFiche,AddIndicateursDePerformance,AddDimensionnementDuPoste,AddCompetencesTransverses,AddFournisseursDuPoste,AddCompetencesMetier,fiche:{Rattachment,id,fiche,loading,ClientsDuPoste,FournisseursDuPoste,AutreResponsabilite,MyCompetencesTransverses,DimensionnementDuPoste,MyIndicateursDePerformance,myAutreAppelations,myEtatDeFiche}}) {
    const [AutreAppelations, setAutreAppelations] = useState('');
    const [EtatDeFiche, setEtatDeFiche] = useState('');
    const [RattachementsHierarchique, setRattachementsHierarchique] = useState('');
    const [RattachementsFonctionnel, setRattachementsFonctionnel] = useState('');
    const [isOpen, setisOpen] = useState(false);

    const [Categorie, setcategorie] = useState('SUPPORT');
    const [titre, settitre] = useState('');
    const [Description, setDescription] = useState('');
    const [SousCategorie, setSousCategorie] = useState('');


    const [Client, setClient] = useState('');
    const [Outputs, setOutputs] = useState('');
    const [Fournisseur, setFournisseur] = useState('');
    const [Inputs, setInputs] = useState('');
    const [responsability, setresponsability] = useState('');
    const [Execution, setExecution] = useState('');
    const [Expertise, setExpertise] = useState('');
    const [Operationnel, setOperationnel] = useState('');
    const [decisions, setdecisions] = useState('');
    const [Production, setProduction] = useState('');

    const [CompetencesTransverses, setCompetencesTransverses] = useState('');
    const [NiveauTransverses, setNiveauTransverses] = useState('');
    const [DescriptionTransverses, setDescriptionTransverses] = useState('');
    const [NatureDeIndicateur, setNatureDeIndicateur] = useState('');
    const [IndicateurDeDimensionnement, setIndicateurDeDimensionnement] = useState('');
    const [ElementsChiffres, setElementsChiffres] = useState('');
    const [CommentairesDimensionnement, setCommentairesDimensionnement] = useState('');
    const [IndicateursDePerformance, setIndicateursDePerformance] = useState('');
    const [ElementsDeCalcul, setElementsDeCalcul] = useState('');

    const [Commentaires, setCommentaires] = useState('');
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
  const submitcarac=(e)=>{
    e.preventDefault();
    AddCaracteristiqueDuPoste(id,{ Execution,Expertise,Operationnel,decisions ,Production});  

  }
  const navigate = useNavigate();

  const onsubmitfinal=async(e)=>{
  

  e.preventDefault();
   await AddCompetencesMetier(id,{ niveauMetier1,niveauMetier2,niveauMetier3,niveauMetier4,niveauMetier5,niveauMetier6 });  
   await AddCompetencesManagerials(id,{NiveauManagerials1,NiveauManagerials2,NiveauManagerials3,NiveauManagerials4,NiveauManagerials5,NiveauManagerials6})
   await AddCompetencesComportementales(id,{NiveauComportementales1,NiveauComportementales2,NiveauComportementales3,NiveauComportementales4})
  swal("Good job!", "You Finished Your Post!", "success");
  // navigate("/dashboard")
}

    useEffect(()=>{
      getFiche(id)
   },[addFiche])
  return (
    <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 fixtable">
  <h6>Ajouter Fiche</h6>
</div>

  <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          addFiche({Categorie,titre,Description,SousCategorie });  
          setisOpen(true) 
           }}>
             
             <div class="form-group ">
<label for="formGroupExampleInput">Titre</label>
<input type="text" class="form-control" name="titre" onChange={(e) => settitre(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

<div class="form-group ">
<label for="formGroupExampleInput">Description</label>
<textarea class="form-control" name="Description" onChange={(e) => setDescription(e.target.value)} id="formGroupExampleInput" placeholder="Description"/>
</div>


             <div class="form-group ">
<label for="formGroupExampleInput">Categorie</label>
<select
class="form-select" 
value={Categorie}
            name='Categorie'
            onChange={(e) => setcategorie(e.target.value)}
          >
            <option className='option-type-profile'>SUPPORT</option>
            <option className='option-type-profile'>OPERATIONNEL</option>
            <option className='option-type-profile'>BUSINESS</option>
          </select>
</div>

<div class="form-group ">
<label for="formGroupExampleInput">Sous Categorie</label>
{Categorie=="SUPPORT"?<select
class="form-select" 
value={SousCategorie}
            name='SousCategorie'
            onChange={(e) => setSousCategorie(e.target.value)}
          >
            <option className='option-type-profile'>Finances</option>
            <option className='option-type-profile'>RH</option>
            <option className='option-type-profile'>Achats</option>
            <option className='option-type-profile'>QHSE</option>
            <option className='option-type-profile'>Exellence Operationnelle</option>
            <option className='option-type-profile'>Service Genereaux</option>
          </select>:Categorie=="OPERATIONNEL"?<select
class="form-select" 
value={SousCategorie}
            name='SousCategorie'
            onChange={(e) => setSousCategorie(e.target.value)}
          >
            <option className='option-type-profile'>SCM</option>
            <option className='option-type-profile'>Methodes et chiffrages</option>
            <option className='option-type-profile'>Qualite produit</option>
            <option className='option-type-profile'>Maintenance</option>
            <option className='option-type-profile'>Production</option>
          </select>:<select
class="form-select" 
value={SousCategorie}
            name='SousCategorie'
            onChange={(e) => setSousCategorie(e.target.value)}
          >
            <option className='option-type-profile'>Commercial</option>
            <option className='option-type-profile'>Assistance client</option>
          </select>}

</div>

{
    !Categorie|| !titre?
    <button class="btn btn-primary" disabled type="submit">Save</button>
:
<button class="btn btn-primary" type="submit">Save</button>

}

</form>



  </div>


  </div>
</div>
{isOpen?<div><div class="row fixrowmore">
  <div class="col-4">
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
              {myAutreAppelations}
            </tbody>
          </table>
         
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddAutreAppelations(id,{ AutreAppelations });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Autre Appelations</label>
<input type="text" class="form-control" name="AutreAppelations" onChange={(e) => setAutreAppelations(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !AutreAppelations?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-4">
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {Rattachment.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{x.RattachementsHierarchique}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{x.RattachementsFonctionnel}</span>
                 </td>
                 {/* <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td> */}
               </tr>
                )}
                
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddRattachements(id,{ RattachementsHierarchique,RattachementsFonctionnel });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Rattachements Hierarchique</label>
<input type="text" class="form-control" name="setRattachementsHierarchique" onChange={(e) => setRattachementsHierarchique(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Rattachements Fonctionnel</label>
<input type="text" class="form-control" name="setRattachementsFonctionnel" onChange={(e) => setRattachementsFonctionnel(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
{
    !RattachementsHierarchique || !RattachementsFonctionnel?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-4">
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
{myEtatDeFiche}
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddEtatDeFiche(id,{ EtatDeFiche });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Etat De Fiche</label>
<input type="text" class="form-control" name="EtatDeFiche" onChange={(e) => setEtatDeFiche(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !EtatDeFiche?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {FournisseursDuPoste.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Fournisseur}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{x.Inputs}</span>
                 </td>
                 {/* <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td> */}
               </tr>
                )}
             
        
 
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddFournisseursDuPoste(id,{ Fournisseur,Inputs });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Fournisseur</label>
<input type="text" class="form-control" name="Fournisseur" onChange={(e) => setFournisseur(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Inputs</label>
<input type="text" class="form-control" name="Inputs" onChange={(e) => setInputs(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
{
    !Fournisseur || !Inputs?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Clients du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Clients</th>
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {ClientsDuPoste.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Client}</span>
                 </td>
                 <td class="align-middle text-center">
                   <span class="text-secondary text-xs font-weight-bold">{x.Outputs}</span>
                 </td>
                 <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td>
               </tr>
                )}
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddClientsDuPoste(id,{ Client,Outputs });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Client</label>
<input type="text" class="form-control" name="Client" onChange={(e) => setClient(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Outputs</label>
<input type="text" class="form-control" name="Outputs" onChange={(e) => setOutputs(e.target.value)} id="formGroupExampleInput2" placeholder="Another input"/>
</div>
{
    !Client || !Outputs?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row fixrowmore">

  <div class="col-3">
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
        
              {AutreResponsabilite.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.responsability}</span>
                 </td>
                
                 <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td>
               </tr>
                )}
 
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddAutreResponsabilite(id,{ responsability });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Autre responsabilités</label>
<input type="text" class="form-control" name="responsability" onChange={(e) => setresponsability(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !responsability ?
    <button class="btn btn-primary" disabled type="submit">Add</button>
:
<button class="btn btn-primary" type="submit">Add</button>

}

</form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-9">
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
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
{Execution!=0? <td onClick={()=>setExecution(0)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Execution!=1? <td onClick={()=>setExecution(1)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Execution!=2? <td onClick={()=>setExecution(2)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Execution!=3? <td onClick={()=>setExecution(3)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Execution!=4? <td onClick={()=>setExecution(4)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Execution!=5? <td onClick={()=>setExecution(5)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExecution(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
{Expertise!=0? <td onClick={()=>setExpertise(0)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Expertise!=1? <td onClick={()=>setExpertise(1)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Expertise!=2? <td onClick={()=>setExpertise(2)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Expertise!=3? <td onClick={()=>setExpertise(3)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Expertise!=4? <td onClick={()=>setExpertise(4)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Expertise!=5? <td onClick={()=>setExpertise(5)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setExpertise(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
{Operationnel!=0? <td onClick={()=>setOperationnel(0)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Operationnel!=1? <td onClick={()=>setOperationnel(1)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Operationnel!=2? <td onClick={()=>setOperationnel(2)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Operationnel!=3? <td onClick={()=>setOperationnel(3)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Operationnel!=4? <td onClick={()=>setOperationnel(4)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Operationnel!=5? <td onClick={()=>setOperationnel(5)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setOperationnel(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
{decisions!=0? <td onClick={()=>setdecisions(0)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {decisions!=1? <td onClick={()=>setdecisions(1)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {decisions!=2? <td onClick={()=>setdecisions(2)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {decisions!=3? <td onClick={()=>setdecisions(3)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {decisions!=4? <td onClick={()=>setdecisions(4)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {decisions!=5? <td onClick={()=>setdecisions(5)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setdecisions(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
{Production!=0? <td onClick={()=>setProduction(0)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Production!=1? <td onClick={()=>setProduction(1)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
              {Production!=2? <td onClick={()=>setProduction(2)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Production!=3? <td onClick={()=>setProduction(3)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Production!=4? <td onClick={()=>setProduction(4)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {Production!=5? <td onClick={()=>setProduction(5)} className='fixonclicktable' scope="row"></td>:     <td onClick={()=>setProduction(0)} className='fixonclicktable colorTableChmp' scope="row"></td>}  
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
        <button className='btn btn-secondary' onClick={(e)=>submitcarac(e)}>Save</button>

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
 

 </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row fixrowmore">

  <div class="col-6">
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


 </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-6">
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
            {MyCompetencesTransverses.map((x,i)=>
                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.CompetencesTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.NiveauTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.DescriptionTransverses}</span>
                 </td>
                
                 <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td>
               </tr>
                )}
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddCompetencesTransverses(id,{ CompetencesTransverses,NiveauTransverses,DescriptionTransverses });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Competences</label>
<input type="text" class="form-control" name="CompetencesTransverses" onChange={(e) => setCompetencesTransverses(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">Niveau</label>
<input type="text" class="form-control" name="NiveauTransverses" onChange={(e) => setNiveauTransverses(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">Description</label>
<input type="text" class="form-control" name="DescriptionTransverses" onChange={(e) => setDescriptionTransverses(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !CompetencesTransverses ||!NiveauTransverses||!DescriptionTransverses?
    <button class="btn btn-primary" disabled type="submit">Ajouter</button>
:
<button class="btn btn-primary" type="submit">Ajouter</button>

}

</form>
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
                {DimensionnementDuPoste.map((x,i)=>
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
                
                 <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td>
               </tr>
                )}
             
           
            </tbody>
          </table> <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddDimensionnementDuPoste(id,{ NatureDeIndicateur,IndicateurDeDimensionnement,ElementsChiffres,CommentairesDimensionnement });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Nature De Indicateur</label>
<input type="text" class="form-control" name="NatureDeIndicateur" onChange={(e) => setNatureDeIndicateur(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">Indicateur De Dimensionnement</label>
<input type="text" class="form-control" name="IndicateurDeDimensionnement" onChange={(e) => setIndicateurDeDimensionnement(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">ElementsChiffres</label>
<input type="text" class="form-control" name="ElementsChiffres" onChange={(e) => setElementsChiffres(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">ElementsChiffres</label>
<input type="text" class="form-control" name="CommentairesDimensionnement" onChange={(e) => setCommentairesDimensionnement(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !NatureDeIndicateur ||!IndicateurDeDimensionnement||!ElementsChiffres || !CommentairesDimensionnement?
    <button class="btn btn-primary" disabled type="submit">Ajouter</button>
:
<button class="btn btn-primary" type="submit">Ajouter</button>

}

</form>
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
</th>

               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
                {MyIndicateursDePerformance.map((x,i)=>
                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.IndicateursDePerformance}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.ElementsDeCalcul}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Commentaires}</span>
                 </td>
                
                 <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td>
               </tr>
                )}
             
           
            </tbody>
          </table>
          <form className='fixecard'   onSubmit={(e) => {
          e.preventDefault();
          AddIndicateursDePerformance(id,{ IndicateursDePerformance,ElementsDeCalcul,Commentaires });  
             }}>
<div class="form-group ">
<label for="formGroupExampleInput">Indicateurs De Performance</label>
<input type="text" class="form-control" name="IndicateursDePerformance" onChange={(e) => setIndicateursDePerformance(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">Niveau</label>
<input type="text" class="form-control" name="ElementsDeCalcul" onChange={(e) => setElementsDeCalcul(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>
<div class="form-group ">
<label for="formGroupExampleInput">Commentaires</label>
<input type="text" class="form-control" name="Commentaires" onChange={(e) => setCommentaires(e.target.value)} id="formGroupExampleInput" placeholder="Example input"/>
</div>

{
    !IndicateursDePerformance ||!ElementsDeCalcul||!Commentaires?
    <button class="btn btn-primary" disabled type="submit">Ajouter</button>
:
<button class="btn btn-primary" type="submit">Ajouter</button>

}
<button class="btn btn-primary" onClick={(e) =>onsubmitfinal(e)}>Finish</button>



</form>
        </div>
      </div>
    </div>
  </div>
 
</div></div>:null}

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
</div>  )
}
const mapStateToProps = (state) => ({
  fiche: state.fiche,
});
export default  connect(mapStateToProps, {AddAutreAppelations,AddEtatDeFiche,AddRattachements, addFiche,AddClientsDuPoste,AddCaracteristiqueDuPoste,AddCompetencesManagerials,AddCompetencesComportementales,getFiche,AddFournisseursDuPoste,AddAutreResponsabilite,AddIndicateursDePerformance,AddDimensionnementDuPoste,AddCompetencesTransverses,AddCompetencesMetier }) (Test)