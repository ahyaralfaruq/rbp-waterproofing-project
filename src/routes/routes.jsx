import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../widgets'
import {AboutUs, Article, Articles, ContactUs, Gallery, Home} from '../pages'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/' index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path='articles' element={<Articles />} />
        <Route path='articles/:id' element={<Article />} />
        <Route path='gallery' element={<Gallery />} />
      </Route>

    </Routes>
  )
}

export default MainRoutes