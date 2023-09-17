import React from 'react'
import { ContentArticles } from '../../components'

const Home = () => {

  return (
    <section className="relative bg-white w-full lg:w-3/5 p-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4" title='Home'>Home</h1>

      <div>  
        <ContentArticles />
      </div>
    </section>
  )
}

export default Home