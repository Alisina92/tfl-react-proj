import React from 'react';
import Title from './Title';
import TransportList from './TransportList';
import LineList from './LineList';
 /*Heading will have  Title origination and destination*/
const Heading =(props)=>{
  
  return (
    <div>
      <Title />
        {/*passed props to components*/}
      <TransportList
        stations={props.stations}
        setStations={props.setStations}
        selectedValue={props.selectedValue}
        setSelectedValue={props.setSelectedValue}
      />
      <LineList
        stations={props.stations}
        setStations={ props.setStations}
        selectedValue={props.selectedValue}
        setSelectedValue={props.setSelectedValue}
         selectedLine={props.selectedLine}
         setSelectedLine={props.setSelectedLine}
         lineSelector={props.lineSelector}
         setLineSelector ={props.setLineSelector}
      />
    </div>
  );
}


export default Heading