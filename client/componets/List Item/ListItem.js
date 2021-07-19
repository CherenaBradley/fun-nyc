import React from 'react';
import './ListItem.scss'

const ListItem = (props) => {
    const { projectData } = props;
  return (
    <div className="well">{projectData.name}</div>
  )
}
export default ListItem;