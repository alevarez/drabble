import React from 'react'
import noUser from '../assets/user.png'
import workImage from '../assets/post1.jpg'

export const Card = () => {
  return (
    <div className="card-hero">
        <div className="herder-card">
            <div className="upper-left">
                {/* <img v-if="document?.userPhoto" :src="document?.userPhoto" alt="User Photo" /> */}
                <img src={noUser} alt="Use no photo" />
                <div>
                    <h3>matilde</h3>
                    <h5>Lima, Perú </h5>
                </div>
            </div>
            <div className="menu-dots">
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
            {/* <div className="menu-card">
                <i className="far fa-heart"></i>
                <i className="fas fa-share-alt"></i>
                <i className="far fa-comment"></i>
            </div> */}
        <div className="img-card">
            <img src={workImage} alt="Post Image" />
        </div>
        <div className="footer-card">
            <div className="texto-desc">
                <p>Old ilustration. Todos comenzamos en algún lugar.</p>
                <h5>junio 22, 2021</h5>
            </div>
        </div>
    </div>
  )
}
