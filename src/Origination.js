 /*imports the use state  and useEffect */

import React, { useState,useEffect } from 'react';


const Origination =()=>{
        /*declaring a state variable to access the fetching data*/
  const[stations,setStations]=useState([]);
       /*state to control selected value*/
  const[selectedValue,setSelectedValue]=useState(null);
     /*useEffect function */
    useEffect(()=>{
     /* fetching data from the api */
      fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
      .then(Response=>Response.json())
      /*converts api in to the object array data*/
      .then(data=>setStations(data))
    },[])
    
    
      /*changeHandler function that gets an event */
     const changeHandler =(event)=>{
         /*displays the selected value*/
      setSelectedValue(event.target.value);
                         
      }


    return (
      <div>
        {/*select tag execute the change handler  on change*/}
        <select onChange={changeHandler}>
          {/* Option to select all*/}
          <option id="select">select a Transport Type</option>
          {/*Map the stations from the api to create a drop down list */}
          {stations.map((element, index) => {
            return <option key={console.log(index)}>{element.modeName}</option>;
          })}
        </select>
        <div>
          {/* displays the select value in front of the tube */}
          
          {/* if select value is null it returns back empty string else returns the selected value */}
          <p>TUBE: {selectedValue === null ? "" : selectedValue}</p>
        </div>
      </div>
    );
}

export default Origination;