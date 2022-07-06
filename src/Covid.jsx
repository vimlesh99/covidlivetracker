import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./covid.css";
import Table from "./Table";

const Covid =()=>{
    const [data , setData] = useState([]);
    // const [ fData , setFData] =useState([]);
    const [stData , setStateData] = useState("");

 
    const getInput =(event)=> setStateData(event.target.value);
    
   

    const search = (apData)=>{    
        console.log(apData);
        return apData.filter((item,curItem)=> item.state.toLowerCase().includes(stData)||item.statecode.toLowerCase().includes(stData))
    }

    const getCovidData = async ()=>{
        const res = await fetch("https://data.covid19india.org/data.json");
        const covidData = await res.json();
        console.log(covidData.statewise)
        setData(covidData.statewise)
    }
    useEffect(()=>{
       getCovidData();
    },[]);

    return(
        <>
            <div className=" container-fluid mt-5">
            <div className="main-heading">
            <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
            </div>
            <div className="table-responsive">
                <Table  apData={search(data)}  inpFun={getInput}  inpData={stData}/>
                
                
            </div>
            </div>
        </>
    )
}

export default Covid;