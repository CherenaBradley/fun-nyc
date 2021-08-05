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
          <img className="Listcontainer__image" src={data.image_url} />
      
      <div className="Listcontainer__details">
          <div className="Listcontainer__details--title">
            <h3>{data.name}</h3>
          </div>
          <div className="Listcontainer__details--address">
              <p1>Address: {data.location.display_address[0]} {data.location.display_address[1]}</p1>
          </div>
    
            {data.phone == "" ? " ": <div className="Listcontainer__details--phone"> Phone: {data.display_phone}</div> }
        
          <div className="Listcontainer__details__rating">
          <div class="stars-outer">
                <div class="stars-inner" style={{width: `${newRating}%` }}></div>
            </div>
            <span className="Listcontainer__details__rating--number">{data.review_count}</span>
        </div>
      </div>
    </div>

     
    
  )
}
export default ListItem;

