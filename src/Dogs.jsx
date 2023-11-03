import React, { useEffect, useState } from "react";



const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    const [nextDog, setNextDog] = useState(0);
  
   
   useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setDogs(data));
    }, [nextDog]);
    return (
      <div>
      
        
        <img src={dogs.message} alt="dogs" width={"50%"} height={"550px"}/>
        <button className="btn btn-success dog" onClick={()=> setNextDog(nextDog+1)}>NEXT DOG</button>
  
        
      </div>
    );
};

export default Dogs;