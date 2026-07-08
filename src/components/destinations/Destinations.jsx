const domesticDestinations = [
  { name: 'Manali, Himachal Pradesh', price: '₹12,999', img: 'https://images.unsplash.com/photo-1678261151315-887e2dd253e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFuYWxpJTJDJTIwSGltYWNoYWwlMjBQcmFkZXNofGVufDB8fDB8fHww' },
  { name: 'Goa Beaches', price: '₹8,999', img: 'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Kerala Backwaters', price: '₹15,499', img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S2VyYWxhJTIwQmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Rajasthan Heritage', price: '₹18,999', img: 'https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmFqYXN0aGFuJTIwSGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D' },
  { name: 'Varanasi', price: '₹12,999', img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFyYW5hc2l8ZW58MHx8MHx8fDA%3D' },
  { name: 'Jaipur', price: '₹19,999', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Rishikesh', price: '₹21,999', img: 'https://images.unsplash.com/photo-1598610882061-bb806386c5fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Munnar', price: '₹22,999', img: 'https://images.unsplash.com/photo-1659327498782-7ebeee0570ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fE11bm5hcnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Spiti Valley', price: '₹23,999', img: 'https://images.unsplash.com/photo-1580389915863-f9bc9ff15bd9?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Lakshadweep', price: '₹25,999', img: 'https://images.unsplash.com/photo-1711611511942-28bb3e07bab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExha3NoYWR3ZWVwfGVufDB8fDB8fHww' },
  { name: 'Leh-Ladakh', price: '₹20,999', img: 'https://images.unsplash.com/photo-1669255664788-61c668bd6fe8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Coorg', price: '₹24,999', img: 'https://images.unsplash.com/photo-1655128633542-b6b7e86e93b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29vcmd8ZW58MHx8MHx8fDA%3D' },
]

const internationalDestinations = [
  { name: 'Bali, Indonesia', price: '₹45,999', img: 'https://images.unsplash.com/photo-1583235891598-53ae16fab99d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEJhbGl8ZW58MHx8MHx8fDA%3D' },
  { name: 'Vietnam', price: '₹38,999', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Maldives', price: '₹62,999', img: 'https://images.unsplash.com/photo-1586500038052-b831efc02314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fE1hbGRpdmVzfGVufDB8fDB8fHww' },
  { name: 'Switzerland', price: '₹89,999', img: 'https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Scotland, London', price: '₹78,999', img: 'https://images.unsplash.com/photo-1720247521777-b2a1773ef020?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Paris, France', price: '₹72,999', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyaXMlMkMlMjBGcmFuY2V8ZW58MHx8MHx8fDA%3D' },
  { name: 'Rome, Italy', price: '₹69,999', img: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um9tZSUyQyUyMEl0YWx5fGVufDB8fDB8fHww' },
  { name: 'Thailand', price: '₹60,999', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Turkey, Europe', price: '₹65,999', img: 'https://images.unsplash.com/photo-1505783638529-f3fdc62e1bb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFR1cmtleXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Mauritius, Africa', price: '₹68,999', img: 'https://images.unsplash.com/photo-1576066626712-09fe5f4cbae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hdXJpdGl1c3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'United Arab Emirates', price: '₹61,999', img: 'https://images.unsplash.com/photo-1546412414-c2658fffe7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFVuaXRlZCUyMEFyYWIlMjBFbWlyYXRlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Greece', price: '₹71,999', img: 'https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D' },
]

const DestinationCard = ({ d }) => (
  <div className='rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group'>
    <div className='overflow-hidden'>
      <img
        src={d.img}
        alt={d.name}
        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
      />
    </div>
    <div className='p-4 bg-white'>
      <h3 className='font-semibold text-sm md:text-base text-gray-900'>{d.name}</h3>
      <p className='mt-1 text-primary font-bold text-sm md:text-base'>Starting {d.price}</p>
    </div>
  </div>
)

const Destinations = () => {
  return (
    <section id="destinations" className='px-4 md:px-16 py-12 md:py-20 bg-white'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>Popular Destinations</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          Trending spots our travelers love the most.
        </p>
      </div>

      {/* Domestic */}
      <div className='mb-12 md:mb-16'>
        <h3 className='text-lg md:text-2xl font-semibold mb-6 flex items-center gap-2 text-primary'>
          🇮🇳 Domestic Destinations
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {domesticDestinations.map((d, index) => (
            <DestinationCard key={index} d={d} />
          ))}
        </div>
      </div>

      {/* International */}
      <div>
        <h3 className='text-lg md:text-2xl font-semibold mb-6 flex items-center gap-2 text-primary'>
          ✈️ International Destinations
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {internationalDestinations.map((d, index) => (
            <DestinationCard key={index} d={d} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations