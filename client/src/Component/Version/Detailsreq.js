import React ,{Fragment,useEffect}from 'react'
import Aside from '../Layout/Aside';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { AcceptRequest, GetDetailsRequest } from '../../actions/fichev';
import { useNavigate } from "react-router-dom";

function Detailsreq({AcceptRequest,GetDetailsRequest,fiche:{loading,RequestVestion}}) {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        GetDetailsRequest(searchParams.get("id"));
       
      },[]);
  const navigate = useNavigate();
     
      const AcceptEditReq=async(e)=>{
        e.preventDefault();
      await  AcceptRequest(searchParams.get("id"))
      navigate("/RequestEdit")
      }
      return loading || RequestVestion === null ? (
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
  <h5>Description:<span  className="fixDescTitre">{RequestVestion.Description}</span></h5>
</div>

  

  </div>


  </div>
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0">
  <h5>Classe: {RequestVestion.myclass}</h5>
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
              {RequestVestion.AutreAppelations}
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
                 <tr >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{RequestVestion.RattachementsHierarchique}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{RequestVestion.RattachementsFonctionnel}</span>
                 </td>
                 {/* <td class="align-middle">
                   <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                     Delete
                   </a>
                 </td> */}
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
{RequestVestion.EtatDeFiche}
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
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {RequestVestion.FournisseursDuPoste.map((x,i)=>
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
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Clients</th>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {RequestVestion.ClientsDuPoste.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Client}</span>
                 </td>
                 <td class="align-middle text-center">
                   <span class="text-secondary text-xs font-weight-bold">{x.Outputs}</span>
                 </td>
               
               </tr>
                )}
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
        
              {RequestVestion.AutreResponsabilite.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.responsability}</span>
                 </td>
                
               </tr>
                )}
 
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
                
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                {RequestVestion.niveauMetier1}
                </span>
                </td>
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus <br/> de son métier
</span>
                </td>
                <td class="align-middle ">
               
               {RequestVestion.IllustrationCM?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM} </p>:null} 
               {RequestVestion.IllustrationCM2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM2} </p>:null} 
               {RequestVestion.IllustrationCM3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM3} </p>:null} 
               {RequestVestion.IllustrationCM4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM4} </p>:null} 
               {RequestVestion.IllustrationCM5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM5} </p>:null} 
               {RequestVestion.IllustrationCM6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM6} </p>:null} 
               {RequestVestion.IllustrationCM7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM7} </p>:null} 
               {RequestVestion.IllustrationCM8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM8} </p>:null} 
               {RequestVestion.IllustrationCM9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM9} </p>:null} 
               {RequestVestion.IllustrationCM10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM10} </p>:null} 
               {RequestVestion.IllustrationCM11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM11} </p>:null} 
               {RequestVestion.IllustrationCM12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM12} </p>:null} 
               {RequestVestion.IllustrationCM13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCM13} </p>:null} 
 
             </td>
              
                </tr>
                <tr>
 
 <td class="align-middle ">
 Connaissance des normes et <br/> certification	 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold">
    {RequestVestion.niveauMetier2}
    </span>
 </td>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions <br/>liées: <br/> - au domaine d'activité de l'entreprise<br/> -  au domaine d'activité du poste concerné <br/>- au domaine de certification exigé par l'entreprise

</span>

 </td>
 <td class="align-middle ">

                  {RequestVestion.IllustrationCNormes?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes} </p>:null} 
                  {RequestVestion.IllustrationCNormes1?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes1} </p>:null} 
                  {RequestVestion.IllustrationCNormes2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes2} </p>:null} 
                  {RequestVestion.IllustrationCNormes3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes3} </p>:null} 
                  {RequestVestion.IllustrationCNormes4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes4} </p>:null} 
                  {RequestVestion.IllustrationCNormes5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes5} </p>:null} 
                  {RequestVestion.IllustrationCNormes6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes6} </p>:null} 
                  {RequestVestion.IllustrationCNormes7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes7} </p>:null} 
                  {RequestVestion.IllustrationCNormes8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes8} </p>:null} 
                  {RequestVestion.IllustrationCNormes9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes9} </p>:null} 
                  {RequestVestion.IllustrationCNormes10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes10} </p>:null} 
                  {RequestVestion.IllustrationCNormes11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes11} </p>:null} 
                  {RequestVestion.IllustrationCNormes12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes12} </p>:null} 
                  {RequestVestion.IllustrationCNormes13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationCNormes13} </p>:null} 


         
            
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br/>et de l'environnement externe		</span>
 </td>
 
 <td class="align-middle text-center">
{RequestVestion.niveauMetier3}
</td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise: <br/> marché, produits et relations externes
</span>
 </td>
 <td class="align-middle ">
            
            {RequestVestion.IllustrationActivite?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite} </p>:null} 
            {RequestVestion.IllustrationActivite2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite2} </p>:null} 
            {RequestVestion.IllustrationActivite3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite3} </p>:null} 
            {RequestVestion.IllustrationActivite4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite4} </p>:null} 
            {RequestVestion.IllustrationActivite5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite5} </p>:null} 
            {RequestVestion.IllustrationActivite6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite6} </p>:null} 
            {RequestVestion.IllustrationActivite7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite7} </p>:null} 
            {RequestVestion.IllustrationActivite8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite8} </p>:null} 
            {RequestVestion.IllustrationActivite9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite9} </p>:null} 
            {RequestVestion.IllustrationActivite10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite10} </p>:null} 
            {RequestVestion.IllustrationActivite11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite11} </p>:null} 
            {RequestVestion.IllustrationActivite12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite12} </p>:null} 
            {RequestVestion.IllustrationActivite13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationActivite13} </p>:null} 



          </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br/>l'environnement  interne</span>
 </td>
 
 <td class="align-middle text-center">
{RequestVestion.niveauMetier4} </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,<br/>  sa structure,sa culture et son fonctionnement <br/> général
</span>
 </td>
 <td class="align-middle ">
     

                    {RequestVestion.IllustrationOrganisation?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation} </p>:null} 
                    {RequestVestion.IllustrationOrganisation2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation2} </p>:null} 
                    {RequestVestion.IllustrationOrganisation3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation3} </p>:null} 
                    {RequestVestion.IllustrationOrganisation4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation4} </p>:null} 
                    {RequestVestion.IllustrationOrganisation5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation5} </p>:null} 
                    {RequestVestion.IllustrationOrganisation6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation6} </p>:null} 
                    {RequestVestion.IllustrationOrganisation7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation7} </p>:null} 
                    {RequestVestion.IllustrationOrganisation8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation8} </p>:null} 
                    {RequestVestion.IllustrationOrganisation9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation9} </p>:null} 
                    {RequestVestion.IllustrationOrganisation10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation10} </p>:null} 
                    {RequestVestion.IllustrationOrganisation11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation11} </p>:null} 
                    {RequestVestion.IllustrationOrganisation12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation12} </p>:null} 
                    {RequestVestion.IllustrationOrganisation13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrganisation13} </p>:null} 
             
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{RequestVestion.niveauMetier5}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des <br/> bases de données liés au domaine d'activité du poste
</span>
 </td>
 
 <td class="align-middle ">
              
                    {RequestVestion.IllustrationSIBD?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD} </p>:null} 
                    {RequestVestion.IllustrationSIBD2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD2} </p>:null} 
                    {RequestVestion.IllustrationSIBD3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD3} </p>:null} 
                    {RequestVestion.IllustrationSIBD4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD4} </p>:null} 
                    {RequestVestion.IllustrationSIBD5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD5} </p>:null} 
                    {RequestVestion.IllustrationSIBD6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD6} </p>:null} 
                    {RequestVestion.IllustrationSIBD7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD7} </p>:null} 
                    {RequestVestion.IllustrationSIBD8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD8} </p>:null} 
                    {RequestVestion.IllustrationSIBD9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD9} </p>:null} 
                    {RequestVestion.IllustrationSIBD10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD10} </p>:null} 
                    {RequestVestion.IllustrationSIBD11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD11} </p>:null} 
                    {RequestVestion.IllustrationSIBD12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD12} </p>:null} 
                    {RequestVestion.IllustrationSIBD13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSIBD13} </p>:null} 

              
                </td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{RequestVestion.niveauMetier6}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br/>  allemand, italien..) et connaissance des applications<br/>  informatiques de bureautique

</span>
 </td>
 <td class="align-middle ">
    
    {RequestVestion.IllustrationLinguistiquesBureautiques?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques2} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques3} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques4} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques5} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques6} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques7} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques8} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques9} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques10} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques11} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques12} </p>:null} 
    {RequestVestion.IllustrationLinguistiquesBureautiques13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLinguistiquesBureautiques13} </p>:null} 

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
      {RequestVestion.Execution==1? <td className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {RequestVestion.Execution==2? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {RequestVestion.Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {RequestVestion.Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {RequestVestion.Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {RequestVestion.Execution==6? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
      {RequestVestion.Expertise!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Expertise!=2? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Expertise!=3? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Expertise!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Expertise!=5? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Expertise!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
      {RequestVestion.Operationnel!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Operationnel!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Operationnel!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Operationnel!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Operationnel!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.Operationnel!=6? <td onClick className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
      {RequestVestion.decisions!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.decisions!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.decisions!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.decisions!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.decisions!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {RequestVestion.decisions!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
       {RequestVestion.Production!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {RequestVestion.Production!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {RequestVestion.Production!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {RequestVestion.Production!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {RequestVestion.Production!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {RequestVestion.Production!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
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
                  {RequestVestion.NiveauComportementales1}</span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                
                <td class="align-middle ">

    
{RequestVestion.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation} </p>:null} 
{RequestVestion.Illustrationinnovation2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation2} </p>:null} 
{RequestVestion.Illustrationinnovation3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation3} </p>:null} 
{RequestVestion.Illustrationinnovation4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation4} </p>:null} 
{RequestVestion.Illustrationinnovation5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation5} </p>:null} 
{RequestVestion.Illustrationinnovation6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation6} </p>:null} 
{RequestVestion.Illustrationinnovation7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation7} </p>:null} 
{RequestVestion.Illustrationinnovation8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation8} </p>:null} 
{RequestVestion.Illustrationinnovation9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation9} </p>:null} 
{RequestVestion.Illustrationinnovation10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation10} </p>:null} 
{RequestVestion.Illustrationinnovation11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation11} </p>:null} 
{RequestVestion.Illustrationinnovation12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation12} </p>:null} 
{RequestVestion.Illustrationinnovation13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.Illustrationinnovation13} </p>:null} 

</td>
                </tr>
                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauComportementales2}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 
 <td class="align-middle ">


                    {RequestVestion.IllustrationAgilit?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit} </p>:null} 
                    {RequestVestion.IllustrationAgilit2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit2} </p>:null} 
                    {RequestVestion.IllustrationAgilit3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit3} </p>:null} 
                    {RequestVestion.IllustrationAgilit4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit4} </p>:null} 
                    {RequestVestion.IllustrationAgilit5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit5} </p>:null} 
                    {RequestVestion.IllustrationAgilit6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit6} </p>:null} 
                    {RequestVestion.IllustrationAgilit7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit7} </p>:null} 
                    {RequestVestion.IllustrationAgilit8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit8} </p>:null} 
                    {RequestVestion.IllustrationAgilit9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit9} </p>:null} 
                    {RequestVestion.IllustrationAgilit10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit10} </p>:null} 
                    {RequestVestion.IllustrationAgilit11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit11} </p>:null} 
                    {RequestVestion.IllustrationAgilit12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit12} </p>:null} 
                    {RequestVestion.IllustrationAgilit13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationAgilit13} </p>:null} 
                   


</td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauComportementales3}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br/> d’atteindre son plein potentiel.
</span>
 </td>
 <td class="align-middle ">

{RequestVestion.IllustrationForceCollectif?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif} </p>:null} 
{RequestVestion.IllustrationForceCollectif2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif2} </p>:null} 
{RequestVestion.IllustrationForceCollectif3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif3} </p>:null} 
{RequestVestion.IllustrationForceCollectif4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif4} </p>:null} 
{RequestVestion.IllustrationForceCollectif5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif5} </p>:null} 
{RequestVestion.IllustrationForceCollectif6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif6} </p>:null} 
{RequestVestion.IllustrationForceCollectif7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif7} </p>:null} 
{RequestVestion.IllustrationForceCollectif8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif8} </p>:null} 
{RequestVestion.IllustrationForceCollectif9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif9} </p>:null} 
{RequestVestion.IllustrationForceCollectif10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif10} </p>:null} 
{RequestVestion.IllustrationForceCollectif11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif11} </p>:null} 
{RequestVestion.IllustrationForceCollectif12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif12} </p>:null} 
{RequestVestion.IllustrationForceCollectif13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationForceCollectif13} </p>:null} 

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauComportementales4}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 <td class="align-middle ">
                
                {RequestVestion.IllustrationRespectEngagement?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement2} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement3} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement4} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement5} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement6} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement7} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement8} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement9} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement10} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement11} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement12} </p>:null} 
                {RequestVestion.IllustrationRespectEngagement13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationRespectEngagement13} </p>:null} 
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
                  {RequestVestion.NiveauManagerials1}</span>
                </td>
             
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>
                <td class="align-middle ">
 
 {RequestVestion.IllustrationOrientationstrategique?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique2} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique3} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique4} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique5} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique6} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique7} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique8} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique9} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique10} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique11} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique12} </p>:null} 
 {RequestVestion.IllustrationOrientationstrategique13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationOrientationstrategique13} </p>:null} 

