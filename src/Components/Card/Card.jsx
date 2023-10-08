import { Link } from "react-router-dom";
import PropTypes from 'prop-types'



const Card = ({ cards }) => {
  const { name, id, description, image, price } = cards;


  return (
    


<div  className="card w-96 bg-base-100 shadow-xl">
    
    <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p className="text-xl text-lg">Price:${price}</p>
            <p className="text-start">{description}</p>
            <div className="card-actions">
              <button className="btn btn-primary">
                <Link to={`/cards/${id}`}> See More</Link></button>
            </div>
          </div>
        
    
    </div>



 
     
      
  );
};

Card.propTypes = {
  cards:PropTypes.string
}
export default Card;

