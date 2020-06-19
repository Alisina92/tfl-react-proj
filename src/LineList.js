import React,{useEffect} from 'react';

const LineList = (props) =>{
  
  
  useEffect(() => {
    /* if props selected value not equal null fetch the data */
    if (props.selectedValue) {
      fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selectedValue}`)
        .then((Response) => Response.json())
        .then((data) => props.setLineSelector(data)); // data
    }
  }, [props.selectedValue]);// pass props as in array dependency
     
      /* if props line selector  is null return nothing selected*/ 
    if(props.lineSelector==null){
       return 'nothing selected'
   }
      /*change handler function executes  if line is selected   */
   const changeHandler =(event)=>{
       props.setSelectedLine(event.target.value) 
   }
return (
  <div>
    {/* onchange executes the function if option is selected*/}
    <select onChange={changeHandler}>
      {<option>select a line:</option>}
      {/* maps through the line selector to display the line option */}
      {props.lineSelector.map((element, index) => {
        return <option key={index}>{element.name}</option>;
      })}
    </select>
    {/* display the line selected on the page*/}
     <p>Line selected:{props.selectedLine}</p> 
  </div>
);
  



}


export default LineList;
    
