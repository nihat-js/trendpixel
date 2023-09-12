import React, {useEffect} from 'react';
import "./index.scss"
import {useSelector} from "react-redux";
import {setModalData} from "../../store/modalSlice.js";

export function Modal( ) {

  let data = useSelector(state => state.modal)

  let  {header, body, showModal,  showCloseButton = true , containerStyle } = data
  function clickListener(e) {
    if (e.target.classList.contains('modal')) {
      setModalData({...data , showModal : false})
    }
  }

  function keyListener(e) {
    if (e.key === "Escape") {
      setModalData({...data, showModal : false})
    }
  }

  useEffect(() => {

    window.addEventListener('click', clickListener)
    window.addEventListener('keyup', keyListener)

    return () => {
      window.removeEventListener('click', clickListener)
      window.removeEventListener('keyup', keyListener)
    }
  }, [])

  return (
    <div className="modal-wrapper" style={{display : showModal ? 'block' : 'none' }}>
      <div className="container" style={containerStyle}>
        <h2 className='title'> {header}   </h2>
        {data.showCloseButton && <button className='btn-close' onClick={() => {
          setModalData({...data,showModal : false})
        }}> &times; </button>}
        <div className="body">
          {body}
        </div>

      </div>

    </div>
  );
}

