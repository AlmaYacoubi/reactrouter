import React, { useState } from 'react';

import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
export default function Add({addMovie}){
  
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  const handleADD=()=>{
      addMovie({
          image,
          date,
          name,
          rate,
          description
      })
  };
  const [image,setimage]=useState("")
  const [name,setname]=useState("")
  const [date,setdate]=useState("")
  const [rate,setrate]=useState("")
  const [description,setdescription]=useState("")


 
    return (
      <div>
        <button onClick={openModal}>+</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add a new movie</h2>
          
        
          <form>
           movie name: <input name="name" onChange={(event)=>setname(event.target.value)}/> 
           <br/>
           movie date: <input name="date" type="date" onChange={(event)=>setdate(event.target.value)} />
           <br/>
           movie rate: <input name="rate" type="number" onChange={(event)=>setrate(event.target.value)} />
           movie image : <input name="image" type="url" onChange={(event)=>setimage(event.target.value)}/>
          </form>
          <button onClick={closeModal}>close</button>
          <button onClick={handleADD} > submit</button>
        </Modal>
      </div>
    );
}
 
