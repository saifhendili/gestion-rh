import React, { useEffect,Fragment,useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadUser } from '../../actions/auth';
import { getCategorieFiche } from '../../actions/compare'
import Spinner from './Spinner';

import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
color:white;
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
color:white;
cursor: pointer;
margin-left:-7px;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
color:white;
  padding: 0;

  padding-left: -9em;
  background: #00396b;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
color:white;
  list-style: none;
  margin-bottom: 0.8em;
`;

function Aside({getCategorieFiche,loadUser,auth:{user,loading},compare:{mycategorie}}) {
  const pathname = window.location.pathname 
  const [clicked, setclicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  
  const onclicked= () => {
 console.log(pathname)
    setclicked(true);
  };
  
  useEffect(()=>{
    getCategorieFiche()
    loadUser()
  },[])
  return loading || user === null ? (
    <Spinner />
    ) : (   <Fragment>
       <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 fixeaside colorbluee " id="sidenav-main">

    <hr class="horizontal dark mt-0"/>
    {user.typeuser=="SuperAdmin"?
     <ul class="navbar-nav">
    
        <li class="nav-item ">
          <a class="nav-link active">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">{user.firstname} {user.lastname} <br/> {user.typeuser}</span>
          </a>
        </li>

        <li className='droplisttest '>
        <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        <i class="ni ni-collection text-warning text-sm opacity-10 marginficheicon"></i>
          { "Fiche Liste"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {mycategorie.map(x => (
                <ListItem onClick={onOptionClicked(mycategorie)} key={Math.random()}>
                   <Link to={`/ListeFiche?categorie=${x}`} class="nav-link ">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              </div>
              <span class="nav-link-text ms-1 asidecolor" >List Fiche {x}</span>
            </Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
        </li>
        <li>
          <Link to="/ChooseFiche" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Comparer Les Fiches</span>
          </Link>
        </li>
        <li>
          <Link to="/getMatrice" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Matrice des Compétences</span>
          </Link>
        </li>
        <li>
          <Link to="/addnewfiche" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-fat-add text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Ajouter Nouveau Poste</span>
          </Link>
          </li>
  

         
          <li class="nav-item ">
          <Link to="/Add-Fiche" class="nav-link ">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Ajouter Fiche</span>
          </Link>
        </li>

        
  
        <li>
          <Link to="/RequestEdit" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-check-bold text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Valider la Modification</span>
          </Link>
        </li>
   
        <li> <Link  to="/add_user" class="nav-link">
            
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-single-02 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Ajouter Utilisateur</span>
          </Link></li>
      </ul>:user.typeuser=="Admin"? 
        <ul class="navbar-nav">

         <li class="nav-item ">
          <a class="nav-link active">

            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">{user.firstname} {user.typeuser} </span>
          </a>
        </li>
        <li className='droplisttest '>
        <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        <i class="ni ni-collection text-warning text-sm opacity-10 marginficheicon"></i>
          {"Fiche Liste"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {mycategorie.map(x => (
                <ListItem onClick={onOptionClicked(mycategorie)} key={Math.random()}>
                   <Link to={`/ListeFiche?categorie=${x}`} class="nav-link ">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              </div>
              <span class="nav-link-text ms-1 asidecolor" >List Fiche {x}</span>
            </Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
        </li>
        <li>
          <Link to="/ChooseFiche" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Comparer Les Fiches</span>
          </Link>
        </li>
        <li>
          <Link to="/getMatrice" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Matrice deS compétences</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Add-Fiche" class="nav-link ">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Ajouter Fiche</span>
          </Link>
        </li>
    
  

      
     
  
    
      </ul>:  
       <ul class="navbar-nav">
 
 <li class="nav-item ">
          <a class="nav-link active">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">{user.firstname} {user.lastname}</span>
          </a>
        </li>
        <li className='droplisttest '>
        <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        <i class="ni ni-collection text-warning text-sm opacity-10 marginficheicon"></i>
          { "Fiche Liste"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {mycategorie.map(x => (
                <ListItem onClick={onOptionClicked(mycategorie)} key={Math.random()}>
                   <Link to={`/ListeFiche?categorie=${x}`} class="nav-link ">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              </div>
              <span class="nav-link-text ms-1 asidecolor" >List Fiche {x}</span>
            </Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
        </li> 
  
          <li>
          <Link to="/ChooseFiche" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Comparer Les Fiches</span>
          </Link>
        </li>

        <li>
          <Link to="/getMatrice" class="nav-link">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 asidecolor">Matrice des compétences</span>
          </Link>
        </li>
    
      </ul>}
    

  </aside>
   </Fragment>
  )
}
const mapStateToProps = (state) => ({
  compare: state.compare,
auth:state.auth
});

export default connect(mapStateToProps, {loadUser,getCategorieFiche})(Aside);
