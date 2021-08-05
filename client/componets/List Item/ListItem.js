import React from 'react';
import './ListItem.scss'

const ListItem = (props) => {
    const { data } = props;
    const rating = (data.rating/5)*100;
    const newRating = Math.round(rating/10)*10
    console.log(rating)
    //const ratingPercent = `${Math.round(rating/10)*10}%`
    
  return (
    
    <div className="Listcontainer">
      <div className="ListCard">
          <img className="ListCard__front" src={data.image_url} />

        

        <div className="ListCard__back">
          <p>I am the back</p>

        </div>

      </div>
    </div>

     
    
  )
}
export default ListItem;

