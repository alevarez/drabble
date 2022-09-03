import { Link } from "react-router-dom"
import { MainLayout } from "../components/layouts/MainLayout"

export const Add = () => {
  return (
    <MainLayout>
        <div className="contenido-add">
            <div className="card-add-post">
                <h2>Compartir ilustración</h2>
                <form>
                    <label htmlFor="file" className="icon-image-upload">
                        {/* <img v-if="file" class="imagen-edit" :src="nuevaFoto" alt=""> */}
                        <i className="fas fa-image fa-5x"></i>
                    </label>
                    <input type="file" id="file" style={{display: 'none'}} />
                    <input type="text" placeholder="Ingresa el título" />
                    <textarea placeholder="Ingresa la descripción"></textarea>
                    <div>
                        <Link to="/" className="btn-cancelar">Cancelar</Link>
                        <button type="submit">Subir</button>
                    </div>
                </form>
            </div>
        </div>
    </MainLayout>
  )
}
