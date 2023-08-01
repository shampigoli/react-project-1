import React from 'react';
import { useState } from 'react';
 function Update() {
    const [value, setvalue] = useState(0);
   
    const updatevalue = () =>{
        setvalue(value + 1);

    }

    const minusvalue = () =>{
        setvalue(value - 1);
    }

  return (
    <>
    <div>
        
    <p>My counting{value}</p>
    <button onClick={updatevalue}>click me</button>
    
    <button onClick={minusvalue}>click me</button>
    </div>

    </>
  )
}
export default Update;
