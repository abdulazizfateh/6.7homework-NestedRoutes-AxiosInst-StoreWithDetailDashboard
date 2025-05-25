import React from 'react'

const Stats = () => {
  const stats = [
    { title: 'Total Students', value: 248, icon: '👥' },
    { title: 'Active Groups', value: 19, icon: '📚' },
    { title: 'Completed Lessons', value: 834, icon: '✅' },
    { title: 'Revenue', value: '$3,520', icon: '💰' },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-[12px] bg-primary-lighter-bg border border-border p-4 flex items-center gap-4 hover:border-highlight-blue duration-200"
        >
          <div className="text-[28px]">{stat.icon}</div>
          <div>
            <h3 className="text-[14px] text-secondary-text">{stat.title}</h3>
            <p className="text-[20px] font-semibold text-primary-text">{stat.value}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Stats
