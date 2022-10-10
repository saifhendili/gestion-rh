// import React ,{useState,useEffect,Fragment}from 'react'
// import { getMatriceCometance } from '../../actions/compare'
// import Aside from '../Layout/Aside';

// import { connect } from 'react-redux';
// import { getCategorie, getCompetance, getSousCategorie } from '../../actions/fiche';
// import Spinner from '../Layout/Spinner';
// import { Link, useNavigate } from "react-router-dom";

// function GetMatrice({getCompetance,getCategorie, getSousCategorie,getMatriceCometance,compare:{matrice},fiche:{MyCategorie,Competances,Souscategorie,loading}}) {
//     const [Categories, setcategorie] = useState('SUPPORT');
  
//     const [Libelle, settitre] = useState('administrateur de base des données');
//     const [SousCategorie, setSousCategorie] = useState();
//     const [isOpen, setisOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(()=>{
//         getSousCategorie(Categories)
//       },[Categories])

//       useEffect(()=>{
//         getCategorie()
//         getCompetance()
//       },[])
//       return loading|| MyCategorie ==null ? (
//         <Spinner />
//       ) : (
//     <Fragment>
//     <div class="g-sidenav-show   bg-gray-100">
//     {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
// <Aside/>
// <div  class="main-content position-relative border-radius-lg ">
// <div class="container-fluid py-4 fix-table">
// <div class="row">
//   <div class="col-12">
//   <div class="card mb-4">
//   <div class="card-header pb-0 fixtable">
//   <h6>Ajouter Fiche</h6>
// </div>

//   <form className='fixecard'>

//              <div class="form-group ">
// <label for="formGroupExampleInput">Categorie</label>
// <select
// class="form-select" 
// value={Categories}
//             name='Categories'
//             onChange={(e) => setcategorie(e.target.value)}
//           >
//                        <option className='option-type-profile'></option>

//             {MyCategorie.map((x,i)=>
//                        <option key={i} className='option-type-profile'>{x}</option>

//            )}
           
//           </select>
// </div>

// <div class="form-group ">
// <label for="formGroupExampleInput">Sous Categorie</label>
// <select
// class="form-select" 
// value={SousCategorie}
//             name='SousCategorie'
//             onChange={(e) => setSousCategorie(e.target.value)}
//           >
//                                    <option className='option-type-profile'></option>

// {Souscategorie.map((x,i)=>

// <option key={i} className='option-type-profile'>{x}</option>

// )}
// </select>

// </div>
// <div class="form-group ">
// <label for="formGroupExampleInput">Titre du poste</label>
// <select
//   class="form-select" 
//   value={Libelle}
//               name='Libelle'
//             onChange={(e) => settitre(e.target.value)}
//             >
//                        <option className='option-type-profile'></option>

// {Competances.map((x,i)=>
//  SousCategorie==x.souscategorie?
//   <option className='option-type-profile'>{x.Libelle}</option>:null
//   )
 
// }
// </select>
// </div>

// {
//     !Categories|| !Libelle?
//     <button class="btn btn-primary" disabled type="submit">Competance</button>
// :
// <Link to={`/mymatrice?Libelle=${Libelle}&SousCategorie=${SousCategorie}&Categories=${Categories}`}> <button class="btn btn-primary" type="submit">Competance</button></Link>

// }

// </form>



//   </div>


//   </div>
// </div>


// <footer class="footer pt-3  ">
//   <div class="container-fluid">
//     <div class="row align-items-center justify-content-lg-between">
//       <div class="col-lg-6 mb-lg-0 mb-4">
//         <div class="copyright text-center text-sm text-muted text-lg-start">
//           © <script>
//             document.write(new Date().getFullYear())
//           </script>,
//           made with <i class="fa fa-heart"></i> by
//           <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>
//           for a better web.
//         </div>
//       </div>
//       <div class="col-lg-6">
//         <ul class="nav nav-footer justify-content-center justify-content-lg-end">
//           <li class="nav-item">
//             <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
//           </li>
//           <li class="nav-item">
//             <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
//           </li>
//           <li class="nav-item">
//             <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
//           </li>
//           <li class="nav-item">
//             <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </footer>
// </div>
// </div>
// </div> </Fragment>  )
// }
// const mapStateToProps = (state) => ({
//     compare: state.compare,
//     fiche: state.fiche,
//   });

// export default  connect(mapStateToProps, {getCompetance,getCategorie, getSousCategorie, getMatriceCometance}) (GetMatrice)
