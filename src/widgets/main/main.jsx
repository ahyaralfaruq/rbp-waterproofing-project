import React from 'react'
import './style.css'
import { Outlet, useLocation } from 'react-router-dom'
import { CallUs, RecentPosts } from '../../components'
import { SearchWords } from '../../pages'

const Main = () => {
  const location = useLocation();
  const getQuery = new URLSearchParams(location.search)
  const getSlugOfQuery = getQuery.get('s')
  return (
    <main className='relative py-5 main-background'>
      <div className="absolute inset-0 w-full h-full main-backdrop"></div>
      
      <div className="flex flex-wrap px-5 py-3 mx-0 md:px-6 md:mx-16">
        {location.search ? <SearchWords getSlugOfQuery={getSlugOfQuery} /> : <Outlet />}

        <aside className="relative w-full lg:w-2/5 px-0 py-5 lg:px-5  lg:py-0">
          <RecentPosts />
          <CallUs />
        </aside>
      </div>
    </main>
  )
}

export default Main