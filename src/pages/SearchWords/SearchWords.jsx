import React from 'react'
import { Link } from 'react-router-dom'
import DataDummyArticles from '../../data/articles.json'

const SearchWords = ({getSlugOfQuery}) => {
  const filterData = DataDummyArticles.data.filter(data => {
    if(data.title.toLocaleLowerCase().includes(getSlugOfQuery.replace("-", " ")) ||
      data.subtitle.toLocaleLowerCase().includes(getSlugOfQuery.replace("-", " ")) ||
      data.desc.toLocaleLowerCase().includes(getSlugOfQuery.replace("-", " ")) ||
      data.slug.replace("-", " ").toLocaleLowerCase().includes(getSlugOfQuery.replace("-", " "))
      ) {
      return data
    }
    return false
  })

  return (
    <section className="relative bg-white w-full lg:w-3/5 p-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4" title='Search Result'>
        Search Result : {getSlugOfQuery.replace("-", " ")}
      </h1>

      <div>
        {
          filterData ? filterData.map((data, keys) => (
            <article key={keys} className='border-t-2 border-green-700 pt-4'>
              <Link to={`/articles/${data.id}`} className='flex flex-col lg:flex-row mb-12'>
                <div className="aspect-square w-full h-full md:w-64 lg:w-48 shrink-0 md:mx-auto md:mb-12 overflow-hidden">
                  <img src={`/${data.image}`} alt={`gambar-${data.id}`} className='w-full h-full object-cover' />
                </div>

                <div className="w-full pt-4 pl-0 md:pt-0 md:pl-4">
                  <div className="border-b-2">
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      { data.created_at }
                    </p>
                  </div>

                  <div className="relative pb-4">
                    <p className="text-sm md:text-base line-clamp-5">
                      {data.subtitle}
                    </p>
                    <span className="absolute bottom-0 right-1 text-blue-500 text-sm md:text-base ">read more</span>
                  </div>
                </div>
              </Link>
            </article>
          )) : (
            <div className="w-full h-full aspect-square flex items-center justify-center">
              <p className="text-sm md:text-base font-bold">Search not found</p>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default SearchWords