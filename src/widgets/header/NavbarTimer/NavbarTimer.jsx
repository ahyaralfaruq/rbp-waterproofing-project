import React, {useState, useEffect} from 'react'

const NavbarTimer = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      const timer = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
      }).format(date)

      setTime(timer)
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <nav className='bg-green-700 mb-8'>
      <div className="px-5 py-3 mx-0 md:px-6 md:mx-16 flex gap-4">
        <p className="text-sm sm:text-sm md:text-base font-medium text-slate-200">
          {time}
        </p>
      </div>
    </nav>
  )
}

export default NavbarTimer