// import Error from "next/error";

import { useEffect, useState } from "react";
import Error from "./_error";


export default function Home() {
  
  const [test,setTest] = useState(1000);
  const [error,setError] = useState();

  function err(){
    fetch('http://aaaaa.com')
    .catch((e)=>{
      setError(e)
    })  
  }

  if(error) return <Error statusCode={error}/>

  return (
    <>
      <div><button onClick={err}>error</button></div>

      
      main page...<br/>
      {test}<br/>
      <img src="img_01.jpg" onClick={()=>setTest(2000)}/>
    </>
  );
}


