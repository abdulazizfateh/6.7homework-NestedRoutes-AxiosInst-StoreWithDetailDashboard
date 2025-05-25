import React from 'react'

const Ranking = () => {
  const rankingData = [
    { id: 1, name: 'Aliyev Diyorbek', group: 'Frontend A', score: 982 },
    { id: 2, name: 'Nuriddinov Azim', group: 'Backend B', score: 941 },
    { id: 3, name: 'Karimova Laylo', group: 'UX/UI Design', score: 917 },
    { id: 4, name: 'Tursunov Shohruh', group: 'Fullstack C', score: 899 },
  ]

  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-4 w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-4">Top Students</h2>
      <table className="w-full text-left text-sm">
        <thead className="text-secondary-text border-b border-border">
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">Name</th>
            <th className="py-2">Group</th>
            <th className="py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {rankingData.map((student, index) => (
            <tr
              key={student.id}
              className={`border-b border-border hover:bg-secondary-darker-bg duration-150 ${
                index === rankingData.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <td className="py-3 text-primary-text">{index + 1}</td>
              <td className="py-3 text-primary-text">{student.name}</td>
              <td className="py-3 text-secondary-text">{student.group}</td>
              <td className="py-3 text-primary-text font-medium">{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Ranking
