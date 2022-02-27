import React, { useState } from "react"
import './Profile.css'
import { NavLink } from "react-router-dom"

import Arrow from '../../Assets/images/arrow.png'
import Bg from '../../Assets/images/bg.png'
import Bobur from '../../Assets/images/Bobur-prof.png'
import Location from "../../Assets/images/location.png"
import Scrept from '../../Assets/images/scrept.png'
import Born from '../../Assets/images/born.png'
import Joined from '../../Assets/images/joined.png'
import Pin from '../../Assets/images/pin.png'
import Retweet from '../../Assets/images/retweet.png'
import Like from '../../Assets/images/like.png'
import Share from '../../Assets/images/share.png'
import Statistics from '../../Assets/images/statistics.png'
import Comment from '../../Assets/images/comment.png'
import Dots from '../../Assets/images/dots.png'
import Mavlonov from '../../Assets/images/Mavlonov.png'


export default function Profile() {

    const [message, setMessage] = useState(19)
    const [like, setLike] = useState(false)
    const [retweet, setRetwet] = useState(27)

    const [send, setSend] = useState(11)
    const [tweet, setTweet] = useState(15)
    const [likee, setLikee] = useState (false)

    const [sent, setSent] = useState(22)
    const [tweett, setTweett] = useState(17)
    const [likeee, setLikeee] = useState (false)


    return (
        <section className="profile">
            <div className="profile__heard">
                <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" }
                    to='/'><img src={ Arrow } alt='arrow' width='20' className="profile__img" /></NavLink>
                <div className="profile__item">
                    <p className="profile__title">Bobur</p>
                    <span className="profile__span">1,070 Tweets</span>
                </div>
            </div>
            <img src={ Bg } alt='bg' width='800' height='250' className="profile__bg" />
            <img src={ Bobur } alt='Bobur' width='130' height='130' className="profile__prof" />
            <button className="profile__edit">Edit profile</button>
            <div className="profile__content">
                <p className="profile__content-title">Bobur</p>
                <span className="profile__content-span">@bobur_mavlonov</span>
                <div className="profile__content-textt">
                    <p className="profile__content-undertitle">UX&UI designer at</p>
                    <p className="profile__content-link">@abutechuz</p>
                </div>
                <div className="profile__content-items">
                    <div className="profile__content-item">
                        <img src={ Location } alt='joined' width='18' height="19" className="profile__content-img" />
                        <p className="profile__content-text">Mashag’daman</p>
                    </div>
                    <div className="profile__content-item">
                        <img src={ Scrept } alt='scrept' width='18' height="19" className="profile__content-img" />
                        <p className="profile__content-link">t.me/boburjon_mavlonov</p>
                    </div>
                    <div className="profile__content-item">
                        <img src={ Born } alt='born' width='18' height="19" className="profile__content-img" />
                        <p className="profile__content-text">Born November 24, 2000</p>
                    </div>
                    <div className="profile__content-item">
                        <img src={ Joined } alt='joined' width='18' height="19" className="profile__content-img" />
                        <p className="profile__content-text">Joined May 2020</p>
                    </div>
                </div>
                <div className="profile__content-follower">
                    <div className="profile__content-follow">
                        <p className="profile__content-followers">67</p>
                        <p className="profile__content-text">Following</p>
                    </div>
                    <div className="profile__content-follow">
                        <p className="profile__content-followers">47</p>
                        <p className="profile__content-text">Followers</p>
                    </div>
                </div>

                <div className="profile__content-btns">
                    <button className="profile__content-btn">Tweets</button>
                    <button className="profile__content-btn">Tweets & replies</button>
                    <button className="profile__content-btn">Media</button>
                    <button className="profile__content-btn">Likes</button>
                </div>
            </div>

            <div className="profile__tweets">
                <div className="profile__tweet">
                    <div className="profile__tweets-pin">
                        <img className="profile__tweet-pin" src={ Pin } alt='pin' width='14' height='17' />
                        <span className="profile__tweets-span">Pinned Tweet</span>
                        <img className="profile__tweet-dot" src={ Dots } alt='dot' width='17' height='4' />
                    </div>
                    <div className="profile__tweet-content">
                        <img src={ Bobur } alt='Bobur' width='60' height='60' className="profile__tweets-image" />
                        <div className="profile__tweet-items">
                            <div className="profile__tweet-item">
                                <p className="profile__tweet-title">Bobur</p>
                                <span className="profile__tweet-span">@bobur_mavlonov · Apr 1</span>
                            </div>
                            <p className="profile__tweet-text">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy
                                jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni
                                normallashtirishni reja qildim
                            </p>

                            <div className="profile__tweet-btns">
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setMessage(message + 1) }><img src={ Comment } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ message }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setRetwet(retweet + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ retweet }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setLike(!like) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ setLike ? (like + 1) : (like - 1) }</p>
                                </div>
                                <button className="profile__tweet-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                                <button className="profile__tweet-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile__tweets">
                <div className="profile__tweet">
                    <div className="profile__tweet-content">
                        <img src={ Bobur } alt='Bobur' width='60' height='60' className="profile__tweets-image" />
                        <div className="profile__tweet-items">
                            <div className="profile__tweet-item">
                                <p className="profile__tweet-title">Bobur</p>
                                <span className="profile__tweet-span">@bobur_mavlonov · Apr 1</span>
                                <img className="profile__tweet-dots" src={ Dots } alt='dot' width='17' height='4' />
                            </div>
                            <p className="profile__tweet-text text">Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.</p>
                            <p className="profile__tweet-text text">Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.</p>
                            <p className="profile__tweet-text text">Gap faqat biznes trenerlar haqida emas.</p>


                            <div className="profile__tweet-btns">
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setSend(send + 1) }><img src={ Comment } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ send }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setTweet(tweet + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ tweet }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setLikee(!likee) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ setLikee ? (likee + 1) : (likee - 1) }</p>
                                </div>
                                <button className="profile__tweet-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                                <button className="profile__tweet-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile__tweets">
                <div className="profile__tweet">
                    <div className="profile__tweet-content">
                        <img src={ Bobur } alt='Bobur' width='60' height='60' className="profile__tweets-image" />
                        <div className="profile__tweet-items">
                            <div className="profile__tweet-item">
                                <p className="profile__tweet-title">Bobur</p>
                                <span className="profile__tweet-span">@bobur_mavlonov · Apr 1</span>
                                <img className="profile__tweet-dots" src={ Dots } alt='dot' width='17' height='4' />
                            </div>
                            <p className="profile__tweet-text text">A bo'pti maskamasman</p>
                            <img src={ Mavlonov } alt='mavlonov'width='600' height='400'  className="profile__tweet-mavlonov"/>

                            <div className="profile__tweet-btns">
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setSent(sent + 1) }><img src={ Comment } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ sent }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setTweett(tweett + 1) }><img src={ Retweet } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ tweett }</p>
                                </div>
                                <div className="profile__tweets-btn">
                                    <button className="profile__tweet-btn" onClick={ () => setLikeee(!likeee) }><img src={ Like } alt='comment' width='20' height='20' /></button>
                                    <p className="profile__tweet-counter">{ setLikeee ? (likeee + 1) : (likeee - 1) }</p>
                                </div>
                                <button className="profile__tweet-btn"><img src={ Share } alt='comment' width='20' height='20' /></button>
                                <button className="profile__tweet-btn"><img src={ Statistics } alt='comment' width='20' height='20' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}