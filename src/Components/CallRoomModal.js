import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import styles from "./Modal.module.css";


const CallRoomModal = ({ setIsOpen }) => {
    
        return (
            <>
            <div>
              
            </div>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
              <div className={styles.modal}>
                <div className={styles.modalHeader}>
                  <h5 className={styles.heading}>Dialog</h5>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                  <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className={styles.modalContent}>
                    <span className={styles.modalText}>Status : Progress</span>
                    <span  className={styles.modalText}>Call Type : Tech</span>
                    <span  className={styles.modalText}>Call Time : 9:00-10:00</span>
                    <span className={styles.modalText}>Call Agenda : Hiring</span>
                    <span className={styles.modalText}>Free Slots : <button className={styles.slots}> 9:00-10:00</button>
                    <button className={styles.slots}> 9:00-10:00</button>
                    <button className={styles.slots}> 9:00-10:00</button>
                    <button className={styles.slots}> 9:00-10:00</button>
                    </span>
                </div>
                
              </div>
            </div>
            
          </>
        );
  //       return(<>
  // <div className={styles.darkBG} />
  //           <div className={styles.centered}>
  //             <div className={styles.modal}>
  //               <div className={styles.modalHeader}>
  //                 <h5 className={styles.heading}>Form</h5>
  //               </div>
  //               <form >
    
  //   <div>
  //     <div>
  //       <input type="text" placeholder="Input 1"></input>
  //       <input type="text" placeholder="Input 2"></input>
  //     </div>
  //     <div>
  //       <input type="text" placeholder="Input 3"></input>
  //     </div>
  //   </div>
  //   <div>
  //   <button  className={styles.cancelBtn} type="Submit">Cancel</button>
  //   <button className={styles.slots} type="Submit">Submit</button>

  //   </div>
   
  
  // </form>
         
               
  //             </div>
  //           </div>
  //       </>);
  // return(<>
  // <div className={styles.darkBG} />
  //           <div className={styles.centered}>
  //             <div className={styles.modal}>
  //               <div className={styles.modalHeader}>
  //                 <h5 className={styles.heading}>Description</h5>
  //               </div>
             
  //               <div className={styles.modalContent}>
               
  //                   <span className={styles.modalText}>Status : Booked</span>
  //                   <span  className={styles.modalText}>Call Type : Tech</span>
  //                   <span  className={styles.modalText}>Slot Time : 9:00-10:00</span>
  //                   <span className={styles.modalText}>Call Agenda : Hiring</span>

  //               <button  className={styles.cancelBtn} type="Submit">Cancel</button>
  //                <button className={styles.slots} type="Submit">Continue Booking</button>
  //               </div>
               
  //             </div>
  //           </div>
  //       </>);
      };

      export default CallRoomModal ;
     