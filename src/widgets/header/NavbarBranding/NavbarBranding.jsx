import React from 'react'
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGoogleWallet,
  FaYoutube
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavbarBranding = () => {
  return (
    <nav className='bg-white mb-8'>
      <div className="px-5 py-3 mx-0 md:px-6 md:mx-16 flex flex-col items-center gap-2">
        <figure className="aspect-video w-48 md:w-64">
          <Link to="/">
            <img src="/images/rbp-logo.webp" alt="rbp waterproofing" className="w-full h-full" />
          </Link>
        </figure>
        <Link to="/">
          <h1 className="text-4xl md:text-5xl text-green-700 font-bold text-center" title='Solusi Kebocoran Bangunan'>
            Solusi Kebocoran Bangunan
          </h1>
        </Link>
        <p className="text-sm md:text-base text-center text-slate-500" title='Jasa perbaikan dak, kolam renang, basement, gwt, stp, rooftop, dinding bocor'>
          Jasa perbaikan dak, kolam renang, basement, gwt, stp, rooftop, dinding bocor
        </p>
      </div>
      <div className="px-5 py-3 mx-0 md:px-6 md:mx-16 flex flex-col items-center gap-4">
        <div className='flex items-center gap-1 cursor-pointer'>
          <FaEnvelope className='text-slate-600' />
          <p className="text-sm md:text-base text-center text-slate-600 font-medium uppercase">
            inforbpwaterproofing@gmail.com
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Link to="/" target='_blank' className='cursor-pointer text-slate-600 no-underline' >
            <FaInstagram className='text-slate-600' />
          </Link>
          <Link to="/" target='_blank' className='cursor-pointer text-slate-600 no-underline' >
            <FaFacebookF className='text-slate-600 cursor-pointer' />
          </Link>
          <Link to="/" target='_blank' className='cursor-pointer text-slate-600 no-underline' >
            <FaTwitter className='text-slate-600 cursor-pointer' />
          </Link>
          <Link to="/" target='_blank' className='cursor-pointer text-slate-600 no-underline' >
            <FaGoogleWallet className='text-slate-600 cursor-pointer' />
          </Link>
          <Link to="/" target='_blank' className='cursor-pointer text-slate-600 no-underline' >
            <FaYoutube className='text-slate-600 cursor-pointer' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarBranding