import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [all, setAll] = useState("")

  useEffect(() => {
  
      try {
       axios.get("http://localhost:8000/")
       .then((res)=>{
        console.log(res.data);
         setAll(res.data.msg)
       
       })
       .catch((err)=>{
        console.log(err)
       })
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    
  }, []);

  return (
    <>
      <div className="App">{all}</div>
    </>
  );
}

export default App;
