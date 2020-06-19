/*imports the use state  and useEffect */

import React, { useEffect } from "react";
/*the preferred fix is to destructure the 'props' object outside of the useEffect call 
 and refer to those specific props inside useEffect*/

const TransportList = (props) => {
  const setStations = props.setStations;
  
  useEffect(() => {
    /* fetching data from the api */
    fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
    .then((Response) => Response.json())
      /*converts api in to the object array data*/
    .then((data) =>setStations(data));
  }, [setStations]);

  /*changeHandler function that gets an event */
  const changeHandler = (event) => {
    /*displays the selected value*/
    props.setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/*select tag execute the change handler  on change*/}
      <select onChange={changeHandler}>
        {/* Option to select all*/}
        <option id="select">select a Transport Type</option>
        {/*Map the stations from the api to create a drop down list */}
        {props.stations.map((element, index) => {
          return <option key={index}>{element.modeName}</option>;
        })}
      </select>
      <div>
        {/* displays the select value in front of the tube */}

        {/* if select value is null it returns back empty string else returns the selected value */}
        <p>Selected Mode: {props.selectedValue}</p>
      </div>
    </div>
  );
};

export default TransportList;
