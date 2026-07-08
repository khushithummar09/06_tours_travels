const testimonials = [
  { name: 'Ishaan Patel', role: 'Solo Traveler', quote: 'The Manali trip was perfectly planned. Every detail was taken care of.' },
  { name: 'Meera & Arjun', role: 'Couple Getaway', quote: 'The couple discount package made our anniversary trip unforgettable and affordable.' },
  { name: 'Kavita Reddy', role: 'Family Trip', quote: 'Traveling with kids was stress-free thanks to their family-friendly planning.' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className='px-4 md:px-16 py-12 md:py-20 bg-white'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>What Travelers Say</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          Real experiences from real trips.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
        {testimonials.map((t, index) => (
          <div key={index} className='bg-cream rounded-2xl p-6 md:p-8 border-l-4 border-accent'>
            <p className='text-sm md:text-base text-gray-700 italic'>"{t.quote}"</p>
            <div className='mt-4'>
              <p className='font-semibold text-sm md:text-base text-primary'>{t.name}</p>
              <p className='text-xs md:text-sm text-gray-500'>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials