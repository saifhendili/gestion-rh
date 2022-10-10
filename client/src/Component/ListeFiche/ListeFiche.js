    import React, { useEffect,Fragment,useState } from 'react'
    import { connect } from 'react-redux';
    import { useSearchParams } from 'react-router-dom';
    import { loadUser } from '../../actions/auth';
    import { getCategorieFiche } from '../../actions/compare';

    import { getFiches } from '../../actions/fiche'

    import Aside from '../Layout/Aside'
    import Spinner from '../Layout/Spinner'
    import FicheItem from './FicheItem';

    function ListeFiche({loadUser,getCategorieFiche,getFiches,auth:{user},fiche:{fiches,loading}}) {
        useEffect(()=>{

            getFiches()
            loadUser()
        },[])
      const [Search, setSearch] = useState('');

        const [searchParams] = useSearchParams();
        useEffect(() => {
          getCategorieFiche();
          
          },[]);

          const handleChange = (e) => {
            setSearch(e.target.value);
          };
        return loading || fiches===null ||user==null? (
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
          <div class="card-header pb-0 fixtable">
            <h6>Liste Fiche {searchParams.get("categorie")}</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
            <div className="main-form">
                  <label htmlFor="main-search" />
                  <input className="input-text input-text--border-radius input-text--style-1" type="text" onChange={(e)=>handleChange(e)} id="main-search" placeholder="Search" />
                  <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></div>
              <table class="table align-items-center mb-0 mt-0">
                <thead>
                  <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Titre</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Categorie</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Sous Categorie</th>
                    <th class="text-secondary opacity-7">Print</th>
                    <th class="text-secondary opacity-7">Show</th>
                    {user.typeuser=="Consultant"?null:                <th class="text-secondary opacity-7">Edit</th>
    }

    {user.typeuser=="SuperAdmin"?<th class="text-secondary opacity-7">Delete</th>:null}
                    
                  </tr>
                </thead>
                <tbody>
              
                {  fiches.filter(el =>
                                el.titre.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                <FicheItem key={i} categorie={searchParams.get("categorie")} fiche={x} />
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

    const mapStateToProps = (state) => ({
        fiche: state.fiche,
      auth: state.auth,

      });
      export default connect(mapStateToProps, {loadUser, getFiches,getCategorieFiche })(ListeFiche);