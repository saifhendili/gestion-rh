import React,{Fragment,useEffect} from 'react'
import Spinner from '../Layout/Spinner';
import { connect } from 'react-redux';
import Aside from '../Layout/Aside';
import { Link, useSearchParams } from 'react-router-dom';
import { getCompetance } from '../../actions/fiche';

function GetMatriceFiltred({getCompetance,fiche:{Competances,loading}}) {
    const [searchParams] = useSearchParams();

  
    useEffect(()=>{
     searchParams.get("Categories");
  searchParams.get("Libelle");
   searchParams.get("SousCategorie")
        getCompetance()    
      },[])
    return loading|| Competances ==null ? (
        <Spinner />
      ) : (
        
    <Fragment>
        {Competances.map((matrice,i)=>
        matrice.Categories==searchParams.get("Categories")&&
        matrice.Libelle==searchParams.get("Libelle")&&
        matrice.souscategorie==searchParams.get("SousCategorie")?

        <div key={i}>
            <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
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
                      {matrice.niveauMetier1}
                      </span>
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
         <span class="text-secondary text-xs font-weight-bold">
          {matrice.niveauMetier2}
          </span>
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
        {matrice.niveauMetier3}
        </td>
        
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
        {matrice.niveauMetier4} </td>
        
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
         <span class="text-secondary text-xs font-weight-bold"> 
        {matrice.niveauMetier5}</span>
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
         <span class="text-secondary text-xs font-weight-bold"> 
        {matrice.niveauMetier6}</span>
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
                          {matrice.NiveauComportementales1}</span>
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
                          {matrice.NiveauComportementales2}</span>
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
                          {matrice.NiveauComportementales3}</span>
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
                          {matrice.NiveauComportementales4}</span>
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
                          {matrice.NiveauManagerials1}</span>
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
                          {matrice.NiveauManagerials2}</span>
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
                          {matrice.NiveauManagerials3}</span>
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
                          {matrice.NiveauManagerials4}</span>
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
                          {matrice.NiveauManagerials5}</span>
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
                          {matrice.NiveauManagerials6}</span>
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
        
        </div>
        </div> 
        </div> 
        </div> 
        </div> :null
        )}
   </Fragment>  )
}
const mapStateToProps = (state) => ({
    fiche: state.fiche,
  });

export default  connect(mapStateToProps, {getCompetance}) (GetMatriceFiltred)

