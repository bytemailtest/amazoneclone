import './App.css';
import Header from './Header';
import React, { useEffect } from 'react';
import { auth } from './firbase';
import { useStateValue } from './StateProvider';



function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("The user is >>>", authUser);
      if(authUser){
        dispatch({
          type : "SET_USER",
          user : authUser
        });
      }
      else{
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    });
  },[]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;


