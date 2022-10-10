import React, { useEffect,Fragment,useState } from 'react'
import { connect } from 'react-redux';
import { addFicheCompare, addFicheCompareTwo, getCategorieFiche, getSousCategorieFiche,getSousCategorieFiche2} from '../../actions/compare';

import { getFiche,getFiches } from '../../actions/fiche'
import fiche from '../../reducers/fiche';
import Aside from '../Layout/Aside'
import Spinner from '../Layout/Spinner'
import { useNavigate } from "react-router-dom";

function ChooseFiche({addFicheCompare,addFicheCompareTwo,getFiche,getFiches, getCategorieFiche, getSousCategorieFiche,getSousCategorieFiche2,
    fiche:{fiches,fiche,loading},compare:{mycategorie,mysouscategorie,mysouscategorie2}}) {
    const [titre, settitre] = useState();
    const [fiche1, setfiche1] = useState();
    const [togglemenu, settogglemenu] = useState(false);


    const [Categorie, setcategorie] = useState('SUPPORT');
    const [SousCategorie, setSousCategorie] = useState();
    const [fiche2, setfiche2] = useState();

    const [Categorie2, setcategorie2] = useState('SUPPORT');

    const [SousCategorie2, setSousCategorie2] = useState();
    let navigate = useNavigate();

    const submitCompare=async(e)=>{

            await   addFicheCompare(fiche1)
            await addFicheCompareTwo(fiche2)

    navigate(`/compare`);

      }
      const openMenu=async(e)=>{

        settogglemenu(true)

  }
      useEffect(()=>{
        getSousCategorieFiche2(Categorie2)
      },[Categorie2])

      useEffect(()=>{
        getSousCategorieFiche(Categorie)
      },[Categorie])
      useEffect(()=>{
        getCategorieFiche()
          getFiches()
      },[])
    return loading || fiches===null||mycategorie===null ? (
        <Spinner />
      ) : (
        <Fragment>
    <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
    {togglemenu==false?    <img onClick={e=>openMenu(e)} src='https://www.freeiconspng.com/uploads/menu-icon-0.png' alt='menu' className='imgmenupng'/>
:<Aside/> }
{/* */}
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Comparer les fiches</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fiche 1</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Fiche 2</th>
             
              </tr>
            </thead>
            <tbody>
  <td>
          
             {/* {fiches.map((x,i)=>
             <FicheItemBusiness key={i} fiche={x} />
             )} */}
               <div class="form-group ">
<label for="formGroupExampleInput">Categorie</label>
<select
class="form-select" 
value={Categorie}
            name='Categorie'
            onChange={(e) => setcategorie(e.target.value)}
          >
            <option className='option-type-profile'></option>
          {mycategorie.map((x,i)=>
            <option className='option-type-profile'>{x}</option>

          )}
          </select>
</div>

<div class="form-group ">
<label for="formGroupExampleInput">Sous Categorie</label>
<select
class="form-select" 
value={SousCategorie}
            name='SousCategorie'
            onChange={(e) => setSousCategorie(e.target.value)}
          >
            <option className='option-type-profile'></option>

    {
mysouscategorie.map((x,i)=>
            <option className='option-type-profile'>{x}</option>


)}


</select>

</div>
<label for="formGroupExampleInput">Titre</label>

<select
   class="form-select" 
   value={titre}
               name='titre'
               onChange={(e) => setfiche1(e.target.value)}
             >
  <option className='option-type-profile'></option> 

{fiches.map((x,i)=>  
  x.SousCategorie==SousCategorie &&  x.Categorie== Categorie?
  <option key={i} value={x._id} className='option-type-profile'>{x.titre}</option> :null
)}
  </select>
  </td>
  <td>
          
             {/* {fiches.map((x,i)=>
             <FicheItemBusiness key={i} fiche={x} />
             )} */}
               <div class="form-group ">
<label for="formGroupExampleInput">Categorie</label>
<select
class="form-select" 
value={Categorie2}
            name='Categorie2'
            onChange={(e) => setcategorie2(e.target.value)}
          >
            <option className='option-type-profile'></option>
          {mycategorie.map((x,i)=>
            <option className='option-type-profile'>{x}</option>

          )}
          </select>
</div>

<div class="form-group ">
<label for="formGroupExampleInput">Sous Categorie</label>
<select
class="form-select" 
value={SousCategorie2}
            name='SousCategorie2'
            onChange={(e) => setSousCategorie2(e.target.value)}
          >
            <option className='option-type-profile'></option>

    {
mysouscategorie2.map((x,i)=>
            <option className='option-type-profile'>{x}</option>


)}


</select>

</div>
<label for="formGroupExampleInput">Titre</label>

<select
   class="form-select" 
   value={titre}
               name='titre'
               onChange={(e) => setfiche2(e.target.value)}
             >
  <option className='option-type-profile'></option> 

{fiches.map((x,i)=>  
  x.SousCategorie==SousCategorie2 &&  x.Categorie== Categorie2?
  <option key={i} value={x._id} className='option-type-profile'>{x.titre}</option> :null
)}
  </select>
  </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
    <button onClick={(e)=>submitCompare()} className='btn btn-primary'>Compare</button>
 
    </div> </div>
</div>


</div>
</div>
</div> 
</Fragment> )

}

const mapStateToProps = (state) => ({
    fiche: state.fiche,
    compare: state.compare,

  });
  
  export default connect(mapStateToProps, {getCategorieFiche, getSousCategorieFiche,getSousCategorieFiche2,getFiches,addFicheCompare,getFiche ,addFicheCompareTwo})(ChooseFiche);