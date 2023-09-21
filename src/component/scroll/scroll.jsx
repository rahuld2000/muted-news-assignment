import React, { useEffect, useState } from 'react'
import Modal from '../modal/modal';
import "./scroll.css"
function Scroll() {
    let[page,setpage]=useState(1)
    let[data,setData]=useState([])

    //Modal show and hide
    const[showmodal,setmodal]=useState(false);
    const[modaldata,setmodaldata]=useState([])
    let showmod=()=>{
        setmodal(false);
    }

    // data for Modal
   function moddata(item){
    setmodaldata(item)
   
   }

   // fetching api
    useEffect(()=>{

        const apifetch=()=>{

            const url = new URL('https://650b4903dfd73d1fab09db6b.mockapi.io/user');
            url.searchParams.append('completed', false);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', 5);
            
            fetch(url, {
              method: 'GET',
              headers: {'content-type':'application/json'},
            }).then(res => {
              if (res.ok) {
                  return res.json();
                 
              }
            
            }).then(tasks => {
                setData((prev) => [...prev, ...tasks])
              // mockapi returns first 10 tasks 
            }).catch(error => {
                console.log(error)
              // handle error
            })
        }
       apifetch();

    },[page])

    //Infinte Scroll
const infiniteScroll=()=>{
    try {
        if (
            window.innerHeight + document.documentElement.scrollTop +1 >=
            document.documentElement.scrollHeight
          ) {
            setpage((prev) => prev + 1);
          }
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    window.addEventListener("scroll",infiniteScroll)
    return () => window.removeEventListener("scroll", infiniteScroll);
},[])


  return (
    <div className='scroll'>

   
    <div className='scroll_main'>
        {data.map((item)=>(
            <div   onClick={()=>moddata(item)} >
            <div onClick={()=> 
                
                setmodal(true)} key={item.id} className='scroll_card'>
            <p>{item.id}</p>
            <img src={item.avatar} alt="error" width="150px" />
            <div className='desc' >
            <p className='name'>{item.name}</p>
             <p>{item.description}</p>
            </div>
            

            </div>
            </div>

        ))}
    </div>
    {  showmodal && (<Modal data={modaldata}  parent={()=>showmod} /> )}
  </div>
  )
}

export default Scroll