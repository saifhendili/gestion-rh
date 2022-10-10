import React, { useRef, Fragment } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  state = {

    
  };

render() {
  return(
        <Fragment>
    <div class="g-sidenav-show   bg-gray-100">
 
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Titre</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{this.props.fiche?.titre}</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">{this.props.fiche2?.titre}</th>
              </tr>
            </thead>
            <tbody>
          
           
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Classe</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{this.props.fiche?.myclass}</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">{this.props.fiche2?.myclass}</th>
              </tr>
            </thead>
            <tbody>
          
           
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Rattachements</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rattachements Hierarchique</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Rattachements Fonctionnel</th>
              </tr>
            </thead>
            <tbody>
          <tr>
          <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">{this.props.fiche?.RattachementsHierarchique}	</span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">{this.props.fiche?.RattachementsFonctionnel}	</span>
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
        <h6>Rattachements</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rattachements Hierarchique</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Rattachements Fonctionnel</th>
              </tr>
            </thead>
            <tbody>
          <tr>
          <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">{this.props.fiche2?.RattachementsHierarchique}	</span>
                </td>
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">{this.props.fiche2?.RattachementsFonctionnel}	</span>
                </td>
          </tr>
           
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-6">
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
                  <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissances Métier	</span>
                </td>
                
                {this.props.fiche?.niveauMetier1>this.props.fiche2?.niveauMetier1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class=" colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier1}
                 </span>
                 </td>: this.props.fiche?.niveauMetier1<this.props.fiche2?.niveauMetier1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier1}
                </span>
                </td>:<td class=" align-middle text-center egalitefiche">
                   <span  class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier1}
                 </span>
                 </td>} 
            
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold back_totheline">Connaître les techniques relatives aux processus de son métier
</span>
                </td>
                <td class="align-middle ">
                
                {this.props.fiche?.IllustrationCM?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM} </p>:null} 
                {this.props.fiche?.IllustrationCM2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM2} </p>:null} 
                {this.props.fiche?.IllustrationCM3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM3} </p>:null} 
                {this.props.fiche?.IllustrationCM4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM4} </p>:null} 
                {this.props.fiche?.IllustrationCM5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM5} </p>:null} 
                {this.props.fiche?.IllustrationCM6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM6} </p>:null} 
                {this.props.fiche?.IllustrationCM7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM7} </p>:null} 
                {this.props.fiche?.IllustrationCM8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM8} </p>:null} 
                {this.props.fiche?.IllustrationCM9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM9} </p>:null} 
                {this.props.fiche?.IllustrationCM10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM10} </p>:null} 
                {this.props.fiche?.IllustrationCM11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM11} </p>:null} 
                {this.props.fiche?.IllustrationCM12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM12} </p>:null} 
                {this.props.fiche?.IllustrationCM13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCM13} </p>:null} 

        
              </td>
              
                </tr>
                <tr>
 
 <td class="text-secondary text-xs font-weight-bold back_totheline">
 Connaissance des normes et certification	 </td>
 

 {this.props.fiche?.niveauMetier2>this.props.fiche2?.niveauMetier2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier2}
                 </span>
                 </td>: this.props.fiche?.niveauMetier2<this.props.fiche2?.niveauMetier2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier2}
                 </span>
                 </td>} 
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance des normes, règles et instructions liées:- au domaine d'activité de l'entreprise -  au domaine d'activité du poste concerné - au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle ">

{this.props.fiche?.IllustrationCNormes?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes} </p>:null} 
{this.props.fiche?.IllustrationCNormes1?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes1} </p>:null} 
{this.props.fiche?.IllustrationCNormes2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes2} </p>:null} 
{this.props.fiche?.IllustrationCNormes3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes3} </p>:null} 
{this.props.fiche?.IllustrationCNormes4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes4} </p>:null} 
{this.props.fiche?.IllustrationCNormes5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes5} </p>:null} 
{this.props.fiche?.IllustrationCNormes6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes6} </p>:null} 
{this.props.fiche?.IllustrationCNormes7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes7} </p>:null} 
{this.props.fiche?.IllustrationCNormes8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes8} </p>:null} 
{this.props.fiche?.IllustrationCNormes9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes9} </p>:null} 
{this.props.fiche?.IllustrationCNormes10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes10} </p>:null} 
{this.props.fiche?.IllustrationCNormes11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes11} </p>:null} 
{this.props.fiche?.IllustrationCNormes12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes12} </p>:null} 
{this.props.fiche?.IllustrationCNormes13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes13} </p>:null} 



