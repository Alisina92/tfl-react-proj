import React, { useEffect } from "react";

const Body = (props) => {
 
  console.log(props.destination.routeSections);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${props.selectedLine}/Route`)
      .then((Response) => Response.json())
      .then((data) => props.setDestination(data));
  }, [props.selectedLine]);

;
  return (
    <div>
      {props.destination.routeSections ? (
        <div className="flex-box">
          <div className="section">
            <h4>Start of the Line</h4>
            {props.destination.routeSections[0].originationName}
          </div>

          <div className="section">
            <h4>End of the Line</h4>
            {props.destination.routeSections[0].destinationName}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
