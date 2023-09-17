import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappContact = () => {
  return (
    <section className='fixed bottom-4 right-4 md:bottom-8 md:right-8'>
      <Link to="/" target='_blank' className='block rounded-full overflow-hidden img-icons bg-green-500'>
        <FaWhatsapp className='text-white w-full h-full' />
      </Link>
    </section>
  )
}

export default WhatsappContact