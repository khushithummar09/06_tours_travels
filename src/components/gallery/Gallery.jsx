import { useState } from 'react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1712758178352-2a2651153bf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Manali Mountains' },
  { src: 'https://media.istockphoto.com/id/1193664389/photo/sunset-at-anjuna-beach-in-goa-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=-kTCal3qHsfxWts52aUQouVerD5E-2BUkwkHBVZHUwE=', caption: 'Goa Beach Sunset' },
  { src: 'https://images.unsplash.com/photo-1576475706812-822620fc23ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFsaSUyMFJpY2UlMjBUZXJyYWNlc3xlbnwwfHwwfHx8MA%3D%3D', caption: 'Bali Rice Terraces' },
  { src: 'https://images.unsplash.com/photo-1607585011081-241d2bacb7de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Swiss Alps' },
  { src: 'https://plus.unsplash.com/premium_photo-1718035557075-5111d9d906d2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Paris Streets' },
  { src: 'https://images.unsplash.com/photo-1683650904081-78afc08950cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1hbGRpdmVzJTIwT3ZlcndhdGVyJTIwVmlsbGFzfGVufDB8fDB8fHww', caption: 'Maldives Overwater Villas' },
  { src: 'https://images.unsplash.com/photo-1565011231598-66c1ec39b72c?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Scottish Highlands' },
  { src: 'https://images.unsplash.com/photo-1537799943037-f5da89a65689?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJvbWUlMjBDb2xvc3NldW18ZW58MHx8MHx8fDA%3D', caption: 'Rome Colosseum' },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className='px-4 md:px-16 py-12 md:py-20 bg-cream'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>Travel Moments</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          A glimpse into the experiences waiting for you.
        </p>
      </div>

      <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className='break-inside-avoid rounded-2xl overflow-hidden cursor-pointer relative group'
          >
            <img
              src={img.src}
              alt={img.caption}
              className='w-full object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors flex items-end'>
              <p className='text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-primary-dark/90 flex items-center justify-center z-50 p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div className='max-w-3xl w-full'>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className='w-full max-h-[80vh] object-contain rounded-2xl'
            />
            <p className='text-white text-center mt-4'>{selectedImage.caption}</p>
          </div>
          <button
            className='absolute top-6 right-6 text-white text-3xl hover:text-accent transition-colors'
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery