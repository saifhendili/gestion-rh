import React,{useState,useEffect,Fragment} from 'react'
import {  getFiche} from '../../actions/fiche'
import Aside from '../Layout/Aside';
import { Link, useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { getullistrationMangerials,getullistrationTechnique,GetUComportementales, getVersion } from '../../actions/fichev';
function GetDetailsFiche({getVersion,getullistrationMangerials,getullistrationTechnique,GetUComportementales,getFiche,fiche:{fiche,loading,versions,uteck,umanagerials,ucompotementales}}) {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        getFiche(searchParams.get("id"));
        getVersion(searchParams.get("id"))
        getullistrationMangerials()
        getullistrationTechnique()
        GetUComportementales()
      },[]);

      return loading || fiche === null||versions===null ? (
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
  <div class="card-header pb-0 ">
  <h5>Titre Poste: <span className='fixDescTitre'>{fiche.titre}</span></h5>
</div>

  

  </div>


  </div>
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 ">
  <h5>Description:<span className="fixDescTitre"> {fiche.Description}</span></h5>

</div>

  

  </div>


  </div>
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 ">
  <h5>Classe: {fiche.myclass}</h5>

</div>

  

  </div>


  </div>



  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 ">
  <h5>Profile: {fiche.profil}</h5>

</div>

  

  </div>


  </div>



  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 ">
  <h5>Exigence: {fiche.exigence}</h5>

</div>

  

  </div>


  </div>





</div>
<div class="row fixrowmore">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6 className='colorwhite'>Autres appellations</h6>
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
              {fiche.AutreAppelations}
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
        <h6 className='colorwhite'>Rattachements</h6>
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
                 <tr  >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold">{fiche.RattachementsHierarchique}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{fiche.RattachementsFonctionnel}</span>
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
        <h6 className='colorwhite'>Etat de la fiche</h6>
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
{fiche.EtatDeFiche}
            </tbody>
          </table>
      
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row fixrowmore fourniclient" >
<div class="col-6">
    <div class="card mb-4">
   
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0 ">
          <table class="table align-items-center mb-0 mt-0 ">
            <thead className=''>
              <tr  className='card-header pb-0 fixnavf  '>

              <th class=" text-uppercase text-secondary text-xxs font-weight-bolder colorwhite fixchampf ">Fournisseurs</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder colorwhite fixchampf">Inputs</th>
               
              </tr>
            </thead>
            <tbody>
            {fiche.FournisseursDuPoste.map((x,i)=>
                 <tr className='' key={i} >
                
             
                 <td class="align-middle  ">
                 <span class="text-secondary text-xs font-weight-bold  ">{x.Fournisseur}</span>
                 </td>
                 <td class="align-middle">
                 <span class="text-secondary text-xs font-weight-bold ">{x.Inputs}</span>
                 </td>
            
                
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
   
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0 ">
          <table class="table align-items-center mb-0 mt-0 ">
            <thead>
              <tr  className='fixnavf '>
                <th class=" text-uppercase text-secondary text-xxs font-weight-bolder colorwhite fixchampf">Clients</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder  colorwhite fixchampf">Outputs</th>
               
              </tr>
            </thead>
            <tbody>
            {fiche.ClientsDuPoste.map((el,j)=>
                 <tr className='' key={j} >
                 <Fragment>
                  <td class="align-middle text-center text-sm">
                  <span class="text-secondary text-xs font-weight-bold ">{el.Client}</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold ">{el.Outputs}</span>
                  </td>
                  </Fragment>
                
            
                
               </tr>
                )}
             
        
 
            </tbody>
          </table>
          {/* <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Clients</th>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
              </tr>
            </thead>
            <tbody>
            {fiche..map((x,i)=>
                 <tr key={i} >
                
             
               
           
               </tr>
                )}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row fixrowmore">

  <div class="col-12">  
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6 className='colorwhite'>Autre responsabilités</h6>
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
        <h6 className='colorwhite'>Compétences Techniques</h6>
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
                {fiche.niveauMetier1}
                </span>
                </td>
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus <br/> de son métier
</span>
                </td>
                <td class="align-middle ">
               
                  {fiche.IllustrationCM?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM} </p>:null} 
                  {fiche.IllustrationCM2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM2} </p>:null} 
                  {fiche.IllustrationCM3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM3} </p>:null} 
                  {fiche.IllustrationCM4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM4} </p>:null} 
                  {fiche.IllustrationCM5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM5} </p>:null} 
                  {fiche.IllustrationCM6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM6} </p>:null} 
                  {fiche.IllustrationCM7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM7} </p>:null} 
                  {fiche.IllustrationCM8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM8} </p>:null} 
                  {fiche.IllustrationCM9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM9} </p>:null} 
                  {fiche.IllustrationCM10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM10} </p>:null} 
                  {fiche.IllustrationCM11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM11} </p>:null} 
                  {fiche.IllustrationCM12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM12} </p>:null} 
                  {fiche.IllustrationCM13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCM13} </p>:null} 
    
                </td>
              
                </tr>
                <tr>
 
 <td class="align-middle ">
 Connaissance des normes et <br/> certification	 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold">
    {fiche.niveauMetier2}
    </span>
 </td>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions <br/>liées: <br/> - au domaine d'activité de l'entreprise<br/> -  au domaine d'activité du poste concerné <br/>- au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle ">

                  {fiche.IllustrationCNormes?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes} </p>:null} 
                  {fiche.IllustrationCNormes1?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes1} </p>:null} 
                  {fiche.IllustrationCNormes2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes2} </p>:null} 
                  {fiche.IllustrationCNormes3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes3} </p>:null} 
                  {fiche.IllustrationCNormes4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes4} </p>:null} 
                  {fiche.IllustrationCNormes5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes5} </p>:null} 
                  {fiche.IllustrationCNormes6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes6} </p>:null} 
                  {fiche.IllustrationCNormes7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes7} </p>:null} 
                  {fiche.IllustrationCNormes8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes8} </p>:null} 
                  {fiche.IllustrationCNormes9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes9} </p>:null} 
                  {fiche.IllustrationCNormes10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes10} </p>:null} 
                  {fiche.IllustrationCNormes11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes11} </p>:null} 
                  {fiche.IllustrationCNormes12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes12} </p>:null} 
                  {fiche.IllustrationCNormes13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationCNormes13} </p>:null} 



                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br/>et de l'environnement externe		</span>
 </td>
 
 <td class="align-middle text-center">
{fiche.niveauMetier3}
</td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise: <br/> marché, produits et relations externes
</span>
 </td>
 
 <td class="align-middle ">
            
                  {fiche.IllustrationActivite?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite} </p>:null} 
                  {fiche.IllustrationActivite2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite2} </p>:null} 
                  {fiche.IllustrationActivite3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite3} </p>:null} 
                  {fiche.IllustrationActivite4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite4} </p>:null} 
                  {fiche.IllustrationActivite5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite5} </p>:null} 
                  {fiche.IllustrationActivite6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite6} </p>:null} 
                  {fiche.IllustrationActivite7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite7} </p>:null} 
                  {fiche.IllustrationActivite8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite8} </p>:null} 
                  {fiche.IllustrationActivite9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite9} </p>:null} 
                  {fiche.IllustrationActivite10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite10} </p>:null} 
                  {fiche.IllustrationActivite11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite11} </p>:null} 
                  {fiche.IllustrationActivite12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite12} </p>:null} 
                  {fiche.IllustrationActivite13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationActivite13} </p>:null} 


 
                </td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br/>l'environnement  interne</span>
 </td>
 
 <td class="align-middle text-center">
{fiche.niveauMetier4} </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,<br/>  sa structure,sa culture et son fonctionnement <br/> général
</span>
 </td>
 <td class="align-middle ">
     

                    {fiche.IllustrationOrganisation?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation} </p>:null} 
                    {fiche.IllustrationOrganisation2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation2} </p>:null} 
                    {fiche.IllustrationOrganisation3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation3} </p>:null} 
                    {fiche.IllustrationOrganisation4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation4} </p>:null} 
                    {fiche.IllustrationOrganisation5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation5} </p>:null} 
                    {fiche.IllustrationOrganisation6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation6} </p>:null} 
                    {fiche.IllustrationOrganisation7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation7} </p>:null} 
                    {fiche.IllustrationOrganisation8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation8} </p>:null} 
                    {fiche.IllustrationOrganisation9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation9} </p>:null} 
                    {fiche.IllustrationOrganisation10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation10} </p>:null} 
                    {fiche.IllustrationOrganisation11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation11} </p>:null} 
                    {fiche.IllustrationOrganisation12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation12} </p>:null} 
                    {fiche.IllustrationOrganisation13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrganisation13} </p>:null} 
             
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{fiche.niveauMetier5}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des <br/> bases de données liés au domaine d'activité du poste
</span>
 </td>
 <td class="align-middle ">
              
                    {fiche.IllustrationSIBD?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD} </p>:null} 
                    {fiche.IllustrationSIBD2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD2} </p>:null} 
                    {fiche.IllustrationSIBD3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD3} </p>:null} 
                    {fiche.IllustrationSIBD4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD4} </p>:null} 
                    {fiche.IllustrationSIBD5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD5} </p>:null} 
                    {fiche.IllustrationSIBD6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD6} </p>:null} 
                    {fiche.IllustrationSIBD7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD7} </p>:null} 
                    {fiche.IllustrationSIBD8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD8} </p>:null} 
                    {fiche.IllustrationSIBD9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD9} </p>:null} 
                    {fiche.IllustrationSIBD10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD10} </p>:null} 
                    {fiche.IllustrationSIBD11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD11} </p>:null} 
                    {fiche.IllustrationSIBD12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD12} </p>:null} 
                    {fiche.IllustrationSIBD13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSIBD13} </p>:null} 

              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{fiche.niveauMetier6}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br/>  allemand, italien..) et connaissance des applications<br/>  informatiques de bureautique

</span>
 </td>
 <td class="align-middle ">
    
                    {fiche.IllustrationLinguistiquesBureautiques?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques2} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques3} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques4} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques5} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques6} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques7} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques8} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques9} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques10} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques11} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques12} </p>:null} 
                    {fiche.IllustrationLinguistiquesBureautiques13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLinguistiquesBureautiques13} </p>:null} 

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
        <h6 className='colorwhite'>Compétences comportementales
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
                  {fiche.NiveauComportementales1}</span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>

                <td class="align-middle ">

    
                    {fiche.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation} </p>:null} 
                    {fiche.Illustrationinnovation2?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation2} </p>:null} 
                    {fiche.Illustrationinnovation3?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation3} </p>:null} 
                    {fiche.Illustrationinnovation4?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation4} </p>:null} 
                    {fiche.Illustrationinnovation5?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation5} </p>:null} 
                    {fiche.Illustrationinnovation6?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation6} </p>:null} 
                    {fiche.Illustrationinnovation7?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation7} </p>:null} 
                    {fiche.Illustrationinnovation8?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation8} </p>:null} 
                    {fiche.Illustrationinnovation9?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation9} </p>:null} 
                    {fiche.Illustrationinnovation10?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation10} </p>:null} 
                    {fiche.Illustrationinnovation11?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation11} </p>:null} 
                    {fiche.Illustrationinnovation12?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation12} </p>:null} 
                    {fiche.Illustrationinnovation13?<p class="text-secondary text-xs font-weight-bold">-{fiche.Illustrationinnovation13} </p>:null} 

              </td>
                </tr>
                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauComportementales2}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 <td class="align-middle ">


                    {fiche.IllustrationAgilit?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit} </p>:null} 
                    {fiche.IllustrationAgilit2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit2} </p>:null} 
                    {fiche.IllustrationAgilit3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit3} </p>:null} 
                    {fiche.IllustrationAgilit4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit4} </p>:null} 
                    {fiche.IllustrationAgilit5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit5} </p>:null} 
                    {fiche.IllustrationAgilit6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit6} </p>:null} 
                    {fiche.IllustrationAgilit7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit7} </p>:null} 
                    {fiche.IllustrationAgilit8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit8} </p>:null} 
                    {fiche.IllustrationAgilit9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit9} </p>:null} 
                    {fiche.IllustrationAgilit10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit10} </p>:null} 
                    {fiche.IllustrationAgilit11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit11} </p>:null} 
                    {fiche.IllustrationAgilit12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit12} </p>:null} 
                    {fiche.IllustrationAgilit13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationAgilit13} </p>:null} 
                   


</td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauComportementales3}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br/> d’atteindre son plein potentifiche.
</span>
 </td>
 
 <td class="align-middle ">

                    {fiche.IllustrationForceCollectif?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif} </p>:null} 
                    {fiche.IllustrationForceCollectif2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif2} </p>:null} 
                    {fiche.IllustrationForceCollectif3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif3} </p>:null} 
                    {fiche.IllustrationForceCollectif4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif4} </p>:null} 
                    {fiche.IllustrationForceCollectif5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif5} </p>:null} 
                    {fiche.IllustrationForceCollectif6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif6} </p>:null} 
                    {fiche.IllustrationForceCollectif7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif7} </p>:null} 
                    {fiche.IllustrationForceCollectif8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif8} </p>:null} 
                    {fiche.IllustrationForceCollectif9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif9} </p>:null} 
                    {fiche.IllustrationForceCollectif10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif10} </p>:null} 
                    {fiche.IllustrationForceCollectif11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif11} </p>:null} 
                    {fiche.IllustrationForceCollectif12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif12} </p>:null} 
                    {fiche.IllustrationForceCollectif13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationForceCollectif13} </p>:null} 
                   
                </td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauComportementales4}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
  
 <td class="align-middle ">
                
                    {fiche.IllustrationRespectEngagement?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement} </p>:null} 
                    {fiche.IllustrationRespectEngagement2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement2} </p>:null} 
                    {fiche.IllustrationRespectEngagement3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement3} </p>:null} 
                    {fiche.IllustrationRespectEngagement4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement4} </p>:null} 
                    {fiche.IllustrationRespectEngagement5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement5} </p>:null} 
                    {fiche.IllustrationRespectEngagement6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement6} </p>:null} 
                    {fiche.IllustrationRespectEngagement7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement7} </p>:null} 
                    {fiche.IllustrationRespectEngagement8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement8} </p>:null} 
                    {fiche.IllustrationRespectEngagement9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement9} </p>:null} 
                    {fiche.IllustrationRespectEngagement10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement10} </p>:null} 
                    {fiche.IllustrationRespectEngagement11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement11} </p>:null} 
                    {fiche.IllustrationRespectEngagement12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement12} </p>:null} 
                    {fiche.IllustrationRespectEngagement13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationRespectEngagement13} </p>:null} 
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
        <h6 className='colorwhite'>Compétences managériales</h6>
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
                  {fiche.NiveauManagerials1}</span>
                </td>
             
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>

                <td class="align-middle ">
 
                    {fiche.IllustrationOrientationstrategique?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique} </p>:null} 
                    {fiche.IllustrationOrientationstrategique2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique2} </p>:null} 
                    {fiche.IllustrationOrientationstrategique3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique3} </p>:null} 
                    {fiche.IllustrationOrientationstrategique4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique4} </p>:null} 
                    {fiche.IllustrationOrientationstrategique5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique5} </p>:null} 
                    {fiche.IllustrationOrientationstrategique6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique6} </p>:null} 
                    {fiche.IllustrationOrientationstrategique7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique7} </p>:null} 
                    {fiche.IllustrationOrientationstrategique8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique8} </p>:null} 
                    {fiche.IllustrationOrientationstrategique9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique9} </p>:null} 
                    {fiche.IllustrationOrientationstrategique10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique10} </p>:null} 
                    {fiche.IllustrationOrientationstrategique11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique11} </p>:null} 
                    {fiche.IllustrationOrientationstrategique12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique12} </p>:null} 
                    {fiche.IllustrationOrientationstrategique13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationOrientationstrategique13} </p>:null} 
        
                </td>
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauManagerials2}</span>
                </td>
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>

 <td class="align-middle ">
                 
                    {fiche.IllustrationSensdesaffaires?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires} </p>:null} 
                    {fiche.IllustrationSensdesaffaires2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires2} </p>:null} 
                    {fiche.IllustrationSensdesaffaires3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires3} </p>:null} 
                    {fiche.IllustrationSensdesaffaires4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires4} </p>:null} 
                    {fiche.IllustrationSensdesaffaires5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires5} </p>:null} 
                    {fiche.IllustrationSensdesaffaires6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires6} </p>:null} 
                    {fiche.IllustrationSensdesaffaires7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires7} </p>:null} 
                    {fiche.IllustrationSensdesaffaires8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires8} </p>:null} 
                    {fiche.IllustrationSensdesaffaires9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires9} </p>:null} 
                    {fiche.IllustrationSensdesaffaires10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires10} </p>:null} 
                    {fiche.IllustrationSensdesaffaires11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires11} </p>:null} 
                    {fiche.IllustrationSensdesaffaires12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires12} </p>:null} 
                    {fiche.IllustrationSensdesaffaires13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationSensdesaffaires13} </p>:null} 
   
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauManagerials3}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>

 <td class="align-middle ">

                    {fiche.IllustrationLeadership?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership} </p>:null} 
                    {fiche.IllustrationLeadership2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership2} </p>:null} 
                    {fiche.IllustrationLeadership3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership3} </p>:null} 
                    {fiche.IllustrationLeadership4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership4} </p>:null} 
                    {fiche.IllustrationLeadership5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership5} </p>:null} 
                    {fiche.IllustrationLeadership6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership6} </p>:null} 
                    {fiche.IllustrationLeadership7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership7} </p>:null} 
                    {fiche.IllustrationLeadership8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership8} </p>:null} 
                    {fiche.IllustrationLeadership9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership9} </p>:null} 
                    {fiche.IllustrationLeadership10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership10} </p>:null} 
                    {fiche.IllustrationLeadership11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership11} </p>:null} 
                    {fiche.IllustrationLeadership12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership12} </p>:null} 
                    {fiche.IllustrationLeadership13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationLeadership13} </p>:null} 
           
              
                </td>
 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauManagerials4}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à persuader, convaincre, impressionner et faire des compromis avec les autres afin de les fédérer vers ses idées et points de vue	</span>
 </td>

 <td class="align-middle ">
 
                    {/* {fiche.IllustrationInfluence?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence} </p>:null} 
                    {fiche.IllustrationInfluence2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence2} </p>:null} 
                    {fiche.IllustrationInfluence3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence3} </p>:null} 
                    {fiche.IllustrationInfluence4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence4} </p>:null} 
                    {fiche.IllustrationInfluence5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence5} </p>:null} 
                    {fiche.IllustrationInfluence6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence6} </p>:null} 
                    {fiche.IllustrationInfluence7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence7} </p>:null} 
                    {fiche.IllustrationInfluence8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence8} </p>:null} 
                    {fiche.IllustrationInfluence9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence9} </p>:null} 
                    {fiche.IllustrationInfluence10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence10} </p>:null} 
                    {fiche.IllustrationInfluence11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence11} </p>:null} 
                    {fiche.IllustrationInfluence12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence12} </p>:null} 
                    {fiche.IllustrationInfluence13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationInfluence13} </p>:null} 
           
               */}
                </td>
 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion opérationnelle	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauManagerials5}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>
 <td class="align-middle ">
 
                    {fiche.IllustrationGestionOperationnelle?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle2} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle3} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle4} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle5} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle6} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle7} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle8} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle9} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle10} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle11} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle12} </p>:null} 
                    {fiche.IllustrationGestionOperationnelle13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionOperationnelle13} </p>:null} 
     
                </td>

 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {fiche.NiveauManagerials6}</span>
                </td> 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>
 <td class="align-middle ">
 
                    {fiche.IllustrationGestionEquipe?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe} </p>:null} 
                    {fiche.IllustrationGestionEquipe2?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe2} </p>:null} 
                    {fiche.IllustrationGestionEquipe3?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe3} </p>:null} 
                    {fiche.IllustrationGestionEquipe4?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe4} </p>:null} 
                    {fiche.IllustrationGestionEquipe5?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe5} </p>:null} 
                    {fiche.IllustrationGestionEquipe6?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe6} </p>:null} 
                    {fiche.IllustrationGestionEquipe7?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe7} </p>:null} 
                    {fiche.IllustrationGestionEquipe8?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe8} </p>:null} 
                    {fiche.IllustrationGestionEquipe9?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe9} </p>:null} 
                    {fiche.IllustrationGestionEquipe10?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe10} </p>:null} 
                    {fiche.IllustrationGestionEquipe11?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe11} </p>:null} 
                    {fiche.IllustrationGestionEquipe12?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe12} </p>:null} 
                    {fiche.IllustrationGestionEquipe13?<p class="text-secondary text-xs font-weight-bold">-{fiche.IllustrationGestionEquipe13} </p>:null} 
   
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
        <h6 className='colorwhite'>Compétences transverses</h6>
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
            {fiche.CompetencesTransverses.map((x,i)=>
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
        <h6 className='colorwhite'>Caractéristiques du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">

            <tbody>
       
              <tr>
              <td>
Execution</td>
      {fiche.Execution==1? <td className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {fiche.Execution==2? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {fiche.Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {fiche.Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {fiche.Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {fiche.Execution==6? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
      {fiche.Expertise!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Expertise!=2? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Expertise!=3? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Expertise!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Expertise!=5? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Expertise!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
      {fiche.Operationnel!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Operationnel!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Operationnel!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Operationnel!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Operationnel!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.Operationnel!=6? <td onClick className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
      {fiche.decisions!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.decisions!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.decisions!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.decisions!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.decisions!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {fiche.decisions!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
       {fiche.Production!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {fiche.Production!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {fiche.Production!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {fiche.Production!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {fiche.Production!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {fiche.Production!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
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
        <h6 className='colorwhite'>DIMENSIONNEMENT DU POSTE</h6>
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
        <h6 className='colorwhite'>Indicateurs de performance</h6>
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
                {fiche.IndicateursDePerformance.map((x,i)=>
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
  <nav aria-label="Page navigation example">
  
  <ul class="pagination justify-content-center">
  <h5 className=''>Version :</h5>
  {versions.map((x,i)=>   
    <Link to={`/myversion?id=${searchParams.get("id")}&v=${x.nbversion}`}> <li key={i} class="page-item"><a class="page-link" href="#">{x.nbversion}</a></li></Link>

)}
  
  </ul>
</nav>
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
  export default  connect(mapStateToProps, {getFiche,getVersion,getullistrationMangerials,getullistrationTechnique,GetUComportementales,}) (GetDetailsFiche)