import React from 'react'

export default function HandleRole(props) {
  const { rolesAllowed, userRole, componentFun } = props;
  if (rolesAllowed.includes(userRole)) {
    return componentFun();
  } else {
    return <React.Fragment/>;
  }
}