const packages = [
  {
    name: 'Solo Explorer',
    price: '₹9,999',
    tag: null,
    features: ['3 Days / 2 Nights', 'Budget Stay', 'Local Sightseeing', 'Basic Support'],
    highlighted: false,
  },
  {
    name: 'Couple Getaway',
    price: '₹17,999',
    tag: '20% Couple Discount',
    features: ['4 Days / 3 Nights', 'Romantic Stay', 'Candlelight Dinner', 'Private Cab', 'Priority Support'],
    highlighted: true,
  },
  {
    name: 'Family Combo',
    price: '₹34,999',
    tag: '15% Combo Discount',
    features: ['5 Days / 4 Nights', 'Family Suite Stay', 'All Meals Included', 'Kid-friendly Activities'],
    highlighted: false,
  },
  {
    name: 'Group Adventure',
    price: '₹6,999',
    tag: '25% Group Discount (6+)',
    features: ['Per Person', '3 Days / 2 Nights', 'Group Activities', 'Shared Accommodation', 'Dedicated Guide'],
    highlighted: false,
  },
]

const Packages = () => {
  return (
    <section id="packages" className='px-4 md:px-16 py-12 md:py-20 bg-cream'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>Travel Packages & Offers</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          Special discounts for couples, families, and groups.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 md:p-8 ${
              pkg.highlighted ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white border border-gray-200'
            }`}
          >
            {pkg.tag && (
              <span className={`absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full ${
                pkg.highlighted ? 'bg-accent text-white' : 'bg-accent text-white'
              }`}>
                {pkg.tag}
              </span>
            )}
            <h3 className='text-lg md:text-xl font-semibold mt-2'>{pkg.name}</h3>
            <p className={`mt-3 text-2xl md:text-3xl font-bold ${pkg.highlighted ? 'text-accent' : 'text-primary'}`}>
              {pkg.price}
            </p>
            <ul className={`mt-6 space-y-2 text-sm ${pkg.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
              {pkg.features.map((f, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className={pkg.highlighted ? 'text-accent' : 'text-primary'}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-6 w-full py-3 rounded-full uppercase tracking-wide text-sm transition-colors ${
              pkg.highlighted ? 'bg-accent text-white hover:bg-accent/90' : 'bg-primary text-white hover:bg-primary-dark'
            }`}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Packages