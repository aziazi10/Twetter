import React, { useState } from "react"
import './Trends.css'

import Search from '../../Assets/images/search.png'
import Settings from '../../Assets/images/settings.png'
import Dots from '../../Assets/images/dots.png'

export default function Trends() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="trends">
            <img className="trends__search" src={ Search } alt='search' width='20' height='20' />
            <input className="trends__input" type='search' placeholder="Search Twitter" />
            <div className="trends__content">
                <div className="trends__item">
                    <h2 className="trends__title">Trends for you</h2>
                    <button className="trends__btn"><img className="trends__settings" src={ Settings } alt='settings' width='21' height='21' /></button>
                </div>
                <div className="trends__item">
                    <div>
                        <span className="trends__span">Trending in Germany</span>
                        <h3 className="trends__subtitle">Revolution</h3>
                        <span className="trends__span">50.4K Tweets</span>
                    </div>
                    <img className="trends__dots" src={ Dots } alt='dots' width='17' height='4' />
                </div>
                <div className="trends__item">
                    <div>
                        <span className="trends__span">Trending in Germany</span>
                        <h3 className="trends__subtitle">Revolution</h3>
                        <span className="trends__span">50.4K Tweets</span>
                    </div>
                    <img className="trends__dots" src={ Dots } alt='dots' width='17' height='4' />
                </div>


                <div className={ isOpen ? 'content-show' : 'content' }>
                    <div className="trends__item">
                        <div>
                            <span className="trends__span">Trending in Germany</span>
                            <h3 className="trends__subtitle">Revolution</h3>
                            <span className="trends__span">50.4K Tweets</span>
                        </div>
                        <img className="trends__dots" src={ Dots } alt='dots' width='17' height='4' />
                    </div>
                </div>
                <button className="trends__btnn" className='recomendation__link' onClick={ () => setIsOpen(!isOpen) }>{ isOpen ? 'Hide' : 'Show more' }</button>
            </div>
        </div>
    )
}