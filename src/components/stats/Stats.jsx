const stats = [
  { number: '15K+', label: 'Happy Travelers' },
  { number: '120+', label: 'Destinations Covered' },
  { number: '4.8★', label: 'Average Rating' },
  { number: '10+', label: 'Years of Experience' },
]

const Stats = () => {
  return (
    <section className='px-4 md:px-16 py-12 md:py-20 bg-primary text-white'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center'>
        {stats.map((stat, index) => (
          <div key={index}>
            <p className='text-3xl md:text-5xl font-bold text-accent'>{stat.number}</p>
            <p className='mt-2 text-sm md:text-base text-white/80'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats