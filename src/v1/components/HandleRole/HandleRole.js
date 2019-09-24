import React from 'react';
import { connect } from 'react-redux';

const HandleRole = (props) => {
  const { rolesAllowed, componentFun, role } = props;
  if (rolesAllowed.includes(role)) {
    return componentFun();
  } else {
    return <React.Fragment/>;
  }
}
const mapStateToProps = (state) => {
  const { role } = state.user;
  return { role };
}

export default connect(mapStateToProps, null)(HandleRole);