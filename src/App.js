import React, { useState } from "react";

import "./App.css";
import Heading from "./Heading";
import Body from "./Body";

/*App JS will have the head and body components*/
const App = () => {
  /*declaring a state variable to access the fetching data*/
  const [stations, setStations] = useState([]);
  /*state to control selected value*/
  const [selectedValue, setSelectedValue] = useState(null);
  /*useEffect function */
  const [selectedLine, setSelectedLine] = useState('');

  const [lineSelector, setLineSelector] = useState(null);
   
  const [destination,setDestination] = useState({})
  return (
    <div>
      <Heading
        stations={stations}
        setStations={setStations}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        selectedLine={selectedLine}
        setSelectedLine={setSelectedLine}
        lineSelector={lineSelector}
        setLineSelector={setLineSelector}
      />
      <Body
        destination={destination}
        setDestination={setDestination}
        selectedLine={selectedLine}
        setSelectedLine={setSelectedLine}
      />
    </div>
  );
};

export default App;
