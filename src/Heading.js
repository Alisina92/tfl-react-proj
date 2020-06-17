import React,{useState} from 'react';
import Title from './Title';
import TransportList from './TransportList';
import LineList from './LineList';
 /*Heading will have  Title origination and destination*/
const Heading =()=>{
    /*declaring a state variable to access the fetching data*/
  const[stations,setStations]=useState([]);
       /*state to control selected value*/
  const[selectedValue,setSelectedValue]=useState(null);
     /*useEffect function */
   const [selectedLine,setSelectedLine] = useState([]); 

   const [lineSelector, setLineSelector] = useState(null); 

  return (
    <div>
      <Title />
        {/*passed props to components*/}
      <TransportList
        stations={stations}
        setStations={setStations}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <LineList
        stations={stations}
        setStations={setStations}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
         selectedLine={selectedLine}
         setSelectedLine={setSelectedLine}
         lineSelector={lineSelector}
         setLineSelector ={setLineSelector}
      />
    </div>
  );
}


export default Heading