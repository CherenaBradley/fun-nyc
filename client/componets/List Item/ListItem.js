import React from 'react';
import './ListItem.scss'

const ListItem = (props) => {
    const { projectData } = props;
  return (
    <div className="hmm">
        {
          projectData.map(data => (
            <div className="well">
              <span>
                <img className="imges" src={data.image_url}/>
              </span>
              <span>{data.name}</span>
              
              <div><button>Read More</button> </div>
              
              </div>
          ))
        }
    </div>
  )
}
export default ListItem;