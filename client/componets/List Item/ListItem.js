import React from 'react';
import './ListItem.scss'

const ListItem = (props) => {
    const { data } = props;
    const rating = (data.rating/5)*100;
    const newRating = Math.round(rating/10)*10
    console.log(rating)
    
  return (
    
    <div className="Listcontainer">
      <div className="ListCard">
        <div className="ListCard__front">
        <h3 className="ListCard__front--title">{data.name}</h3>
        <img className="ListCard__front" src={data.image_url} />
        </div>
         
        <div className="ListCard__back">
          <div className="ListCard__back__details">
          <div className="ListCard__back__details--title">
            <h3>{data.name}</h3>
          </div>
          <div className="ListCard__back__details--address">
              <p1>Address: {data.location.display_address[0]} {data.location.display_address[1]}</p1>
          </div>
    
            {data.phone == "" ? " ": <div className="ListCard__back__details--phone"> Phone: {data.display_phone}</div> }
        
          <div className="ListCard__back__details__rating">
          <div class="stars-outer">
                <div class="stars-inner" style={{width: `${newRating}%` }}></div>
            </div>
            <span className="ListCard__back__details__rating--number">{data.review_count}</span>
        </div>
      </div>

        </div>

      </div>
    </div>

     
    
  )
}
export default ListItem;