</td>
              
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauManagerials2}</span>
                </td>
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>
 <td class="align-middle ">
                 
                 {RequestVestion.IllustrationSensdesaffaires?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires2} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires3} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires4} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires5} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires6} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires7} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires8} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires9} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires10} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires11} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires12} </p>:null} 
                 {RequestVestion.IllustrationSensdesaffaires13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationSensdesaffaires13} </p>:null} 

           
             </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauManagerials3}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>
 <td class="align-middle ">

                    {RequestVestion.IllustrationLeadership?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership} </p>:null} 
                    {RequestVestion.IllustrationLeadership2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership2} </p>:null} 
                    {RequestVestion.IllustrationLeadership3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership3} </p>:null} 
                    {RequestVestion.IllustrationLeadership4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership4} </p>:null} 
                    {RequestVestion.IllustrationLeadership5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership5} </p>:null} 
                    {RequestVestion.IllustrationLeadership6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership6} </p>:null} 
                    {RequestVestion.IllustrationLeadership7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership7} </p>:null} 
                    {RequestVestion.IllustrationLeadership8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership8} </p>:null} 
                    {RequestVestion.IllustrationLeadership9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership9} </p>:null} 
                    {RequestVestion.IllustrationLeadership10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership10} </p>:null} 
                    {RequestVestion.IllustrationLeadership11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership11} </p>:null} 
                    {RequestVestion.IllustrationLeadership12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership12} </p>:null} 
                    {RequestVestion.IllustrationLeadership13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationLeadership13} </p>:null} 
           
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauManagerials4}</span>
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
                  {RequestVestion.NiveauManagerials5}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>
 <td class="align-middle "  >
 
 {RequestVestion.IllustrationGestionOperationnelle?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle2} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle3} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle4} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle5} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle6} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle7} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle8} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle9} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle10} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle11} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle12} </p>:null} 
 {RequestVestion.IllustrationGestionOperationnelle13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionOperationnelle13} </p>:null} 

</td>

 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {RequestVestion.NiveauManagerials6}</span>
                </td> 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>
 <td class="align-middle ">
 
                    {RequestVestion.IllustrationGestionEquipe?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe2?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe2} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe3?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe3} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe4?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe4} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe5?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe5} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe6?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe6} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe7?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe7} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe8?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe8} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe9?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe9} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe10?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe10} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe11?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe11} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe12?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe12} </p>:null} 
                    {RequestVestion.IllustrationGestionEquipe13?<p class="text-secondary text-xs font-weight-bold">-{RequestVestion.IllustrationGestionEquipe13} </p>:null} 
   
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
            {RequestVestion.CompetencesTransverses.map((x,i)=>
                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.CompetencesTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.NiveauTransverses}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.DescriptionTransverses}</span>
                 </td>
                
               
               </tr>
                )}
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
                {RequestVestion.DimensionnementDuPoste.map((x,i)=>
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
                
               
               </tr>
                )}
             
           
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
                {RequestVestion.IndicateursDePerformance.map((x,i)=>
                 <tr key={i} >
                
             
                <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.IndicateursDePerformance}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.ElementsDeCalcul}</span>
                 </td>  <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Commentaires}</span>
                 </td>
                
                
               </tr>
                )}
             
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <button onClick={e=>AcceptEditReq(e)} className='btn btn-primary'>Accept</button>

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
  export default  connect(mapStateToProps, {AcceptRequest,GetDetailsRequest}) (Detailsreq)