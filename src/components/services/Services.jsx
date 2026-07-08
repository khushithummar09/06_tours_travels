const services = [
  { title: 'Flight Booking', desc: 'Best fares across domestic and international routes.', icon: '✈️' },
  { title: 'Hotel Reservations', desc: 'Handpicked stays for every budget and style.', icon: '🏨' },
  { title: 'Transportation', desc: 'Bus, train, and cab bookings for seamless travel.', icon: '🚌' },
  { title: 'Custom Itineraries', desc: 'Trip plans tailored to your interests and pace.', icon: '🗺️' },
  { title: 'Local Guides', desc: 'Verified guides for an authentic experience.', icon: '🧭' },
  { title: 'Visa Assistance', desc: 'End-to-end support for international travel docs.', icon: '📄' },
  { title: 'Food & Dining', desc: 'Curated local cuisine experiences and reserved dining.', icon: '🍽️' },
  { title: '24/7 Support', desc: 'We\'re with you throughout your journey.', icon: '📞' },
]

const Services = () => {
  return (
    <section id="services" className='px-4 md:px-16 py-12 md:py-20 bg-cream'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>Our Services</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          Everything you need for a smooth, worry-free trip.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {services.map((service, index) => (
          <div key={index} className='bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-3xl mb-3'>{service.icon}</div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-900'>{service.title}</h3>
            <p className='mt-2 text-sm md:text-base text-gray-600'>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services