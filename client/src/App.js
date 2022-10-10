import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Test from './Component/Layout/Test';
import ListeFiche from './Component/ListeFiche/ListeFiche';
import AddFichePost from './Component/FichePost/AddFichePost';
import GetDetailsFiche from './Component/FichePost/GetDetailsFiche';
import EditFiche from './Component/FichePost/EditFiche';
import AddUser from './Component/Auth/AddUser';
import PrintFiche from './Component/FichePost/PrintFiche';
import ChooseFiche from './Component/Compare/ChooseFiche';
import GetReq from './Component/Version/GetReq';
import Detailsreq from './Component/Version/Detailsreq';
import Myversion from './Component/Version/Myversion';
import AddCompetance from './Component/Competance/AddCompetance';
import GetallMatrices from './Component/Competance/GetallMatrices';
import GetMatriceFiltred from './Component/Competance/GetMatriceFiltred';
import PrintCompare from './Component/Compare/PrintCompare';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment >
          <Navbar />
          {/* <Route exact path='/' component={Landing} /> */}
          <section className='container'>
            <Alert className='aaa' />
            <Routes>
            <Route path='/test' element={<Test/>} />
            <Route path="/print-fiche" element={<PrivateRoute><PrintFiche/></PrivateRoute>} />
    
              {/* <Route path='/register' element={<Register/>} /> */}
              <Route path='/login' element={<Login/>} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route path="/Add-Fiche" element={<PrivateRoute><AddFichePost/></PrivateRoute>} />
              <Route path="/ListeFiche" element={<PrivateRoute><ListeFiche/></PrivateRoute>} />
              <Route path="/fiche" element={<PrivateRoute><GetDetailsFiche/></PrivateRoute>} />
              <Route path="/Editfiche" element={<PrivateRoute><EditFiche/></PrivateRoute>} />
              <Route path="/add_user" element={<PrivateRoute><AddUser/></PrivateRoute>} />
              <Route path="/ChooseFiche" element={<PrivateRoute><ChooseFiche/></PrivateRoute>} />
              <Route path="/compare" element={<PrivateRoute><PrintCompare/></PrivateRoute>} />
              <Route path="/RequestEdit" element={<PrivateRoute><GetReq/></PrivateRoute>} />
              <Route path="/details-request" element={<PrivateRoute><Detailsreq/></PrivateRoute>} />
              <Route path="/myversion" element={<PrivateRoute><Myversion/></PrivateRoute>} />
              <Route path="/addnewfiche" element={<PrivateRoute><AddCompetance/></PrivateRoute>} />
              <Route path="/getMatrice" element={<PrivateRoute><GetallMatrices/></PrivateRoute>} />
              <Route path="/mymatrice" element={<PrivateRoute><GetMatriceFiltred/></PrivateRoute>} />
              
              
              
              
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
