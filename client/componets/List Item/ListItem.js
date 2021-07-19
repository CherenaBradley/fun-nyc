import React from 'react';

const ListItem = (props) => {
    const { projectData } = props;
  return (
    <div>{projectData.name}</div>
  )
}
export default ListItem;