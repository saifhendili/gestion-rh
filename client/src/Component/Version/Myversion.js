import React,{useState,useEffect,Fragment} from 'react'
import {  getFiche} from '../../actions/fiche'
import Aside from '../Layout/Aside';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { getmyVersion } from '../../actions/fichev';
function Myversion({getmyVersion,getFiche,fiche:{fiche,loading,version,loadingv}}) {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        getFiche(searchParams.get("id"));
        getmyVersion(searchParams.get("id"),searchParams.get("v"))

      },[]);
      return loading || fiche === null||version===null||loadingv ? (
        <Spinner />
      ) : (
        <Fragment>
 <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<Link to={`/fiche?id=${searchParams.get("id")}`}>
  <img className='fixbuttonarraw' src="https://www.iconpacks.net/icons/2/free-icon-arrow-back-3783.png" alt="back" />
   back</Link>
<div class="row">
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0 ">
  <h5>Titre Poste: {fiche.titre}</h5>
</div>

  

  </div>


  </div>
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0">
  <h5>Classe: {version.myclass}</h5>
</div>

  </div>


  </div>
  <div class="col-12">
  <div class="card mb-4">
  <div class="card-header pb-0">
  <h5>Description: {version.Description}</h5>
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
              {version.AutreAppelations}
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
                 <span class="text-secondary text-xs font-weight-bold">{version.RattachementsHierarchique}</span>
                 </td>
                 <td class="align-middle ">
                 <span class="text-secondary text-xs font-weight-bold">{version.RattachementsFonctionnel}</span>
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
{version.EtatDeFiche}
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
            {version.FournisseursDuPoste.map((x,i)=>
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
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Clients</th>
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {version.ClientsDuPoste.map((x,i)=>
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
        
              {version.AutreResponsabilite.map((x,i)=>
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
                {version.niveauMetier1}
                </span>
                </td>
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus <br/> de son métier
</span>
                </td>
                
                <td class="align-middle ">
               
               {version.IllustrationCM?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM} </p>:null} 
               {version.IllustrationCM2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM2} </p>:null} 
               {version.IllustrationCM3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM3} </p>:null} 
               {version.IllustrationCM4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM4} </p>:null} 
               {version.IllustrationCM5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM5} </p>:null} 
               {version.IllustrationCM6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM6} </p>:null} 
               {version.IllustrationCM7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM7} </p>:null} 
               {version.IllustrationCM8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM8} </p>:null} 
               {version.IllustrationCM9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM9} </p>:null} 
               {version.IllustrationCM10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM10} </p>:null} 
               {version.IllustrationCM11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM11} </p>:null} 
               {version.IllustrationCM12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM12} </p>:null} 
               {version.IllustrationCM13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCM13} </p>:null} 
 
             </td>
                </tr>
                <tr>
 
 <td class="align-middle ">
 Connaissance des normes et <br/> certification	 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold">
    {version.niveauMetier2}
    </span>
 </td>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions <br/>liées: <br/> - au domaine d'activité de l'entreprise<br/> -  au domaine d'activité du poste concerné <br/>- au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle ">

                  {version.IllustrationCNormes?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes} </p>:null} 
                  {version.IllustrationCNormes1?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes1} </p>:null} 
                  {version.IllustrationCNormes2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes2} </p>:null} 
                  {version.IllustrationCNormes3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes3} </p>:null} 
                  {version.IllustrationCNormes4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes4} </p>:null} 
                  {version.IllustrationCNormes5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes5} </p>:null} 
                  {version.IllustrationCNormes6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes6} </p>:null} 
                  {version.IllustrationCNormes7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes7} </p>:null} 
                  {version.IllustrationCNormes8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes8} </p>:null} 
                  {version.IllustrationCNormes9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes9} </p>:null} 
                  {version.IllustrationCNormes10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes10} </p>:null} 
                  {version.IllustrationCNormes11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes11} </p>:null} 
                  {version.IllustrationCNormes12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes12} </p>:null} 
                  {version.IllustrationCNormes13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationCNormes13} </p>:null} 

                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br/>et de l'environnement externe		</span>
 </td>
 
 <td class="align-middle text-center">
{version.niveauMetier3}
</td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise: <br/> marché, produits et relations externes
</span>
 </td>
 <td class="align-middle ">
            
                  {version.IllustrationActivite?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite} </p>:null} 
                  {version.IllustrationActivite2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite2} </p>:null} 
                  {version.IllustrationActivite3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite3} </p>:null} 
                  {version.IllustrationActivite4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite4} </p>:null} 
                  {version.IllustrationActivite5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite5} </p>:null} 
                  {version.IllustrationActivite6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite6} </p>:null} 
                  {version.IllustrationActivite7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite7} </p>:null} 
                  {version.IllustrationActivite8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite8} </p>:null} 
                  {version.IllustrationActivite9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite9} </p>:null} 
                  {version.IllustrationActivite10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite10} </p>:null} 
                  {version.IllustrationActivite11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite11} </p>:null} 
                  {version.IllustrationActivite12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite12} </p>:null} 
                  {version.IllustrationActivite13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationActivite13} </p>:null} 


 
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br/>l'environnement  interne</span>
 </td>
 
 <td class="align-middle text-center">
{version.niveauMetier4} </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,<br/>  sa structure,sa culture et son fonctionnement <br/> général
</span>
 </td>
 
 <td class="align-middle ">
     

                    {version.IllustrationOrganisation?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation} </p>:null} 
                    {version.IllustrationOrganisation2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation2} </p>:null} 
                    {version.IllustrationOrganisation3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation3} </p>:null} 
                    {version.IllustrationOrganisation4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation4} </p>:null} 
                    {version.IllustrationOrganisation5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation5} </p>:null} 
                    {version.IllustrationOrganisation6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation6} </p>:null} 
                    {version.IllustrationOrganisation7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation7} </p>:null} 
                    {version.IllustrationOrganisation8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation8} </p>:null} 
                    {version.IllustrationOrganisation9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation9} </p>:null} 
                    {version.IllustrationOrganisation10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation10} </p>:null} 
                    {version.IllustrationOrganisation11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation11} </p>:null} 
                    {version.IllustrationOrganisation12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation12} </p>:null} 
                    {version.IllustrationOrganisation13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrganisation13} </p>:null} 
             
              
                </td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{version.niveauMetier5}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des <br/> bases de données liés au domaine d'activité du poste
