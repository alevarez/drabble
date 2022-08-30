import {useState} from 'react'
import {Link} from 'react-router-dom'

import noUser from '../assets/user.png'
import workImage from '../assets/post1.jpg'

export const Card = () => {

    const [showButtons, setShowButtons] = useState(false)

    return (
        <div className="card-hero">
            <div className="herder-card">
                <div className="upper-left">
                    {/* <img v-if="document?.userPhoto" :src="document?.userPhoto" alt="User Photo" /> */}
                    <img src={noUser} alt="Use no photo" />
                    <div>
                        <Link to="/profile/2">
                            <h3>matilde</h3>
                        </Link>
                        <h5>Lima, Perú </h5>
                    </div>
                </div>
                <div className="menu-dots" onClick={() => setShowButtons(prevState => !prevState)}>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            {showButtons && (
                <div className="menu-card">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share-alt"></i>
                    <i className="far fa-comment"></i>
                </div>
            )}
            <Link to={`/detail/1`} className="img-card">
                <img src={workImage} alt="Post Image" />
            </Link>
            <div className="footer-card">
                <div className="texto-desc">
                    <p>Old ilustration. Todos comenzamos en algún lugar.</p>
                    <h5>junio 22, 2021</h5>
                </div>
            </div>
        </div>
    )
}
