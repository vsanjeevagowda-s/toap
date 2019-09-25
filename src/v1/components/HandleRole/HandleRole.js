import React from 'react';
import { connect } from 'react-redux';

const HandleRole = (props) => {
  const { rolesAllowed, componentAllowedFn, role, otherComponentFn  } = props;
  if (rolesAllowed.includes(role)) {
    return componentAllowedFn();
  } else {
    return otherComponentFn ? otherComponentFn() : <React.Fragment/>;
  }
}
const mapStateToProps = (state) => {
  const { role } = state.user;
  return { role };
}

export default connect(mapStateToProps, null)(HandleRole);