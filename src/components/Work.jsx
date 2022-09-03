import { motion } from "framer-motion"

import { useCollection } from '../hooks/useCollection'

import { Card } from "./Card"
import { SearchIcon } from "./SearchIcon"


export const Work = () => {

  const {documents: posts} = useCollection('posts')
  
  return (
    <>
      <div className="content-search">
          <form className="search search-almost">
              <input type="text" placeholder="Buscar..." />
              <span><SearchIcon /></span>
          </form>
          
      </div>
      {!posts && (
        <div className="loading-posts">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
      <div className="content content-grid-no-auth">
          {posts && posts.map((post, index) => (
            <motion.div key={post.id} className="card-hero" initial={{
              opacity: 0,
              translateY: 50
            }} animate={{opacity: 1, translateY: 0}} transition={{ duration: 0.2, delay: index * 0.1}}>
              <Card post={post} />
            </motion.div>
          ))}
          {/* <Card intex={2} />
          <Card intex={3} />
          <Card intex={4} /> */}
      </div>
    </>
  )
}
