const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 md:py-24 gap-8 md:gap-12 bg-cream'>
      <div className='max-w-xl text-center md:text-left'>
        <span className='inline-block bg-primary/10 text-primary text-xs uppercase tracking-wide px-4 py-1 rounded-full font-semibold'>
          Tours & Travels
        </span>
        <h1 className='mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>
          Explore the world, your way
        </h1>
        <p className='mt-4 text-base md:text-lg text-gray-600'>
          Handpicked destinations, custom itineraries, and unforgettable experiences — all planned for you.
        </p>
        <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <button className='bg-primary text-white px-6 py-3 rounded-full uppercase tracking-wide text-sm hover:bg-primary-dark transition-colors'>
            Explore Packages
          </button>
          <button className='border border-accent text-accent px-6 py-3 rounded-full uppercase tracking-wide text-sm hover:bg-accent hover:text-white transition-colors'>
            Get a Custom Plan
          </button>
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <img
          src="https://images.unsplash.com/photo-1773158903407-ff117664d0aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Travel destination"
          className='w-full aspect-square object-cover rounded-2xl'
        />
      </div>
    </section>
  )
}

export default Hero