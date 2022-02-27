import React from "react"
import './Modals.css'


export default function Modal({closeModal}) {
    return (
        <div className="modal">
            <p className="modal__text">Show some files..</p>
            <button className="modal__btn" onClick={() => closeModal (false)}>X</button>
        </div>
    )
}