</span>
 </td>
 <td class="align-middle ">
              
              {version.IllustrationSIBD?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD} </p>:null} 
              {version.IllustrationSIBD2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD2} </p>:null} 
              {version.IllustrationSIBD3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD3} </p>:null} 
              {version.IllustrationSIBD4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD4} </p>:null} 
              {version.IllustrationSIBD5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD5} </p>:null} 
              {version.IllustrationSIBD6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD6} </p>:null} 
              {version.IllustrationSIBD7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD7} </p>:null} 
              {version.IllustrationSIBD8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD8} </p>:null} 
              {version.IllustrationSIBD9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD9} </p>:null} 
              {version.IllustrationSIBD10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD10} </p>:null} 
              {version.IllustrationSIBD11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD11} </p>:null} 
              {version.IllustrationSIBD12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD12} </p>:null} 
              {version.IllustrationSIBD13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSIBD13} </p>:null} 

        
          </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 
 <td class="align-middle text-center">
   <span class="text-secondary text-xs font-weight-bold"> 
{version.niveauMetier6}</span>
 </td>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br/>  allemand, italien..) et connaissance des applications<br/>  informatiques de bureautique

</span>
 </td>
 
 <td class="align-middle ">
    
                    {version.IllustrationLinguistiquesBureautiques?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques2} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques3} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques4} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques5} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques6} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques7} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques8} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques9} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques10} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques11} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques12} </p>:null} 
                    {version.IllustrationLinguistiquesBureautiques13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLinguistiquesBureautiques13} </p>:null} 

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
      {version.Execution==1? <td className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {version.Execution==2? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {version.Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {version.Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {version.Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {version.Execution==6? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
      {version.Expertise!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Expertise!=2? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Expertise!=3? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Expertise!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Expertise!=5? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Expertise!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
      {version.Operationnel!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Operationnel!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Operationnel!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Operationnel!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Operationnel!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.Operationnel!=6? <td onClick className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
      {version.decisions!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.decisions!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.decisions!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.decisions!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.decisions!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {version.decisions!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
       {version.Production!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {version.Production!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {version.Production!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {version.Production!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {version.Production!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {version.Production!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
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
                  {version.NiveauComportementales1}</span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                <td class="align-middle ">

    
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation2} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation3} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation4} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation5} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation6} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation7} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation8} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation9} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation10} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation11} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation12} </p>:null} 
{version.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{version.Illustrationinnovation13} </p>:null} 

</td>
              
                </tr>
                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauComportementales2}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 <td class="align-middle ">


{version.IllustrationAgilit?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit} </p>:null} 
{version.IllustrationAgilit2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit2} </p>:null} 
{version.IllustrationAgilit3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit3} </p>:null} 
{version.IllustrationAgilit4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit4} </p>:null} 
{version.IllustrationAgilit5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit5} </p>:null} 
{version.IllustrationAgilit6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit6} </p>:null} 
{version.IllustrationAgilit7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit7} </p>:null} 
{version.IllustrationAgilit8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit8} </p>:null} 
{version.IllustrationAgilit9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit9} </p>:null} 
{version.IllustrationAgilit10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit10} </p>:null} 
{version.IllustrationAgilit11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit11} </p>:null} 
{version.IllustrationAgilit12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit12} </p>:null} 
{version.IllustrationAgilit13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationAgilit13} </p>:null} 