</td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'activité de l'entreprise et de l'environnement externe		</span>
 </td>

 {this.props.fiche?.niveauMetier3>this.props.fiche2?.niveauMetier3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier3}
                 </span>
                 </td>: this.props.fiche?.niveauMetier3<this.props.fiche2?.niveauMetier3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier3}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance du domaine d'activité de l'entreprise:  marché, produits et relations externes
</span>
 </td>
 
 <td class="align-middle ">

{this.props.fiche?.IllustrationActivite?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite} </p>:null} 
{this.props.fiche?.IllustrationActivite2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite2} </p>:null} 
{this.props.fiche?.IllustrationActivite3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite3} </p>:null} 
{this.props.fiche?.IllustrationActivite4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite4} </p>:null} 
{this.props.fiche?.IllustrationActivite5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite5} </p>:null} 
{this.props.fiche?.IllustrationActivite6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite6} </p>:null} 
{this.props.fiche?.IllustrationActivite7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite7} </p>:null} 
{this.props.fiche?.IllustrationActivite8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite8} </p>:null} 
{this.props.fiche?.IllustrationActivite9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite9} </p>:null} 
{this.props.fiche?.IllustrationActivite10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite10} </p>:null} 
{this.props.fiche?.IllustrationActivite11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite11} </p>:null} 
{this.props.fiche?.IllustrationActivite12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite12} </p>:null} 
{this.props.fiche?.IllustrationActivite13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationActivite13} </p>:null} 


</td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'organisation et de l'environnement  interne</span>
 </td>
 

 {this.props.fiche?.niveauMetier4>this.props.fiche2?.niveauMetier4?
                   <td class=" align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier4}
                 </span>
                 </td>: this.props.fiche?.niveauMetier4<this.props.fiche2?.niveauMetier4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier4}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'organisation de l'entreprise,  sa structure,sa culture et son fonctionnement  général
</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationOrganisation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation2} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation3} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation4} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation5} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation6} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation7} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation8} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation9} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation10} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation11} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation12} </p>:null} 
                    {this.props.fiche?.IllustrationOrganisation13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrganisation13} </p>:null} 
  
                </td> 

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance du SI & Bases des données	</span>
 </td>
 

 {this.props.fiche?.niveauMetier5>this.props.fiche2?.niveauMetier5?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier5}
                 </span>
                 </td>: this.props.fiche?.niveauMetier5<this.props.fiche2?.niveauMetier5?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier5}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier5}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance des systèmes d'information et des  bases de données liés au domaine d'activité du poste
</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationSIBD?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD2} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD3} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD4} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD5} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD6} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD7} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD8} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD9} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD10} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD11} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD12} </p>:null} 
                    {this.props.fiche?.IllustrationSIBD13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSIBD13} </p>:null} 


  
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissances linguistiques et bureautique	</span>
 </td>
 

 {this.props.fiche?.niveauMetier6>this.props.fiche2?.niveauMetier6?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier6}
                 </span>
                 </td>: this.props.fiche?.niveauMetier6<this.props.fiche2?.niveauMetier6?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.niveauMetier6}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier6}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Maitrise des diverses langues ( français, anglais, allemand, italien..) et connaissance des applications informatiques de bureautique

</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques2} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques3} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques4} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques5} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques6} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques7} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques8} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques9} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques10} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques11} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques12} </p>:null} 
                    {this.props.fiche?.IllustrationLinguistiquesBureautiques13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLinguistiquesBureautiques13} </p>:null} 


              
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
                  <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissances Métier	</span>
                </td>
                
                {this.props.fiche?.niveauMetier1<this.props.fiche2?.niveauMetier1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier1}
                 </span>
                 </td>: this.props.fiche?.niveauMetier1>this.props.fiche2?.niveauMetier1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier1}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier1}
                 </span>
                 </td>} 
            
                
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold back_totheline">Connaître les techniques relatives aux processus de son métier
</span>
                </td>
                <td class="align-middle ">
                
                {this.props.fiche2?.IllustrationCM?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM} </p>:null} 
                {this.props.fiche2?.IllustrationCM2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM2} </p>:null} 
                {this.props.fiche2?.IllustrationCM3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM3} </p>:null} 
                {this.props.fiche2?.IllustrationCM4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM4} </p>:null} 
                {this.props.fiche2?.IllustrationCM5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM5} </p>:null} 
                {this.props.fiche2?.IllustrationCM6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM6} </p>:null} 
                {this.props.fiche2?.IllustrationCM7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM7} </p>:null} 
                {this.props.fiche2?.IllustrationCM8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM8} </p>:null} 
                {this.props.fiche2?.IllustrationCM9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM9} </p>:null} 
                {this.props.fiche2?.IllustrationCM10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM10} </p>:null} 
                {this.props.fiche2?.IllustrationCM11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM11} </p>:null} 
                {this.props.fiche2?.IllustrationCM12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM12} </p>:null} 
                {this.props.fiche2?.IllustrationCM13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCM13} </p>:null} 

        
              </td>
              
                </tr>
                <tr>
 
 <td class="text-secondary text-xs font-weight-bold back_totheline">
 Connaissance des normes et certification	 </td>
 

 {this.props.fiche?.niveauMetier2<this.props.fiche2?.niveauMetier2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier2}
                 </span>
                 </td>: this.props.fiche?.niveauMetier2>this.props.fiche2?.niveauMetier2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier2}
                 </span>
                 </td>} 
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance des normes, règles et instructions liées:- au domaine d'activité de l'entreprise -  au  domaine d'activité du poste concerné - au domaine de certification exigé par l'entreprise

</span>
 </td>
 <td class="align-middle ">

{this.props.fiche2?.IllustrationCNormes?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes} </p>:null} 
{this.props.fiche2?.IllustrationCNormes1?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes1} </p>:null} 
{this.props.fiche2?.IllustrationCNormes2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes2} </p>:null} 
{this.props.fiche2?.IllustrationCNormes3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes3} </p>:null} 
{this.props.fiche2?.IllustrationCNormes4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes4} </p>:null} 
{this.props.fiche2?.IllustrationCNormes5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes5} </p>:null} 
{this.props.fiche2?.IllustrationCNormes6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes6} </p>:null} 
{this.props.fiche2?.IllustrationCNormes7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes7} </p>:null} 
{this.props.fiche2?.IllustrationCNormes8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes8} </p>:null} 
{this.props.fiche2?.IllustrationCNormes9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes9} </p>:null} 
{this.props.fiche2?.IllustrationCNormes10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes10} </p>:null} 
{this.props.fiche2?.IllustrationCNormes11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes11} </p>:null} 
{this.props.fiche2?.IllustrationCNormes12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationCNormes12} </p>:null} 
{this.props.fiche2?.IllustrationCNormes13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationCNormes13} </p>:null} 



</td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'activité de l'entreprise et de l'environnement externe		</span>
 </td>

 {this.props.fiche?.niveauMetier3<this.props.fiche2?.niveauMetier3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier3}
                 </span>
                 </td>: this.props.fiche?.niveauMetier3>this.props.fiche2?.niveauMetier3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier3}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance du domaine d'activité de l'entreprise:  marché, produits et relations externes
</span>
 </td>
 <td class="align-middle ">

{this.props.fiche2?.IllustrationActivite?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite} </p>:null} 
{this.props.fiche2?.IllustrationActivite2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite2} </p>:null} 
{this.props.fiche2?.IllustrationActivite3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite3} </p>:null} 
{this.props.fiche2?.IllustrationActivite4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite4} </p>:null} 
{this.props.fiche2?.IllustrationActivite5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite5} </p>:null} 
{this.props.fiche2?.IllustrationActivite6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite6} </p>:null} 
{this.props.fiche2?.IllustrationActivite7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite7} </p>:null} 
{this.props.fiche2?.IllustrationActivite8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite8} </p>:null} 
{this.props.fiche2?.IllustrationActivite9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite9} </p>:null} 
{this.props.fiche2?.IllustrationActivite10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite10} </p>:null} 
{this.props.fiche2?.IllustrationActivite11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite11} </p>:null} 
{this.props.fiche2?.IllustrationActivite12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite12} </p>:null} 
{this.props.fiche2?.IllustrationActivite13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationActivite13} </p>:null} 


</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'organisation et del'environnement  interne</span>
 </td>
 

 {this.props.fiche?.niveauMetier4<this.props.fiche2?.niveauMetier4?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier4}
                 </span>
                 </td>: this.props.fiche?.niveauMetier4>this.props.fiche2?.niveauMetier4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier4}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance de l'organisation de l'entreprise,  sa structure,sa culture et son fonctionnement général
</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationOrganisation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation2} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation3} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation4} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation5} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation6} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation7} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation8} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation9} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation10} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation11} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation12} </p>:null} 
                    {this.props.fiche2?.IllustrationOrganisation13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrganisation13} </p>:null} 
  
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance du SI & Bases des données	</span>
 </td>
 

 {this.props.fiche?.niveauMetier5<this.props.fiche2?.niveauMetier5?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier5}
                 </span>
                 </td>: this.props.fiche?.niveauMetier5>this.props.fiche2?.niveauMetier5?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier5}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier5}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold back_totheline">Connaissance des systèmes d'information et des  bases de données liés au domaine d'activité du poste
</span>
 </td>
 
 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationSIBD?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD2} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD3} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD4} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD5} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD6} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD7} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD8} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD9} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD10} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD11} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD12} </p>:null} 
                    {this.props.fiche2?.IllustrationSIBD13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSIBD13} </p>:null} 
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
 </td>
 

 {this.props.fiche?.niveauMetier6<this.props.fiche2?.niveauMetier6?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.niveauMetier6}
                 </span>
                 </td>: this.props.fiche?.niveauMetier6>this.props.fiche2?.niveauMetier6?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.niveauMetier6}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.niveauMetier6}
                 </span>
                 </td>} 
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,  allemand, italien..) et connaissance des applications informatiques de bureautique

</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques2} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques3} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques4} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques5} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques6} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques7} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques8} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques9} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques10} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques11} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques12} </p>:null} 
                    {this.props.fiche2?.IllustrationLinguistiquesBureautiques13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLinguistiquesBureautiques13} </p>:null} 
            
                </td>

 </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">

  <div class="col-6" >
    <div class="card mb-6">
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
                {this.props.fiche?.NiveauComportementales1>this.props.fiche2?.NiveauComportementales1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales1}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales1<this.props.fiche2?.NiveauComportementales1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauComportementales1}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales1}
                 </span>
                 </td>} 
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                
                <td class="align-middle ">
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation2} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation3} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation4} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation5} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation6} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation7} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation8} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation9} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation10} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation11} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation12} </p>:null} 
    {this.props.fiche?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.Illustrationinnovation13} </p>:null} 
   

</td>
                </tr>

                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 {this.props.fiche?.NiveauComportementales2>this.props.fiche2?.NiveauComportementales2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales2}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales2<this.props.fiche2?.NiveauComportementales2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauComportementales2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales2}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 
 <td class="align-middle ">
                   {this.props.fiche?.IllustrationAgilit?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit2} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit3} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit4} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit5} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit6} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit7} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit8} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit9} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit10} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit11} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit12} </p>:null} 
                   {this.props.fiche?.IllustrationAgilit13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationAgilit13} </p>:null} 
                  

</td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 {this.props.fiche?.NiveauComportementales3>this.props.fiche2?.NiveauComportementales3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales3}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales3<this.props.fiche2?.NiveauComportementales3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauComportementales3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales3}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin d’atteindre son plein potentiel.
</span>
 </td>
 <td class="align-middle ">

{this.props.fiche?.IllustrationForceCollectif?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif2} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif3} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif4} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif5} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif6} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif7} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif8} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif9} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif10} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif11} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif12} </p>:null} 
{this.props.fiche?.IllustrationForceCollectif13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationForceCollectif13} </p>:null} 


</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 {this.props.fiche?.NiveauComportementales4>this.props.fiche2?.NiveauComportementales4?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales4}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales4<this.props.fiche2?.NiveauComportementales4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauComportementales4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauComportementales4}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationRespectEngagement?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement2} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement3} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement4} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement5} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement6} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement7} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement8} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement9} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement10} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement11} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement12} </p>:null} 
                    {this.props.fiche?.IllustrationRespectEngagement13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationRespectEngagement13} </p>:null} 
                   

              
                </td>
 </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-6" >
    <div class="card mb-6">
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
                {this.props.fiche?.NiveauComportementales1<this.props.fiche2?.NiveauComportementales1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales1}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales1>this.props.fiche2?.NiveauComportementales1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauComportementales1}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales1}
                 </span>
                 </td>} 
                <td class="align-middle ">
                  <span class="text-secondary text-xs font-weight-bold">Capacité à témoigner d’un esprit novateur, créatif et de force de proposition afin de créer de la valeur</span>
                </td>
                <td class="align-middle ">
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation2} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation3} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation4} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation5} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation6} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation7} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation8} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation9} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation10} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation11} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation12} </p>:null} 
    {this.props.fiche2?.Illustrationinnovation?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.Illustrationinnovation13} </p>:null} 
   

</td>
              
                </tr>

                <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Agilité</span>
 </td>
 {this.props.fiche?.NiveauComportementales2<this.props.fiche2?.NiveauComportementales2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales2}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales2>this.props.fiche2?.NiveauComportementales2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauComportementales2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales2}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Aptitude à faire face aux situations d’urgence d’une manière rapide, efficace et responsable.
</span>
 </td>
 
 <td class="align-middle ">
                   {this.props.fiche2?.IllustrationAgilit?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit2} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit3} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit4} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit5} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit6} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit7} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit8} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit9} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit10} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit11} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit12} </p>:null} 
                   {this.props.fiche2?.IllustrationAgilit13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationAgilit13} </p>:null} 
                  

</td>
 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Force du collectif	</span>
 </td>
 {this.props.fiche?.NiveauComportementales3<this.props.fiche2?.NiveauComportementales3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales3}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales3>this.props.fiche2?.NiveauComportementales3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauComportementales3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales3}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin d’atteindre son plein potentiel.
</span>
 </td>
 <td class="align-middle ">

{this.props.fiche2?.IllustrationForceCollectif?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif2} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif3} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif4} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif5} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif6} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif7} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif8} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif9} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif10} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif11} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif12} </p>:null} 
{this.props.fiche2?.IllustrationForceCollectif13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationForceCollectif13} </p>:null} 


</td>

 </tr>
 <tr>
 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Respect et Engagement		</span>
 </td>
 {this.props.fiche?.NiveauComportementales4<this.props.fiche2?.NiveauComportementales4?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales4}
                 </span>
                 </td>: this.props.fiche?.NiveauComportementales4>this.props.fiche2?.NiveauComportementales4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauComportementales4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauComportementales4}
                 </span>
                 </td>} 
 <td class="align-middle ">
   <span class="text-secondary text-xs font-weight-bold">Capacité et aptitue à se dévouer à son travail, de se donner à fond pour en faire sortir les meilleurs des résultats
</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationRespectEngagement?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement2} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement3} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement4} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement5} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement6} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement7} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement8} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement9} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement10} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement11} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement12} </p>:null} 
                    {this.props.fiche2?.IllustrationRespectEngagement13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationRespectEngagement13} </p>:null} 
                   

              
                </td>

 </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="row">

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
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ullistration</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
 
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">Orientation stratégique	</span>
                </td>
                {this.props.fiche?.NiveauManagerials1>this.props.fiche2?.NiveauManagerials1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials1}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials1<this.props.fiche2?.NiveauManagerials1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials1}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials1}
                 </span>
                 </td>} 
             
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>

                <td class="align-middle ">
                    {this.props.fiche?.IllustrationOrientationstrategique?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique2} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique3} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique4} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique5} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique6} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique7} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique8} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique9} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique10} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique11} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique12} </p>:null} 
                    {this.props.fiche?.IllustrationOrientationstrategique13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationOrientationstrategique13} </p>:null} 
 
                </td>
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 {this.props.fiche?.NiveauManagerials2>this.props.fiche2?.NiveauManagerials2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials2}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials2<this.props.fiche2?.NiveauManagerials2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials2}
                 </span>
                 </td>} 
             
 
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationSensdesaffaires?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires2} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires3} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires4} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires5} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires6} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires7} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires8} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires9} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires10} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires11} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires12} </p>:null} 
                    {this.props.fiche?.IllustrationSensdesaffaires13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationSensdesaffaires13} </p>:null} 

                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 {this.props.fiche?.NiveauManagerials3>this.props.fiche2?.NiveauManagerials3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials3}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials3<this.props.fiche2?.NiveauManagerials3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials3}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationLeadership?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership2} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership3} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership4} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership5} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership6} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership7} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership8} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership9} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership10} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership11} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership12} </p>:null} 
                    {this.props.fiche?.IllustrationLeadership13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationLeadership13} </p>:null} 
      
              
                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 {this.props.fiche?.NiveauManagerials4>this.props.fiche2?.NiveauManagerials4?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials4}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials4<this.props.fiche2?.NiveauManagerials4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials4}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à persuader, convaincre, impressionner et faire des compromis avec les autres afin de les fédérer vers ses idées et points de vue	</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationInfluence?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence2} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence3} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence4} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence5} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence6} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence7} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence8} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence9} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence10} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence11} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence12} </p>:null} 
                    {this.props.fiche?.IllustrationInfluence13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationInfluence13} </p>:null} 
    
                </td>

 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion opérationnelle	</span>
 </td>
 {this.props.fiche?.NiveauManagerials5>this.props.fiche2?.NiveauManagerials5?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials5}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials5<this.props.fiche2?.NiveauManagerials5?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials5}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials5}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>

 <td class="align-middle ">
                    {this.props.fiche?.IllustrationGestionOperationnelle?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle2} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle3} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle4} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle5} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle6} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle7} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle8} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle9} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle10} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle11} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle12} </p>:null} 
                    {this.props.fiche?.IllustrationGestionOperationnelle13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionOperationnelle13} </p>:null} 
     
              
                </td>
 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 {this.props.fiche?.NiveauManagerials6>this.props.fiche2?.NiveauManagerials6?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials6}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials6<this.props.fiche2?.NiveauManagerials6?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche?.NiveauManagerials6}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche?.NiveauManagerials6}
                 </span>
                 </td>} 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche?.IllustrationGestionEquipe?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe2} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe3} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe4} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe5} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe6} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe7} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe8} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe9} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe10} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe11} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe12} </p>:null} 
                    {this.props.fiche?.IllustrationGestionEquipe13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche?.IllustrationGestionEquipe13} </p>:null} 
            
              
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
                {this.props.fiche?.NiveauManagerials1<this.props.fiche2?.NiveauManagerials1?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials1}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials1>this.props.fiche2?.NiveauManagerials1?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials1}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials1}
                 </span>
                 </td>} 
             
             
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place de la stratégie définie	</span>
                </td>
                <td class="align-middle ">
                    {this.props.fiche2?.IllustrationOrientationstrategique?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique2} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique3} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique4} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique5} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique6} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique7} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique8} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique9} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique10} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique11} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique12} </p>:null} 
                    {this.props.fiche2?.IllustrationOrientationstrategique13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationOrientationstrategique13} </p>:null} 
 
                </td>
              
                </tr>
                <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Sens des affaires</span>
 </td>
 {this.props.fiche?.NiveauManagerials2<this.props.fiche2?.NiveauManagerials2?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials2}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials2>this.props.fiche2?.NiveauManagerials2?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials2}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials2}
                 </span>
                 </td>} 
             
           
 
   <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Faculté d'identifier et de développer des affaires profitables
	</span>
 </td>
 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationSensdesaffaires?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires2} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires3} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires4} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires5} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires6} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires7} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires8} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires9} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires10} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires11} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires12} </p>:null} 
                    {this.props.fiche2?.IllustrationSensdesaffaires13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationSensdesaffaires13} </p>:null} 

                </td>

 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Leadership	</span>
 </td>
 {this.props.fiche?.NiveauManagerials3<this.props.fiche2?.NiveauManagerials3?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials3}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials3>this.props.fiche2?.NiveauManagerials3?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials3}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials3}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Habilité à développer les capacités et à assurer l'accomplissement des potentiels des collaborateurs
	</span>
 </td>

 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationLeadership?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership2} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership3} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership4} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership5} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership6} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership7} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership8} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership9} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership10} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership11} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership12} </p>:null} 
                    {this.props.fiche2?.IllustrationLeadership13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationLeadership13} </p>:null} 
      
              
                </td>
 </tr>
 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Impact et Influence		</span>
 </td>
 {this.props.fiche?.NiveauManagerials4<this.props.fiche2?.niveauMetier4?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials4}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials4>this.props.fiche2?.NiveauManagerials4?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials4}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials4}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à persuader, convaincre, impressionner et faire des compromis avec les autres afin de les fédérer vers ses idées et points de vue	</span>
 </td>

 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationInfluence?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence2} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence3} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence4} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence5} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence6} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence7} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence8} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence9} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence10} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence11} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence12} </p>:null} 
                    {this.props.fiche2?.IllustrationInfluence13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationInfluence13} </p>:null} 
    
                </td>
 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion opérationnelle	</span>
 </td>
 {this.props.fiche?.NiveauManagerials5<this.props.fiche2?.NiveauManagerials5?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials5}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials5>this.props.fiche2?.NiveauManagerials5?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials5}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials5}
                 </span>
                 </td>} 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à planifier et à exécuter les travaux en respectant les délais, la qualité et les budgets alloués</span>
 </td>

 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationGestionOperationnelle?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle2} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle3} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle4} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle5} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle6} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle7} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle8} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle9} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle10} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle11} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle12} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionOperationnelle13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionOperationnelle13} </p>:null} 
     
              
                </td>
 </tr>

 <tr>
 
 <td class="align-middle">
   <span class="text-secondary text-xs font-weight-bold">Gestion d'équipe</span>
 </td>
 {this.props.fiche?.NiveauManagerials6<this.props.fiche2?.NiveauManagerials6?
                   <td class="align-middle text-center suppFiche colorwhitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials6}
                 </span>
                 </td>: this.props.fiche?.NiveauManagerials6>this.props.fiche2?.NiveauManagerials6?  <td class="align-middle text-center infFiche colorwhitefiche">
                  <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                {this.props.fiche2?.NiveauManagerials6}
                </span>
                </td>:<td class="align-middle text-center egalitefiche">
                   <span class="colorwhiteforcopetance text-secondary text-xs font-weight-bold"> 
                 {this.props.fiche2?.NiveauManagerials6}
                 </span>
                 </td>} 
 
  <td class="align-middle">
 <span class="text-secondary text-xs font-weight-bold">Capacité à mettre en place les actions nécessaires au développement de ses collaborateurs
