import React, { useState } from "react"
import Modal from "../Modals/Modals"
import './Home.css'

// images
import Stars from '../../Assets/images/stars.png'
import Boburr from '../../Assets/images/Boburr.png'
import Image from '../../Assets/images/image.png'
import Gif from '../../Assets/images/gif.png'
import Stats from '../../Assets/images/stats.png'
import Smile from '../../Assets/images/smile.png'
import Day from '../../Assets/images/day.png'
import Ulugbek from '../../Assets/images/Ulugbek.png'
import Comment from '../../Assets/images/comment.png'
import Retweet from '../../Assets/images/retweet.png'
import Like from '../../Assets/images/like.png'
import Share from '../../Assets/images/share.png'
import Statistics from '../../Assets/images/statistics.png'
import Mustafo from '../../Assets/images/Mustafo.png'
import Dots from '../../Assets/images/dots.png'
import Alisher from '../../Assets/images/Alisher.png'
import Lunch from '../../Assets/images/lunch.png'


export default function Home() {

    const [openModal, setOpenModal] = useState(false)

    const [buttonTxt, setBtnn] = useState(false)

    const [comment, setComment] = useState (10)
    const [value, setValue] = useState(14)
    const [tweet, setTweet] = useState(false)
    const [message, setMessage] = useState (19)
    const [retweet, setRetwet] = useState(27)
    const [send, setSend] = useState(11)
    const [like, setLike] = useState(false)
    const [click, setClick] = useState(31)
    const [likes, setLikes] = useState(false)


    return (
        <div className="home">

            <div className="home__content">
                <h2 className="home__title">HOME</h2>
                <img className="home__img" src={ Stars } alt='stars' width='22' height='21' />
            </div>

            <div className="home__happen">
                <div className="home__item">
                    <img className="home__img" src={ Boburr } alt='Bobur' width='60' height='60' />
                    <input className="home__text" type='search' placeholder="What’s happening"></input>
                </div>
                <div className="home__adds">
                    <div className="home__images">
                        <button className="btn" onClick={ () => setOpenModal(true) }><img className="home__image" src={ Image } alt='image' width='20' height='20' /></button>
                        { openModal && <Modal closeModal={ setOpenModal } /> }
                        <button className="btn" onClick={ () => setOpenModal(true) }><img className="home__image" src={ Gif } alt='gif' width='20' height='20' /></button>
                        { openModal && <Modal closeModal={ setOpenModal } /> }
                        <button className="btn" onClick={ () => setOpenModal(true) }><img className="home__image" src={ Stats } alt='stats' width='20' height='20' /></button>
                        { openModal && <Modal closeModal={ setOpenModal } /> }
                        <button className="btn" onClick={ () => setOpenModal(true) }><img className="home__image" src={ Smile } alt='smile' width='20' height='20' /></button>
                        { openModal && <Modal closeModal={ setOpenModal } /> }
                        <button className="btn" onClick={ () => setOpenModal(true) }><img className="home__image" src={ Day } alt='day' width='20' height='20' /></button>
                        { openModal && <Modal closeModal={ setOpenModal } /> }
                    </div>
                    <button className='home__btn' onClick={ () => setBtnn(!buttonTxt) }>{ buttonTxt ? 'Tweeted' : 'Tweet' }</button>
                </div>
            </div>

            <div className="home__user">
                <div className="home__user-items">
                    <div className="home__user-item">
                        <img className="home__user-image" src={ Ulugbek } alt='Ulugbek' width='60' height='60' />
                    </div>
                    <div className="home__user-content">
                        <div className="home__user-seen">
                            <h2 className="home__user-title">Designsta</h2>
                            <span className="home__user-span">@inner · 25m</span>
                            <img src={ Dots } alt='dots' />
                        </div>
                        <p className="home__user-text">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    </div>
                </div>

                <div className="home__user-buttons">
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={() => setComment(comment+1)}><img src={ Comment } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{comment}</p>
                    </div>
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={ () => setValue(value + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{ value }</p>
                    </div>
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={ () => setTweet(!tweet) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{ setTweet ? (tweet + 1) : (tweet - 1) }</p>
                    </div>
                    <button className="home__user-btn-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                    <button className="home__user-btn-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                </div>
            </div>

            <div className="home__user">
                <div className="home__user-items">
                    <div className="home__user-item">
                        <img className="home__user-image" src={ Mustafo } alt='Ulugbek' width='60' height='60' />
                    </div>

                    <div className="home__user-content">
                        <div className="home__user-seen">
                            <h2 className="home__user-title">cloutexhibition</h2>
                            <span className="home__user-spann">@RajLahoti · 22m</span>
                            <img src={ Dots } alt='dots' />
                        </div>
                        <p className="home__user-text">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                            Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                    </div>
                </div>

                <div className="home__user-buttons">
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={() => setMessage(message+1)}><img src={ Comment } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{message}</p>
                    </div>
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={ () => setRetwet(retweet + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{ retweet }</p>
                    </div>
                    <div className="home__user-btn">
                        <button className="home__user-btn-btn" onClick={ () => setLike(!like) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                        <p className="home__user-counter">{ setLike ? (like + 1) : (like - 1) }</p>
                    </div>
                    <button className="home__user-btn-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                    <button className="home__user-btn-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                </div>
            </div>

            <div className="home__lunch">
                <img className="home__lunch-image" src={ Alisher } alt='alisher' width='60' height='60' />
                <div>
                    <div className="home__lunch-item">
                        <h2 className="home__lunch-title">CreativePhoto</h2>
                        <span className="home__lunch-span">@cloutexhibition · 1h</span>
                        <img className="home__lunch-dots" src={ Dots } alt='dots' width='17' height='4' />
                    </div>
                    <p className="home__lunch-text">Обетда......</p>
                    <p className="home__lunch-text">Кечиринглар</p>
                    <img className="home__lunch-img" src={ Lunch } alt='lunch' width='600' height='400' />

                    <div className="home__lunch-buttons">
                        <div className="home__user-btn">
                            <button className="home__user-btn-btn" onClick={() => setSend(send+1)}><img src={ Comment } alt='comment' width='20' height='20' /></button>
                            <p className="home__user-counter">{send}</p>
                        </div>
                        <div className="home__user-btn">
                            <button className="home__user-btn-btn" onClick={ () => setClick(click + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                            <p className="home__user-counter">{ click }</p>
                        </div>
                        <div className="home__user-btn">
                            <button className="home__user-btn-btn" onClick={ () => setLikes(!likes) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                            <p className="home__user-counter">{ setLikes ? (likes + 1) : (likes - 1) }</p>
                        </div>
                        <button className="home__user-btn-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                        <button className="home__user-btn-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}