</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauComportementales3}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br/> d’atteindre son plein potentiel.
</span>
 </td>
 <td class="align-middle ">

{version.IllustrationForceCollectif?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif} </p>:null} 
{version.IllustrationForceCollectif2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif2} </p>:null} 
{version.IllustrationForceCollectif3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif3} </p>:null} 
{version.IllustrationForceCollectif4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif4} </p>:null} 
{version.IllustrationForceCollectif5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif5} </p>:null} 
{version.IllustrationForceCollectif6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif6} </p>:null} 
{version.IllustrationForceCollectif7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif7} </p>:null} 
{version.IllustrationForceCollectif8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif8} </p>:null} 
{version.IllustrationForceCollectif9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif9} </p>:null} 
{version.IllustrationForceCollectif10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif10} </p>:null} 
{version.IllustrationForceCollectif11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif11} </p>:null} 
{version.IllustrationForceCollectif12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif12} </p>:null} 
{version.IllustrationForceCollectif13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationForceCollectif13} </p>:null} 

</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauComportementales4}</span>
                </td>
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 <td class="align-middle ">
                
                {version.IllustrationRespectEngagement?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement} </p>:null} 
                {version.IllustrationRespectEngagement2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement2} </p>:null} 
                {version.IllustrationRespectEngagement3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement3} </p>:null} 
                {version.IllustrationRespectEngagement4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement4} </p>:null} 
                {version.IllustrationRespectEngagement5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement5} </p>:null} 
                {version.IllustrationRespectEngagement6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement6} </p>:null} 
                {version.IllustrationRespectEngagement7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement7} </p>:null} 
                {version.IllustrationRespectEngagement8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement8} </p>:null} 
                {version.IllustrationRespectEngagement9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement9} </p>:null} 
                {version.IllustrationRespectEngagement10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement10} </p>:null} 
                {version.IllustrationRespectEngagement11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement11} </p>:null} 
                {version.IllustrationRespectEngagement12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement12} </p>:null} 
                {version.IllustrationRespectEngagement13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationRespectEngagement13} </p>:null} 
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
                  {version.NiveauManagerials1}</span>
                </td>
             
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>
                <td class="align-middle ">
 
 {version.IllustrationOrientationstrategique?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique} </p>:null} 
 {version.IllustrationOrientationstrategique2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique2} </p>:null} 
 {version.IllustrationOrientationstrategique3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique3} </p>:null} 
 {version.IllustrationOrientationstrategique4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique4} </p>:null} 
 {version.IllustrationOrientationstrategique5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique5} </p>:null} 
 {version.IllustrationOrientationstrategique6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique6} </p>:null} 
 {version.IllustrationOrientationstrategique7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique7} </p>:null} 
 {version.IllustrationOrientationstrategique8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique8} </p>:null} 
 {version.IllustrationOrientationstrategique9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique9} </p>:null} 
 {version.IllustrationOrientationstrategique10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique10} </p>:null} 
 {version.IllustrationOrientationstrategique11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique11} </p>:null} 
 {version.IllustrationOrientationstrategique12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique12} </p>:null} 
 {version.IllustrationOrientationstrategique13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationOrientationstrategique13} </p>:null} 

