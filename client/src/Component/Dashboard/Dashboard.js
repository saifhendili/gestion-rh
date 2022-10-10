import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import Spinner from "../Layout/Spinner"
import { connect } from 'react-redux';
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';
import GetallMatrices from '../Competance/GetallMatrices';

function Dashboard({auth:{user,loading}}) {
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
       {
    user.typeuser == 'SuperAdmin'?<DashboardAdmin/>
    : user.typeuser == 'Admin'?<DashboardAdmin/>
    : user.typeuser == 'Consultant'?<GetallMatrices/>
    :null
}</Fragment>
    )
}


Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,

}
const mapStateToProps = (state) => ({
  auth: state.auth,
  
});

export default connect(mapStateToProps, {
  
})(Dashboard);