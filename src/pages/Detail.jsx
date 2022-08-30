import { Link } from "react-router-dom"
import { MainLayout } from "../components/layouts/MainLayout"

import userAvatar from '../assets/user.png'
import ilustration from '../assets/post1.jpg'

export const Detail = () => {
  return (
    <MainLayout>
        <div className="content-detail">
            <div className="content-back-link">
                <Link to="/" className="back-link"><i className="fas fa-angle-left"></i></Link>
            </div>
            <div className="inner-card">
                <div className="header-detail">
                    <div className="user-detail">
                        <img src={userAvatar} alt="user avatar" />
                        <div className="info-detail">
                            <h3>Name of the peace</h3>
                            <div className="info-user-detail">
                                <h4>awar44</h4>
                                <p>Santiago, Chile</p>
                            </div>
                        </div>
                    </div>
                    <div className="like-button">
                        <div><i className="far fa-heart"></i> Like</div>
                    </div>
                </div>
                <img src={ilustration} alt="Work" />
                <div className="content-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in aperiam nulla perferendis. Libero exercitationem veritatis repudiandae voluptatibus facilis accusamus, dolore, laboriosam unde, incidunt rem corrupti architecto veniam a consequatur!</p>
                </div>
            </div>
            <div className="comments-section">
                <form>
                    <textarea></textarea>
                    <button>Comentar</button>
                </form>
                <div className="comments-card">
                    <div className="user-card">
                        <img src={userAvatar} alt="Use no photo" />
                        <div>
                            <h3>matilde</h3>
                            <h5>Lima, Perú </h5>
                        </div>
                    </div>
                    <p>lorem sdafasf as asfkj hahfasdkjhgf asdjhfg lakjsdg.</p>
                </div>
                <div className="comments-card">
                    <div className="user-card">
                        <img src={userAvatar} alt="Use no photo" />
                        <div>
                            <h3>matilde</h3>
                            <h5>Lima, Perú </h5>
                        </div>
                    </div>
                    <p>lorem sdafasf as asfkj hahfasdkjhgf asdjhfg lakjsdg.</p>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}
