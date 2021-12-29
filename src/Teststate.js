import React, {useState, useEffect} from 'react';


const mystyle = {
    backgroundColor: "DodgerBlue",
    padding: "100px"
  };

function Teststate() {

    var[count, setCount] = useState(0);
    console.log("The value in initialCount variable >>>>>>>>>>>>>>",count);
    var countStateVariable = useState(0); // Returns a pair
    var count = countStateVariable[0]; // First item in a pair
    var setCount = countStateVariable[1]; // Second item in a pair
    console.log("The value in Count variable >>>>>>>>>>>>>>",count);
    console.log("The value in setCount variable >>>>>>>>>>>>>>",setCount);
  
    const increment = () => {
        setCount(count+1);
        // console.log("the incremented count is >>>>>>>>>>>>>>",count);
    }

    const decrement = () => {
        setCount(count-1);
        // console.log("the decremented count is >>>>>>>>>>>>>>",count);
    }
// On every render
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log('i rendered !!!!!!!!!!!!!!!');
      });

      useEffect(()=>{
        console.log('******** The Component Mounted******');
      });

      useEffect(()=>{
          return()=>{
              console.log("+++++++++++++++we un-mounted the component++++++++++++++");
          }
      })

    return (
        <div style={mystyle}>
            <h1>{ count }</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Teststate;
