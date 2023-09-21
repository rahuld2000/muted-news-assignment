import React from 'react'
import "./modal.css";
function Modal(props) {


//Modal

  return (
    <div className='modal'>
   <div  className='modal_main'>
  
    <div>
        <img className='mod_img' src={props.data.avatar} alt="error"  />
    </div>
    <div className='mod_txt'>
      <p className='mod_title'>{props.data.name}</p>
     
      <p>{props.data.description}</p>
    
    </div>
   
    </div>
    <div>
    <button className='mod_close' onClick={props.parent()}>close</button>
   </div>
    </div>
  
  )
}

export default Modal