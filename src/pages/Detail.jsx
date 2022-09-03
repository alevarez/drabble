import { Link, useParams } from "react-router-dom"
import { MainLayout } from "../components/layouts/MainLayout"

import userAvatar from '../assets/user.png'
import ilustration from '../assets/post1.jpg'
import { useEffect } from "react"
import { useDocument } from "../hooks/useDocument"

export const Detail = () => {

    const {id} = useParams()
    const {document, error} = useDocument('posts', id)


  return (
    <MainLayout>
        <div className="content-detail">
            <div className="content-back-link">
                <Link to="/" className="back-link"><i className="fas fa-angle-left"></i></Link>
            </div>
            {error && <div><h3>No existe la ilustración</h3></div>}
            {!document &&  (
                <div className="loading-posts">
                <i className="fas fa-spinner fa-spin"></i>
                </div>
            )}
            {document && (
                <>
                    <div className="inner-card">
                        <div className="header-detail">
                            <div className="user-detail">
                                <img src={document.userPhoto} alt="user avatar" />
                                <div className="info-detail">
                                    <h3>Name of the peace</h3>
                                    <div className="info-user-detail">
                                        <h4>{document.userName}</h4>
                                        <p>{document.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="like-button">
                                <div><i className="far fa-heart"></i> Like</div>
                            </div>
                        </div>
                        <img src={document.imageUrl} alt="Work" className="imagen-ilustration" />
                        <div className="content-paragraph">
                            <p>{document.description}</p>
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
                </>
            )}
            
        </div>
    </MainLayout>
  )
}
