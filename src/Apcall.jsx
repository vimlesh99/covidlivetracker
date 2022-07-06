import react, { useEffect, useState } from 'react';



const CallData =()=>{
      
    const[data ,setData] = useState([])



    const getData = async ()=>{
        const res =await fetch('https://jsonplaceholder.typicode.com/posts');
        const empData =await res.json();
        console.log(empData);
        setData(empData)
    };


    useEffect(()=>{
        getData();
    },[])
return (
    <>
        {data.map((cur)=>{
            return(
                <h1>
                    {cur.body}sdksd
                </h1>
            )
        })}
    </>
)

}

export default CallData;