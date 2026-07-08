import { useState } from 'react'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1',
    packageType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '', email: '', phone: '', destination: '',
        travelDate: '', travelers: '1', packageType: '', message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const inputClass = 'border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'

  return (
    <section id="booking" className='px-4 md:px-16 py-12 md:py-20 bg-white'>
      <div className='text-center max-w-2xl mx-auto mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>Book Your Trip</h2>
        <p className='mt-3 text-gray-600 text-sm md:text-base'>
          Fill in your details and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className='max-w-3xl mx-auto bg-cream rounded-2xl shadow-sm p-6 md:p-10'>
        {submitted ? (
          <div className='text-center py-10'>
            <p className='text-4xl mb-3'>✅</p>
            <h3 className='text-xl font-semibold text-primary'>Booking Request Sent!</h3>
            <p className='mt-2 text-gray-600 text-sm md:text-base'>
              We'll contact you shortly to confirm your trip details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type="text" name="name" value={formData.name} onChange={handleChange}
                required placeholder="Your full name" className={inputClass}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                required placeholder="you@example.com" className={inputClass}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Phone Number</label>
              <input
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                required placeholder="+91 98765 43210" className={inputClass}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Preferred Destination</label>
              <select name="destination" value={formData.destination} onChange={handleChange} required className={inputClass}>
                <option value="">Select destination</option>
                <option value="manali">Manali</option>
                <option value="goa">Goa</option>
                <option value="kerala">Kerala</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="bali">Bali</option>
                <option value="vietnam">Vietnam</option>
                <option value="maldives">Maldives</option>
                <option value="switzerland">Switzerland</option>
                <option value="scotland">Scotland</option>
                <option value="paris">Paris</option>
                <option value="italy">Italy</option>
              </select>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Travel Date</label>
              <input
                type="date" name="travelDate" value={formData.travelDate} onChange={handleChange}
                required className={inputClass}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-medium text-gray-700'>Number of Travelers</label>
              <input
                type="number" name="travelers" min="1" value={formData.travelers} onChange={handleChange}
                required className={inputClass}
              />
            </div>

            <div className='flex flex-col gap-1 md:col-span-2'>
              <label className='text-sm font-medium text-gray-700'>Package Type</label>
              <select name="packageType" value={formData.packageType} onChange={handleChange} className={inputClass}>
                <option value="">Select package (optional)</option>
                <option value="solo">Solo Explorer</option>
                <option value="couple">Couple Getaway</option>
                <option value="family">Family Combo</option>
                <option value="group">Group Adventure</option>
              </select>
            </div>

            <div className='flex flex-col gap-1 md:col-span-2'>
              <label className='text-sm font-medium text-gray-700'>Special Requests</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows="4"
                placeholder="Any special requirements or preferences..." className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className='md:col-span-2 bg-primary text-white py-3 rounded-full uppercase tracking-wide text-sm font-medium hover:bg-primary-dark transition-colors'
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default BookingForm