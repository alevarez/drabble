import { MainLayout } from "../components/layouts/MainLayout"

import photoUser from '../assets/user.png'
import { Card } from "../components/Card"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Profile = () => {

    const [showEdit, setShowEdit] = useState(false)

  return (
    <MainLayout>
        <>
            {showEdit 
                ? (
                    <div className="profile">
                        <form>
                            <label htmlFor="file" className="icon-image-upload-profile">
                                {/* <img v-if="file" class="imagen-edit" :src="nuevaFoto" alt=""> */}
                                <i className="fas fa-image fa-5x"></i>
                            </label>
                            <input type="file" id="file" style={{display: 'none'}} />
                            <input type="text" placeholder="matida88" />
                            <input type="text" placeholder="Santiago, Chile" />
                            <input type="text" placeholder="https://matildadev.cl" />
                            <div>
                                <h4 onClick={() => setShowEdit(false)} className="btn-cancelar">Cancelar</h4>
                                <button type="submit">Editar</button>
                            </div>
                        </form>
                        <div className="tus-post">
                            <h3>Ilustraciones</h3>
                        </div>
                    </div>
                ) 
                : (
                    <div className="profile">
                        <img src={photoUser} alt="" />
                        <h3>matida88</h3>
                        <h5>Santiago, Chile</h5>
                        <h3 onClick={() => setShowEdit(true)} className="btn-edit">Editar</h3>
                        <div className="estadisticas">
                            <div>
                                <h4>12</h4>
                                <p>Post</p>
                            </div>
                            <div>
                                <h4>150</h4>
                                <p>Likes</p>
                            </div>
                            <div>
                                <h4>8</h4>
                                <p>Comentarios</p>
                            </div>
                        </div>
                        <div className="descrip-profile">
                            <h3>matilda@gmail.com</h3>
                            {/* <p>Obsesionado con la ilustración digital y la teoría de los colores. Perfeccionista incurable en el arte de procrastinar. Comparto mi trabajo solo por diversión.</p> */}
                            <a href="usuario?.linkUrl" target="_blank">https://matildadev.cl</a>
                        </div>

                        <div className="tus-post">
                            <h3>Ilustraciones</h3>
                            
                        </div>
                    </div>

                )
            }
            <div className="content content-grid-no-auth">
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    </MainLayout>
  )
}
