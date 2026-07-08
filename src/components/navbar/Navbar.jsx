import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex items-center justify-between px-4 md:px-16 py-6 relative bg-white'>
      <h1 className='text-xl md:text-2xl font-bold text-primary'>Wander<span className='text-accent'>Trails</span></h1>

      <div className='hidden md:flex items-center gap-8'>
        <a href="#destinations" className='text-sm uppercase tracking-wide hover:text-primary'>Destinations</a>
        <a href="#services" className='text-sm uppercase tracking-wide hover:text-primary'>Services</a>
        <a href="#packages" className='text-sm uppercase tracking-wide hover:text-primary'>Packages</a>
        <a href="#testimonials" className='text-sm uppercase tracking-wide hover:text-primary'>Reviews</a>
        <button className='bg-primary text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-primary-dark transition-colors'>
          Plan a Trip
        </button>
      </div>

      <button className='md:hidden text-2xl text-primary' onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-4 py-6 md:hidden z-50'>
          <a href="#destinations" className='text-sm uppercase tracking-wide'>Destinations</a>
          <a href="#services" className='text-sm uppercase tracking-wide'>Services</a>
          <a href="#packages" className='text-sm uppercase tracking-wide'>Packages</a>
          <a href="#testimonials" className='text-sm uppercase tracking-wide'>Reviews</a>
          <button className='bg-primary text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide w-fit'>
            Plan a Trip
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar