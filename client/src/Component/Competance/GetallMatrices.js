import React ,{useState,useEffect,Fragment}from 'react'
import { GetMatrices } from '../../actions/fichev'
import Aside from '../Layout/Aside';

import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { Link, useNavigate } from "react-router-dom";

function GetallMatrices({GetMatrices,fiche:{matrices,loading}}) {
  useEffect(()=>{
    GetMatrices()
  },[
  ])
   return loading|| matrices ==null ? (
    <Spinner />
          ) : (
<Fragment>
     <div class="g-sidenav-show   ">
     {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
 <Aside/>
 <div  class="main-content position-relative border-radius-lg ">
 <div class="container-fluid py-4 fix-table">
 <div class="row fixrowmore">
   <div class="col-12">
   <div class=" mb-4">
   <div class="card-header pb-0 fixtable">
   <h6 className='colorwhite'>Matrice des compétences </h6>
 </div>
 <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
 <table key="i" class="table table-bordered mb-0 mt-0">

 <tr >
    <td  colspan="2">Souscategorie</td>

    {matrices?.map((x,i)=>
    
    i==0?<th className='' scope="col">{x.souscategorie}</th>:<th className='' scope="col">{x?.souscategorie==matrices[i-1]?.souscategorie?null:x.souscategorie}</th>   )}
    </tr>
    <tr >

      <th className='FIXEDWIDHTHTABLECOMPETANCE' scope="col">Domaine de compétences</th>
      <th className='FIXEDWIDHTHTABLECOMPETANCE' scope="col">Libellé Compétence</th>
      {matrices.map((x,i)=>
      <th className='FIXEDWIDHTHTABLECOMPETANCE' scope="col">{x.Libelle}</th>
      )}
    </tr>
  <tbody >
    <tr >
      <td  rowspan="4">Compétences Comportementales</td>
      <td className='fixemaricecompetancefirsttr' > Innovation</td>
      {matrices.map((x,i)=>
      x.NiveauComportementales1==0?
      <td className='zerocolor'>

     { x.NiveauComportementales1}
      </td>:  x.NiveauComportementales1==1?
      <td className='onecolor'>

     { x.NiveauComportementales1}
      </td>: x.NiveauComportementales1==2?
      <td className='twocolor'>

     { x.NiveauComportementales1}
      </td>:x.NiveauComportementales1==3?
      <td className='threecolor'>

     { x.NiveauComportementales1}
      </td>:<td className='fourcolor'>

{ x.NiveauComportementales1}
 </td>
      )}
    </tr>
    <tr>
      <td className='fixemaricecompetancefirsttr'>Agilité</td>
      {matrices.map((x,i)=>
      x.NiveauComportementales2==0?
      <td className='zerocolor'>

     { x.NiveauComportementales2}
      </td>:  x.NiveauComportementales2==1?
      <td className='onecolor'>

     { x.NiveauComportementales2}
      </td>: x.NiveauComportementales2==2?
      <td className='twocolor'>

     { x.NiveauComportementales2}
      </td>:x.NiveauComportementales2==3?
      <td className='threecolor'>

     { x.NiveauComportementales2}
      </td>:<td className='fourcolor'>

{ x.NiveauComportementales2}
 </td>
      )}
    </tr>
    <tr>
      <td className='fixemaricecompetancefirsttr'>Force du collectif</td>
      {matrices.map((x,i)=>
      x.NiveauComportementales3==0?
      <td className='zerocolor'>

     { x.NiveauComportementales3}
      </td>:  x.NiveauComportementales3==1?
      <td className='onecolor'>

     { x.NiveauComportementales3}
      </td>: x.NiveauComportementales3==2?
      <td className='twocolor'>

     { x.NiveauComportementales3}
      </td>:x.NiveauComportementales3==3?
      <td className='threecolor'>

     { x.NiveauComportementales3}
      </td>:<td className='fourcolor'>

{ x.NiveauComportementales3}
 </td>
      )}
    </tr>
    <tr>
      <td className='fixemaricecompetancefirsttr'>Respect et Engagement</td>
      {matrices.map((x,i)=>
      x.NiveauComportementales4==0?
      <td className='zerocolor'>

     { x.NiveauComportementales4}
      </td>:  x.NiveauComportementales4==1?
      <td className='onecolor'>

     { x.NiveauComportementales4}
      </td>: x.NiveauComportementales4==2?
      <td className='twocolor'>

     { x.NiveauComportementales4}
      </td>:x.NiveauComportementales4==3?
      <td className='threecolor'>

     { x.NiveauComportementales4}
      </td>:<td className='fourcolor'>

{ x.NiveauComportementales4}
 </td>
      )}
    </tr>
    <tr>
      <td rowspan="6">Compétences Managériales</td>
      <td className='fixemaricecompetancefirsttr'>Orientation stratégique</td>

      {matrices.map((x,i)=>
      x.NiveauManagerials1==0?
      <td className='zerocolor'>

     { x.NiveauManagerials1}
      </td>:  x.NiveauManagerials1==1?
      <td className='onecolor'>

     { x.NiveauManagerials1}
      </td>: x.NiveauManagerials1==2?
      <td className='twocolor'>

     { x.NiveauManagerials1}
      </td>:x.NiveauManagerials1==3?
      <td className='threecolor'>

     { x.NiveauManagerials1}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials1}
 </td>
      )}
    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Sens des affaires</td>

   
    {matrices.map((x,i)=>
      x.NiveauManagerials2==0?
      <td className='zerocolor'>

     { x.NiveauManagerials2}
      </td>:  x.NiveauManagerials2==1?
      <td className='onecolor'>

     { x.NiveauManagerials2}
      </td>: x.NiveauManagerials2==2?
      <td className='twocolor'>

     { x.NiveauManagerials2}
      </td>:x.NiveauManagerials2==3?
      <td className='threecolor'>

     { x.NiveauManagerials2}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials2}
 </td>
      )}

    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Leadership
</td>

   
{matrices.map((x,i)=>
      x.NiveauManagerials3==0?
      <td className='zerocolor'>

     { x.NiveauManagerials3}
      </td>:  x.NiveauManagerials3==1?
      <td className='onecolor'>

     { x.NiveauManagerials3}
      </td>: x.NiveauManagerials3==2?
      <td className='twocolor'>

     { x.NiveauManagerials3}
      </td>:x.NiveauManagerials3==3?
      <td className='threecolor'>

     { x.NiveauManagerials3}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials3}
 </td>
      )}
    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Impact et Influence
