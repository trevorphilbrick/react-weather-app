import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main";

const RenderMain = (props) =>{
  if(props.position == null){
    return <h3>Loading..</h3>
  } 
  return   <Main position={props.position} />
      
}

function App() {
const [position, setPosition] = useState(null)

  const getGeolocation = () => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(  position => {
setPosition(position)
      })
    } else {
      console.log("Not Available");
    }
  }
  


  


useEffect( () =>{
  getGeolocation()
},[])

console.log(position)



  return (
    <div className="App">
      <RenderMain position={position} />
    </div>
  );
}

export default App;
