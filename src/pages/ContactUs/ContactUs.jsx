import React, { useState } from 'react'

const ContactUs = () => {
  const [message,setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  })

  const handleInput = e => {
    setMessage(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(message)
  }


  return (
    <section className="relative bg-white w-full lg:w-3/5 p-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4" title='Hubungi Kami'>Hubungi Kami</h1>

      <p className="text-sm md:text-base mb-8">
        Jika ada pertanyaan atau butuh bantuan, jangan ragu untuk menghubungi kami.
        Kami siap melayani anda kapan saja.
        silahkan untuk mengisi form dibawah ini :
      </p>

      <form onSubmit={handleSubmit} className='w-full md:w-3/5'>
        <div className="mb-4">
          <div className="w-full overflow-hidden border-2 rounded-lg focus-within:border-green-700 flex items-center gap-2 px-2">
            <input 
              type="text" 
              name='name'
              className='border-none outline-none w-full py-1'
              placeholder='Nama (wajib di isi)'
              minLength={3}
              onChange={handleInput}
              value={message.name}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full overflow-hidden border-2 rounded-lg focus-within:border-green-700 flex items-center gap-2 px-2">
            <input 
              type="email" 
              name='email'
              className='border-none outline-none w-full py-1'
              placeholder='Email (wajib di isi)'
              onChange={handleInput}
              value={message.email}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full overflow-hidden border-2 rounded-lg focus-within:border-green-700 flex items-center gap-2 px-2">
            <input 
              type="phone" 
              name='phone'
              className='border-none outline-none w-full py-1'
              placeholder='No telp (opsional)'
              maxLength={13}
              onChange={handleInput}
              value={message.phone}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full overflow-hidden border-2 rounded-lg focus-within:border-green-700 flex items-center gap-2 px-2">
            <textarea 
              rows="12"
              name='msg' 
              className='border-none outline-none w-full py-1 resize-none'
              placeholder='tuliskan pesan anda yang ingin disampaikan kepada kami'
              onChange={handleInput}
              value={message.msg}
              minLength={20}
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button type="submit" className='border-none outline-none px-6 py-1 bg-slate-200 hover:text-white hover:bg-green-700 rounded-3xl'>
            Kirim
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactUs