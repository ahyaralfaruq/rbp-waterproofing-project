import React from 'react'
import { Link } from 'react-router-dom'
import DataDummyArticles from '../../data/articles.json'
import { Pagination } from '@mui/material'

const ContentArticles = () => {
  const perPage = 3
  const count = Math.ceil(DataDummyArticles.data.length / perPage)

  return (
    <>
      {
        DataDummyArticles.data.map((data, keys) => (
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
                    { data.createdAt }
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
        ))
      }

      <div className="flex items-center justify-center">
        <Pagination count={count}  />
      </div>
    </>
  )
}

export default ContentArticles