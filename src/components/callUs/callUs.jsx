import React from 'react'
import {  } from 'react-icons/fa'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa'

const CallUs = () => {
  return (
    <section className="relative bg-white w-full p-4 mb-5">
      <h3 className='text-xl md:text-2xl font-bold border-b-2 pb-2' title='Hubungi kami'>
        Hubungi Kami
      </h3>
      <div className="h-1 w-full bg-gradient-to-r from-green-700 to-slate-300"></div>

      <ul className='mt-5'>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaPhoneAlt className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            082147102970
          </p>
        </li>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaWhatsapp className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            082147102970
          </p>
        </li>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaEnvelope className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            inforbpwaterproofing@gmail.com
          </p>
        </li>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaFacebookF className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            info rbp waterproofing
          </p>
        </li>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaTwitter className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            @inforbpwaterproofing
          </p>
        </li>
        <li className='flex items-center gap-2 mb-3 hover:text-green-700'>
          <FaInstagram className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
          <p className='text-sm md:text-base text-inherit select-none pointer-events-none'>
            @inforbpwaterproofing
          </p>
        </li>
      </ul>
    </section>
  )
}

export default CallUs