</td>

   
{matrices.map((x,i)=>
      x.NiveauManagerials4==0?
      <td className='zerocolor'>

     { x.NiveauManagerials4}
      </td>:  x.NiveauManagerials4==1?
      <td className='onecolor'>

     { x.NiveauManagerials4}
      </td>: x.NiveauManagerials4==2?
      <td className='twocolor'>

     { x.NiveauManagerials4}
      </td>:x.NiveauManagerials4==3?
      <td className='threecolor'>

     { x.NiveauManagerials4}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials4}
 </td>
      )}

    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Gestion opérationnelle
</td>

   
{matrices.map((x,i)=>
      x.NiveauManagerials5==0?
      <td className='zerocolor'>

     { x.NiveauManagerials5}
      </td>:  x.NiveauManagerials5==1?
      <td className='onecolor'>

     { x.NiveauManagerials5}
      </td>: x.NiveauManagerials5==2?
      <td className='twocolor'>

     { x.NiveauManagerials5}
      </td>:x.NiveauManagerials5==3?
      <td className='threecolor'>

     { x.NiveauManagerials5}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials5}
 </td>
      )}
    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Gestion d'équipe
</td>

   
{matrices.map((x,i)=>
      x.NiveauManagerials6==0?
      <td className='zerocolor'>

     { x.NiveauManagerials6}
      </td>:  x.NiveauManagerials6==1?
      <td className='onecolor'>

     { x.NiveauManagerials6}
      </td>: x.NiveauManagerials6==2?
      <td className='twocolor'>

     { x.NiveauManagerials6}
      </td>:x.NiveauManagerials6==3?
      <td className='threecolor'>

     { x.NiveauManagerials6}
      </td>:<td className='fourcolor'>

{ x.NiveauManagerials6}
 </td>
      )}

    </tr>
    <tr>


      <td rowspan="6">Compétences Techniques</td>
      <td className='fixemaricecompetancefirsttr'>Connaissances Métier
</td>
      
  
{matrices.map((x,i)=>
      x.niveauMetier1==0?
      <td className='zerocolor'>

     { x.niveauMetier1}
      </td>:  x.niveauMetier1==1?
      <td className='onecolor'>

     { x.niveauMetier1}
      </td>: x.niveauMetier1==2?
      <td className='twocolor'>

     { x.niveauMetier1}
      </td>:x.niveauMetier1==3?
      <td className='threecolor'>

     { x.niveauMetier1}
      </td>:<td className='fourcolor'>

{ x.niveauMetier1}
 </td>
      )}

    
    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Connaissance des normes et certifications</td>

    {matrices.map((x,i)=>
      x.niveauMetier2==0?
      <td className='zerocolor'>

     { x.niveauMetier2}
      </td>:  x.niveauMetier2==1?
      <td className='onecolor'>

     { x.niveauMetier2}
      </td>: x.niveauMetier2==2?
      <td className='twocolor'>

     { x.niveauMetier2}
      </td>:x.niveauMetier2==3?
      <td className='threecolor'>

     { x.niveauMetier2}
      </td>:<td className='fourcolor'>

{ x.niveauMetier2}
 </td>
      )}

    </tr>
    <tr>
    
    <td className='fixemaricecompetancefirsttr'>Connaissance de l'activité de l'entreprise et <br/> de l'environnement externe</td>

    {matrices.map((x,i)=>
      x.niveauMetier3==0?
      <td className='zerocolor'>

     { x.niveauMetier3}
      </td>:  x.niveauMetier3==1?
      <td className='onecolor'>

     { x.niveauMetier3}
      </td>: x.niveauMetier3==2?
      <td className='twocolor'>

     { x.niveauMetier3}
      </td>:x.niveauMetier3==3?
      <td className='threecolor'>

     { x.niveauMetier3}
      </td>:<td className='fourcolor'>

{ x.niveauMetier3}
 </td>
      )}

    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Connaissance de l'organisation et de<br/> l'environnement interne
</td>

{matrices.map((x,i)=>
      x.niveauMetier4==0?
      <td className='zerocolor'>

     { x.niveauMetier4}
      </td>:  x.niveauMetier4==1?
      <td className='onecolor'>

     { x.niveauMetier4}
      </td>: x.niveauMetier4==2?
      <td className='twocolor'>

     { x.niveauMetier4}
      </td>:x.niveauMetier4==3?
      <td className='threecolor'>

     { x.niveauMetier4}
      </td>:<td className='fourcolor'>

{ x.niveauMetier4}
 </td>
      )}
    </tr>
 
    <tr>
    <td className='fixemaricecompetancefirsttr'>Connaissance du SI & Bases des données 
</td>

{matrices.map((x,i)=>
      x.niveauMetier5==0?
      <td className='zerocolor'>

     { x.niveauMetier5}
      </td>:  x.niveauMetier5==1?
      <td className='onecolor'>

     { x.niveauMetier5}
      </td>: x.niveauMetier5==2?
      <td className='twocolor'>

     { x.niveauMetier5}
      </td>:x.niveauMetier5==3?
      <td className='threecolor'>

     { x.niveauMetier5}
      </td>:<td className='fourcolor'>

{ x.niveauMetier5}
 </td>
      )}

    </tr>
    <tr>
    <td className='fixemaricecompetancefirsttr'>Connaissances linguistiques et bureautiques
</td>
{matrices.map((x,i)=>
      x.niveauMetier6==0?
      <td className='zerocolor'>

     { x.niveauMetier6}
      </td>:  x.niveauMetier6==1?
      <td className='onecolor'>

     { x.niveauMetier6}
      </td>: x.niveauMetier6==2?
      <td className='twocolor'>

     { x.niveauMetier6}
      </td>:x.niveauMetier6==3?
      <td className='threecolor'>

     { x.niveauMetier6}
      </td>:<td className='fourcolor'>

{ x.niveauMetier1}
 </td>
      )}

    </tr>
  </tbody>
</table> 

  </div>
  </div>
  </div>


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
</div> </Fragment>  )  
}

const mapStateToProps = (state) => ({
    fiche: state.fiche,
  });

export default  connect(mapStateToProps, {GetMatrices}) (GetallMatrices)
