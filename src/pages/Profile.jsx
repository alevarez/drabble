import { MainLayout } from "../components/layouts/MainLayout"

import photoUser from '../assets/user.png'
import { Card } from "../components/Card"

export const Profile = () => {
  return (
    <MainLayout>
        <>
            <div className="profile">
                <img src={photoUser} alt="" />
                <h3>matida88</h3>
                <h5>Santiago, Chile</h5>
                <h3 className="btn-edit">Editar</h3>
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
            <div className="content content-grid-no-auth">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        
        </>
    </MainLayout>
  )
}
