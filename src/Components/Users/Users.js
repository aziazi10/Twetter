import React, { useState } from 'react'

import "./Users.css"

import Mushtariy from "../../Assets/images/Mushtariy.png"
import Shuxratbek from "../../Assets/images/Shuxratbek.png"
import Ulugbek from "../../Assets/images/Ulugbek.png"
import Mustafo from "../../Assets/images/Mustafo.png"

function Users() {

    const [buttonText, setButtonText] = useState(false)
    const [btnText, setButton] = useState(false)
    const [btnTxt, setBtn] = useState(false)
    const [buttonTxt, setBtnn] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    return (
            <div className='recomendation__content'>
                <h2 className='recomendation__title'>You might like</h2>

                <div className='recomendation__card'>
                    <img className='recomendation__img' src={ Mushtariy } alt="img" />
                    <div className='recomendation__item'>
                        <p className='recomendation__text'>Mushtariy</p>
                        <span className='recomendation__span'>@Mushtar565266</span>
                    </div>
                    <button className='recomendation__btn' onClick={ () => setButtonText(!buttonText) }>{ buttonText ? 'Followed' : 'Follow' }</button>
                </div>

                <div className='recomendation__card'>
                    <img className='recomendation__img' src={ Shuxratbek } alt="img" />
                    <div className='recomendation__item'>
                        <p className='recomendation__text'>Shuhratbek</p>
                        <span className='recomendation__span'>@mrshukhrat</span>
                    </div>
                    <button className='recomendation__btn' onClick={ () => setButton(!btnText) }>{ btnText ? 'Followed' : 'Follow' }</button>
                </div>

                <div className='recomendation__collapsible'>
                    <div className={ isOpen ? 'content-show' : 'content' }>
                        <div className='recomendation__card'>
                            <img className='recomendation__img' src={ Ulugbek } alt="img" />
                            <div className='recomendation__item'>
                                <p className='recomendation__text'>Ulugbek</p>
                                <span className='recomendation__span'>@ulugbek526</span>
                            </div>
                            <button className='recomendation__btn' onClick={ () => setBtn(!btnTxt) }>{ btnTxt ? 'Followed' : 'Follow' }</button>
                        </div>

                        <div className='recomendation__card'>
                            <img className='recomendation__img' src={ Mustafo } alt="img" />
                            <div className='recomendation__item'>
                                <p className='recomendation__text'>Mustafo</p>
                                <span className='recomendation__span'>@mustafo45</span>
                            </div>
                            <button className='recomendation__btn' onClick={ () => setBtnn(!buttonTxt) }>{ buttonTxt ? 'Followed' : 'Follow' }</button>
                        </div>
                    </div>
                    <button className='recomendation__link' onClick={ () => setIsOpen(!isOpen) }>{ isOpen ? 'Hide' : 'Show more' }</button>
                </div>

                <div className='links'>
                    <ul className='links__item'>
                        <li className='links__list'>
                            <a href='#' className='links__link'>Terms of Service</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>Privacy Policy</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>Cookie Policy</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>Imprint</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>Ads Info</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>More ···</a>
                        </li>
                        <li className='links__list'>
                            <a href='#' className='links__link'>© 2021 Twitter, Inc.</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}


export default Users;