</td>
              
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauManagerials2}</span>
                </td>
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>
 <td class="align-middle ">
                 
                    {version.IllustrationSensdesaffaires?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires} </p>:null} 
                    {version.IllustrationSensdesaffaires2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires2} </p>:null} 
                    {version.IllustrationSensdesaffaires3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires3} </p>:null} 
                    {version.IllustrationSensdesaffaires4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires4} </p>:null} 
                    {version.IllustrationSensdesaffaires5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires5} </p>:null} 
                    {version.IllustrationSensdesaffaires6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires6} </p>:null} 
                    {version.IllustrationSensdesaffaires7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires7} </p>:null} 
                    {version.IllustrationSensdesaffaires8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires8} </p>:null} 
                    {version.IllustrationSensdesaffaires9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires9} </p>:null} 
                    {version.IllustrationSensdesaffaires10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires10} </p>:null} 
                    {version.IllustrationSensdesaffaires11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires11} </p>:null} 
                    {version.IllustrationSensdesaffaires12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires12} </p>:null} 
                    {version.IllustrationSensdesaffaires13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationSensdesaffaires13} </p>:null} 
   
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauManagerials3}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>

 <td class="align-middle ">

                    {version.IllustrationLeadership?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership} </p>:null} 
                    {version.IllustrationLeadership2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership2} </p>:null} 
                    {version.IllustrationLeadership3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership3} </p>:null} 
                    {version.IllustrationLeadership4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership4} </p>:null} 
                    {version.IllustrationLeadership5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership5} </p>:null} 
                    {version.IllustrationLeadership6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership6} </p>:null} 
                    {version.IllustrationLeadership7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership7} </p>:null} 
                    {version.IllustrationLeadership8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership8} </p>:null} 
                    {version.IllustrationLeadership9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership9} </p>:null} 
                    {version.IllustrationLeadership10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership10} </p>:null} 
                    {version.IllustrationLeadership11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership11} </p>:null} 
                    {version.IllustrationLeadership12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership12} </p>:null} 
                    {version.IllustrationLeadership13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationLeadership13} </p>:null} 
           
              
                </td>
 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauManagerials4}</span>
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
                  {version.NiveauManagerials5}</span>
                </td> 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>
 <td class="align-middle ">
 
                    {version.IllustrationGestionOperationnelle?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle} </p>:null} 
                    {version.IllustrationGestionOperationnelle2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle2} </p>:null} 
                    {version.IllustrationGestionOperationnelle3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle3} </p>:null} 
                    {version.IllustrationGestionOperationnelle4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle4} </p>:null} 
                    {version.IllustrationGestionOperationnelle5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle5} </p>:null} 
                    {version.IllustrationGestionOperationnelle6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle6} </p>:null} 
                    {version.IllustrationGestionOperationnelle7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle7} </p>:null} 
                    {version.IllustrationGestionOperationnelle8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle8} </p>:null} 
                    {version.IllustrationGestionOperationnelle9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle9} </p>:null} 
                    {version.IllustrationGestionOperationnelle10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle10} </p>:null} 
                    {version.IllustrationGestionOperationnelle11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle11} </p>:null} 
                    {version.IllustrationGestionOperationnelle12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle12} </p>:null} 
                    {version.IllustrationGestionOperationnelle13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionOperationnelle13} </p>:null} 
     
                </td>

 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"> 
                  {version.NiveauManagerials6}</span>
                </td> 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>

 <td class="align-middle ">
 
                    {version.IllustrationGestionEquipe?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe} </p>:null} 
                    {version.IllustrationGestionEquipe2?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe2} </p>:null} 
                    {version.IllustrationGestionEquipe3?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe3} </p>:null} 
                    {version.IllustrationGestionEquipe4?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe4} </p>:null} 
                    {version.IllustrationGestionEquipe5?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe5} </p>:null} 
                    {version.IllustrationGestionEquipe6?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe6} </p>:null} 
                    {version.IllustrationGestionEquipe7?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe7} </p>:null} 
                    {version.IllustrationGestionEquipe8?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe8} </p>:null} 
                    {version.IllustrationGestionEquipe9?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe9} </p>:null} 
                    {version.IllustrationGestionEquipe10?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe10} </p>:null} 
                    {version.IllustrationGestionEquipe11?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe11} </p>:null} 
                    {version.IllustrationGestionEquipe12?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe12} </p>:null} 
                    {version.IllustrationGestionEquipe13?<p class="text-secondary text-xs font-weight-bold">-{version.IllustrationGestionEquipe13} </p>:null} 
   
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
            {version.CompetencesTransverses.map((x,i)=>
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
                {version.DimensionnementDuPoste.map((x,i)=>
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
                {version.IndicateursDePerformance.map((x,i)=>
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
   
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example">

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
  export default  connect(mapStateToProps, {getFiche,getmyVersion}) (Myversion)
