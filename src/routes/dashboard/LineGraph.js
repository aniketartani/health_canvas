import React, { useEffect, useRef, useState } from "react";
import "./graph.css";

import { Line } from "react-chartjs-2";


export default function LineGraph() {
  // const [values, setValues] = useState({})
  // let project = async () =>{
      
  //     const res = await fetch(`https://builderneed-env.eba-twexh8nd.us-west-2.elasticbeanstalk.com/dashboard/lander.php?phone=9483887537`) 
  //     const data = await res.json()
  //     setValues(data)
  //     console.log(values.project);
  // }
  // useEffect(() => {
  //     project()
  // }, [])
  return (
    <div className="blocksi padding">
      <Line data={{
        
  
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","july","Aug","Sep","Oct","Nov","Dec"],
  
  datasets: [
    {
      label: "Leads",
      data: [21,32,54,34,32,12,34,23],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgb(86,198,109)"
    },
    // test
    {
      label: "Site Visits",
      data: [21,10,11,12,23],
      fill: false,
      borderColor: "rgb(251,192,73)"
    }
  ]
}}
/>

    </div>
  );
}
