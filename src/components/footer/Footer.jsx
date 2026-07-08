const Footer = () => {
  return (
    <footer className='px-4 md:px-16 py-10 md:py-14 bg-primary-dark text-white'>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='max-w-xs'>
          <h2 className='text-xl font-bold'>Wander<span className='text-accent'>Trails</span></h2>
          <p className='mt-3 text-sm text-white/70'>
            Making travel simple, memorable, and affordable.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
          <div>
            <h4 className='text-sm uppercase tracking-wide font-semibold mb-3 text-accent'>Company</h4>
            <ul className='space-y-2 text-sm text-white/70'>
              <li><a href="#" className='hover:text-white'>About Us</a></li>
              <li><a href="#" className='hover:text-white'>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-sm uppercase tracking-wide font-semibold mb-3 text-accent'>Explore</h4>
            <ul className='space-y-2 text-sm text-white/70'>
              <li><a href="#destinations" className='hover:text-white'>Destinations</a></li>
              <li><a href="#packages" className='hover:text-white'>Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-sm uppercase tracking-wide font-semibold mb-3 text-accent'>Contact</h4>
            <ul className='space-y-2 text-sm text-white/70'>
              <li>booking@wandertrails.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50'>
        © {new Date().getFullYear()} WanderTrails. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer