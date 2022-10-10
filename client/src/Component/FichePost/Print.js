import React, { useRef, Fragment } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  state = {
    titulaireposte:"",
    togglebtn:true,
    
  };

  
  submitedd = e => {
    this.setState({
      togglebtn: false
    });
  };
  handelChange = e => {
    this.setState({
      titulaireposte: e.target.value
    });
  };
  render() {
    var ClientsDuPoste = this.props.ClientsDuPoste;

    return (
      <Fragment>
        <div class="row FIXPRINT">

          <div class="row">
            <div class="col-4">
              <div class="card ">
                <div class="card-header pb-0 ">
                  <span className="fixDescTitre"> {this.props.titre} Classe : {this.props.myclass}</span>

                </div>
              </div>

              <div class="card ">
                <div class="card-header pb-0 ">
                  <h5 className="fixDescTitre"> AutreAppelations:  {this.props.AutreAppelations}</h5>

                </div>
              </div>

            </div>
            <div class="col-4">
              <div class="card ">
                {
                  this.state.togglebtn==true?
                  <div class="card-header pb-0 ">
                  <h5 >Titulaire du poste:<input type="text" value={this.state.titulaireposte} onChange={this.handelChange} className="fixDescTitre" /></h5>
                  <button className="btn btn-primary" onClick={this.submitedd}>Save</button>
                </div>: <div class="card-header pb-0 ">
                  <h5 >Titulaire du poste:<span className="fixDescTitre"> {this.state.titulaireposte}</span></h5>
                </div>

              }
  
              </div>
            </div>
            <div class="col-4">
              <div class="card ">
                <div class="card-header pb-0 ">
                  <h5>Version N: {this.props.nbversion}</h5>
                  <h5>Date: {this.props.date}</h5>

                </div>



              </div>


            </div>
          </div>
          <div class="row">

            <div class="col-8">
              <div class="card ">
                <div class="card-header pb-0  ">
                  <h5>Mission: <span className="fixDescTitre">{this.props.Description}</span></h5>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card ">
                <div class="card-header pb-0 ">
                  <h5>Rattachment Fonctionnel:<span className="fixDescTitre">{this.props.RattachementsFonctionnel}</span></h5>
                  <h5>Rattachment hiérarchique:<span className="fixDescTitre">{this.props.RattachementsHierarchique}</span></h5>

                </div>



              </div>


            </div>
          </div>
          <div class="row">

            <div class="col-9">
              <div class="card ">
                <div class="card-header pb-0">
                  <h5>Profil: <span className="fixDescTitre">{this.props.profil}</span></h5>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="card ">
                <div class="card-header pb-0">
                  <h5>Exigences: <span className="fixDescTitre">{this.props.exigence}</span></h5>

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
            {this.props.FournisseursDuPoste?.map((x,i)=>
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
            {this.props.ClientsDuPoste?.map((el,j)=>
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


          <div class="row " >


        

            <div class="col-12">
              <div class="card ">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Autre responsabilités</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0 mt-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">responsability</th>

                          {/* <th class="text-secondary opacity-7">+</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.AutreResponsabilite?.map((x, i) =>
                          <tr key={i} >



                            <td class="align-middle ">
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
          <div class="row " >


            <div class="col-12">
              <div class="card">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Caractéristiques du poste</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0 mt-0">

                      <tbody>

                        <tr>
                          <td>
                            Execution</td>
                          {this.props.Execution == 1 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          {this.props.Execution == 2 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          {this.props.Execution == 3 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          {this.props.Execution == 4 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          {this.props.Execution == 5 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          {this.props.Execution == 6 ? <td className='fixonclicktable colorTableChmp' scope="row"></td> : <td className='fixonclicktable ' scope="row"></td>}
                          <td scope="row">Pilotage</td>

                        </tr>

                        <tr>
                          <td>
                            Expertise</td>
                          {this.props.Expertise != 1 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Expertise != 2 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Expertise != 3 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Expertise != 4 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Expertise != 5 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Expertise != 6 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          <td scope="row">Management d'équipe</td>

                        </tr>
                        <tr>
                          <td>
                            Opérationnel</td>
                          {this.props.Operationnel != 1 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Operationnel != 2 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Operationnel != 3 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Operationnel != 4 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Operationnel != 5 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Operationnel != 6 ? <td onClick className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          <td scope="row">Stratégique</td>

                        </tr>
                        <tr>
                          <td>
                            Pas de décisions</td>
                          {this.props.decisions != 1 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.decisions != 2 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.decisions != 3 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.decisions != 4 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.decisions != 5 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.decisions != 6 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          <td scope="row">Prise des décisions</td>

                        </tr>
                        <tr>
                          <td>
                            Production</td>
                          {this.props.Production != 1 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Production != 2 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Production != 3 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Production != 4 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Production != 5 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          {this.props.Production != 6 ? <td className='fixonclicktable' scope="row"></td> : <td className='fixonclicktable colorTableChmp' scope="row"></td>}
                          <td scope="row">Dév - Support</td>

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
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Compétences Techniques</h6>
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
                              {this.props.niveauMetier1}
                            </span>
                          </td>

                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Connaître les techniques relatives aux processus de son métier
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

                          <td class="text-secondary text-xs font-weight-bold ">
                            Connaissance des normes et certification	 </td>

                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.niveauMetier2}
                            </span>
                          </td>
                
                          <td class="align-middle">
                            <span class="text-secondary text-xs font-weight-bold">Connaissance des normes, règles et instructions liées:- au domaine d'activité de l'entreprise -  au <br /> domaine d'activité du poste concerné - au domaine de certification exigé par l'entreprise

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
                            <span class="text-secondary text-xs font-weight-bold">Connaissance de l'activité de l'entreprise <br />et de l'environnement externe		</span>
                          </td>

                          <td class="align-middle text-center">
                            {this.props.niveauMetier3}
                          </td>

                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Connaissance du domaine d'activité de l'entreprise:  marché, produits et relations externes
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
                            <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation et de <br />l'environnement  interne</span>
                          </td>

                          <td class="align-middle text-center">
                            {this.props.niveauMetier4} </td>

                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Connaissance de l'organisation de l'entreprise,  sa structure,sa culture et son fonctionnement <br /> général
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
                            <span class="text-secondary text-xs font-weight-bold">Connaissance du SI & Bases des données	</span>
                          </td>

                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.niveauMetier5}</span>
                          </td>

                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Connaissance des systèmes d'information et des  bases de données liés au domaine d'activité du poste
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
                            <span class="text-secondary text-xs font-weight-bold">Connaissances linguistiques et bureautique	</span>
                          </td>

                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.niveauMetier6}</span>
                          </td>

                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Maitrise des diverses langues ( français, anglais,<br />  allemand, italien..) et connaissance des applications informatiques de bureautique

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
          </div>
          <div class="row">

            <div class="col-12" >
              <div class="card mb-6">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Compétences comportementales
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
                              {this.props.NiveauComportementales1}</span>
                          </td>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauComportementales2}</span>
                          </td>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauComportementales3}</span>
                          </td>
                          <td class="align-middle ">
                            <span class="text-secondary text-xs font-weight-bold">Capacité de partage d’une vision et aptitude à promouvoir la cohésion et la solidarité au sein de l’équipe afin <br /> d’atteindre son plein potentithis.props.fiche?.
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauComportementales4}</span>
                          </td>
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
          </div>

          <div class="row">

            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Compétences managériales</h6>
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
                              {this.props.NiveauManagerials1}</span>
                          </td>


                          <td class="align-middle">
                            <span class="text-secondary text-xs font-weight-bold">Capacité à définir la stratégie de son activité en assurant une veille sur les opportunités de développement et en pilotant la mise en place <br /> de la stratégie définie	</span>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauManagerials2}</span>
                          </td>



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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauManagerials3}</span>
                          </td>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauManagerials4}</span>
                          </td>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauManagerials5}</span>
                          </td>
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
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              {this.props.NiveauManagerials6}</span>
                          </td>

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

          </div>
          <div class="row">
            <div class="col-3">
              <div class="card ">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Titulaire du Poste</h6>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card ">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Supérieur Hiérarchique</h6>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card ">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">DRH</h6>
                </div>



              </div>


            </div>  <div class="col-3">
              <div class="card ">
                <div class="card-header pb-0 fixtable">
                  <h6 className="colorwhite">Directeur Général</h6>
                </div>



              </div>


            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export const Example = ({ AutreAppelations, SousCategorie,profil, date, titulaire, exigence, RattachementsFonctionnel, myclass, nbversion, RattachementsHierarchique, NiveauManagerials1, NiveauManagerials2, NiveauManagerials3, NiveauManagerials4, NiveauManagerials5, NiveauManagerials6, NiveauComportementales1, NiveauComportementales2, NiveauComportementales3, NiveauComportementales4, Execution, Expertise, Operationnel, decisions, titre, Description, Production, FournisseursDuPoste, AutreResponsabilite, ClientsDuPoste, niveauMetier1, niveauMetier2, niveauMetier3, niveauMetier4, niveauMetier5, niveauMetier6,fiche }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Fragment>
      <ComponentToPrint ref={componentRef}
      SousCategorie={SousCategorie}
      
      fiche={fiche} NiveauComportementales1={NiveauComportementales1} NiveauComportementales2={NiveauComportementales2} NiveauComportementales3={NiveauComportementales3} NiveauComportementales4={NiveauComportementales4} titre={titre} AutreResponsabilite={AutreResponsabilite} FournisseursDuPoste={FournisseursDuPoste}
        Execution={Execution} AutreAppelations={AutreAppelations} Expertise={Expertise} Operationnel={Operationnel} decisions={decisions}
        Production={Production} ClientsDuPoste={ClientsDuPoste} Description={Description}
        niveauMetier1={niveauMetier1} niveauMetier2={niveauMetier2} niveauMetier3={niveauMetier3} niveauMetier4={niveauMetier4} niveauMetier5={niveauMetier5} niveauMetier6={niveauMetier6}
        NiveauManagerials1={NiveauManagerials1} NiveauManagerials2={NiveauManagerials2} NiveauManagerials3={NiveauManagerials3} NiveauManagerials4={NiveauManagerials4} NiveauManagerials5={NiveauManagerials5} NiveauManagerials6={NiveauManagerials6}
        date={date} profil={profil} titulaire={titulaire} exigence={exigence}
        myclass={myclass} nbversion={nbversion} RattachementsFonctionnel={RattachementsFonctionnel} RattachementsHierarchique={RattachementsHierarchique}
      />
      <button onClick={handlePrint}>Print this out!</button>
    </Fragment>
  );
};

render(<Example />, document.querySelector("#root"));
