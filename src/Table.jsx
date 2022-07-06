import React ,{useState}from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./covid.css";





const Table = ({apData , inpFun ,inpData})=>{
    const [stData , setStateData] = useState("");


    
    return (
        <>
         <table className="table table-hover">
            <thead className="thead-dark    ">
                    <tr>
                        <th>state <input placeholder="Search... statewise " onChange={inpFun} value={inpData} /> </th>
                        <th>conforimed</th>
                        <th>delta confirmed</th>
                        <th>deaths</th>
                        <th>active</th>
                        <th>recovered</th>
                    </tr>
                </thead>
                <tbody>
                {apData.map((curElm, ind)=>{
                    return(
                        <tr key={curElm.active}>
                        <td>{curElm.state}</td>
                        <td>{curElm.confirmed}</td>
                        <td>{curElm.deltaconfirmed}</td>
                        <td>{curElm.deaths}</td>
                        <td>{curElm.active}</td>
                        <td>{curElm.recovered}</td>
                    </tr> 
                    )
                })}
               
                </tbody>
            </table>
        </>
    )
}

export default Table;