</span>
 </td>

 <td class="align-middle ">
                    {this.props.fiche2?.IllustrationGestionEquipe?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe2?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe2} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe3?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe3} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe4?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe4} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe5?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe5} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe6?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe6} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe7?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe7} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe8?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe8} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe9?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe9} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe10?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe10} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe11?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe11} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe12?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe12} </p>:null} 
                    {this.props.fiche2?.IllustrationGestionEquipe13?<p class="text-secondary text-xs font-weight-bold">-{this.props.fiche2?.IllustrationGestionEquipe13} </p>:null} 
            
              
                </td>
 </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
<div class="col-6">
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
      {this.props.fiche?.Execution==1? <td className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche?.Execution==2? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche?.Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche?.Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche?.Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche?.Execution==6? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
      {this.props.fiche?.Expertise!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Expertise!=2? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Expertise!=3? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Expertise!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Expertise!=5? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Expertise!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
      {this.props.fiche?.Operationnel!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Operationnel!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Operationnel!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Operationnel!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Operationnel!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.Operationnel!=6? <td onClick className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
      {this.props.fiche?.decisions!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.decisions!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.decisions!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.decisions!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.decisions!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche?.decisions!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
       {this.props.fiche?.Production!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche?.Production!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche?.Production!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche?.Production!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche?.Production!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche?.Production!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
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
  <div class="col-6">
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
      {this.props.fiche2?.Execution==1? <td className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche2?.Execution==2? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche2?.Execution==3? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche2?.Execution==4? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche2?.Execution==5? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td className='fixonclicktable ' scope="row"></td>}  
      {this.props.fiche2?.Execution==6? <td  className='fixonclicktable colorTableChmp' scope="row"></td>:     <td  className='fixonclicktable ' scope="row"></td>}  
              <td  scope="row">Pilotage</td>

              </tr>
            
              <tr>
              <td>
              Expertise</td>
      {this.props.fiche2?.Expertise!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Expertise!=2? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Expertise!=3? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Expertise!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Expertise!=5? <td className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Expertise!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Management d'équipe</td>

              </tr>
              <tr>
              <td>
              Opérationnel</td>
      {this.props.fiche2?.Operationnel!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Operationnel!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Operationnel!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Operationnel!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Operationnel!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.Operationnel!=6? <td onClick className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Stratégique</td>

              </tr>
              <tr>
              <td>
              Pas de décisions</td>
      {this.props.fiche2?.decisions!=1? <td  className='fixonclicktable' scope="row"></td>:     <td className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.decisions!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.decisions!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.decisions!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.decisions!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
      {this.props.fiche2?.decisions!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
              <td  scope="row">Prise des décisions</td>

              </tr>
              <tr>
              <td>
              Production</td>
       {this.props.fiche2?.Production!=1? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche2?.Production!=2? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche2?.Production!=3? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche2?.Production!=4? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche2?.Production!=5? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
       {this.props.fiche2?.Production!=6? <td  className='fixonclicktable' scope="row"></td>:     <td  className='fixonclicktable colorTableChmp' scope="row"></td>}  
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

<div class="row">

  <div class="col-6">
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
                {this.props.fiche?.DimensionnementDuPoste?.map((x,i)=>
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
 
  <div class="col-6">
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
                {this.props.fiche2?.DimensionnementDuPoste?.map((x,i)=>
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

<div class="row">

  <div class="col-6">
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
                {this.props.fiche?.IndicateursDePerformance?.map((x,i)=>
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
  <div class="col-6">
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
                {this.props.fiche2?.IndicateursDePerformance?.map((x,i)=>
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
</div>

<div class="row " >
<div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6 className='colorwhite'>Founisseurs du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Inputs</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {this.props.fiche?.FournisseursDuPoste?.map((x,i)=>
                 <tr key={i} >
                
             
             
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
        <h6 className='colorwhite'>Founisseurs du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Inputs</th>
               
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {this.props.fiche2?.FournisseursDuPoste?.map((x,i)=>
                 <tr key={i} >
                
             
             
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
</div>

<div class="row " >

  <div class="col-6">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6 className='colorwhite'>Clients du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {this.props.fiche?.ClientsDuPoste?.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Client}</span>
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
      <div class="card-header pb-0 fixtable">
        <h6 className='colorwhite'>Clients du poste</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
               
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Outputs</th>
                {/* <th class="text-secondary opacity-7">+</th> */}
              </tr>
            </thead>
            <tbody>
            {this.props.fiche2?.ClientsDuPoste?.map((x,i)=>
                 <tr key={i} >
                
             
                 <td class="align-middle text-center text-sm">
                 <span class="text-secondary text-xs font-weight-bold">{x.Client}</span>
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

</div>
</div>
</div> 
</Fragment> )

}
}

export const Example = ({ fiche,fiche2}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <Fragment>
      <ComponentToPrint ref={componentRef}  fiche={fiche}  fiche2={fiche2}   />
      <button onClick={handlePrint}>Print this out!</button>
    </Fragment>
  );
};

render(<Example />, document.querySelector("#root"));
