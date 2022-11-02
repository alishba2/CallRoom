import React from 'react'
import { useState } from "react"
// import CallRoomModal from './CallRoomModal'

const CallRoomHome=()=> 
{
  const [show ]= useState(false);
  
   
    // const handleClose =()=>setShow(false);
  const handleShow =()=>show(true)
  // const toggleTrueFalse = () =>{
  //   setShowModal(handleShow)
  // }
  
      

return (
<>

<div className='Card_style'  onClick={handleShow}>
{/* <CallRoomModal  show={show} onHide={handleClose}>  <p></p></CallRoomModal> */}
{/* <CallRoomModal/> */}
        



  <span>Room No: #1<hr></hr>
  {/* <button  onClick={handleShow}> <CallRoomModal/>
        </button> */}
  </span>
  
    <h2>Free Slots:3</h2>
    <h2>Capacity:5</h2>
</div>

</>
  )
}

export default CallRoomHome;