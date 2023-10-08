import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";


const Details = () => {
    const [userDetails,seruserDetalis]=useState({})
    const {id} = useParams()
    const cardDetails = useLoaderData();
  
    
    useEffect(()=>{
        const details= cardDetails.find(card=> card.id== id)
        seruserDetalis(details)

    },[id,cardDetails])

    return (
        <div>
            <Navbar></Navbar>
            <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img  src={userDetails.image} alt="Shoes" className="rounded-xl w-1/3" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userDetails.name}</h2>
        <p className="text-start">{userDetails.description}</p>
        <div className="card-actions">
        </div>
      </div>
    </div>
        </div>
    );
};

export default Details;