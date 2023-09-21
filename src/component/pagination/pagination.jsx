import React, { useEffect, useState } from 'react'
import "./pagination.css"
import Modal from '../modal/modal'
function Pagination() {
    let[page,setpage]=useState(1)
    let[data,setData]=useState([])
    const[error,seterror]=useState(false)
    // Show or hide Modal
    const[showmodal,setmodal]=useState(false);
    const[modaldata,setmodaldata]=useState([])
    let showmod=()=>{
        setmodal(false);
    }
   function moddata(item){
    setmodaldata(item)
   
   }

   //fetching API
    useEffect(()=>{

        const apifetch=()=>{

            const url = new URL('https://650b4903dfd73d1fab09db6b.mockapi.io/user');
            url.searchParams.append('completed', false);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', 10);
            
            fetch(url, {
              method: 'GET',
              headers: {'content-type':'application/json'},
            }).then(res => {
              if (res.ok) {
                  return res.json();
                 
              }
              // handle error
            }).then(tasks => {
                console.log(tasks)
                setData(tasks)
              // mockapi returns first 10 tasks that are not completed
            }).catch(error => {
                   console.log(error)
                   seterror(true)
              // handle error
            })
        }
       apifetch();

    },[page])

    //Pagination button
    let previous=()=>{
        if(page<=0){
          
           page=page-1;
        setpage(page)
        }
       else{  page=1;
        setpage(page)}
    }
    let next=()=>{
        page=page+1;
        setpage(page)
    }

    if(error){
     return(
      <div className='error'><p>Error while fetching data please Refresh!</p></div>
     )
    }
else{
  return (

    <div className='pagination'>
  
      <span className='page_btn'>
          <button onClick={previous}>prev</button>
          <h2>{page}</h2>
          <button onClick={next}>Next</button>
      </span>
  
      <div className='page_card'>
          {data.map((item)=>(
              <div  onClick={()=>moddata(item)}>
              <div  onClick={()=> 
                  
                  setmodal(true)} className='card' key={item.id} >
             
              <img src={item.avatar} alt="error" width="150px" />
              <div>
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

}

export default Pagination