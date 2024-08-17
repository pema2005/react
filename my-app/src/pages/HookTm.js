import axios from "axios";
import{ useEffect, useState } from "react";
export default function HookTm(){
    // let num=5;
    const[num,setNum]=useState(null);
    const[allDog,setALLDog]=useState([]);

    


    // const increase= () => {
    //     setNum(num+1)

    
    // };
  
      const getData=async ()=>{
        const options = {
          method: 'GET',
          url: 'https://dog.ceo/api/breeds/list/all',
     
        };
        const responce= axios.request(options);
        // console.log(responce)
        setALLDog((await responce).data.message)
      }



    }
    // const getData =()=>{
    //     const responce= fetch("./data.json");
    //     console.log(responce)
    // }
    // useEffect(()=>{
    //     console.log("response")
    //     setNum(2)
    // },[]);

    // const Datalist = () => {
    //         return( 
    //             <>
    //             {
    //             arr.map((data,idx)=>{
    //                 return(

    //             <div className="col-sm-4">
    //              <div className="card-single card">

    //             <div className="card-single card p-4">
    //            <h3 className="card-title">Ram</h3>
    //               <p>Roll no. {data}</p>
    //               <p>Kathmandu,Nepal</p>
    //               </div>
    //               </div>
    //               </div>

    //         )
    //     })}
      
    // </>
    //         )
    //     };

//   return(
//     <>
//     {/* <p>i am from Hook pages{num}</p>
//   <button onClick={()=>setNum(num+1)}>click me</button> */}
//   <div className="container">
//   <div className="row">


//     </div>
//     </div>
 


 
//  </>
//  );


// // }