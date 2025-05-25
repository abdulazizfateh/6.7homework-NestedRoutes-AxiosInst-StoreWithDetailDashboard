import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

const ExtraLessons = () => {
  const lessons = [
    { id: 1, title: 'Advanced React', instructor: 'Aliyev Diyorbek', date: '2025-06-10', duration: '2h' },
    { id: 2, title: 'Node.js Basics', instructor: 'Nuriddinov Azim', date: '2025-06-12', duration: '1.5h' },
    { id: 3, title: 'UI/UX Principles', instructor: 'Karimova Laylo', date: '2025-06-15', duration: '2h' },
    { id: 4, title: 'Database Design', instructor: 'Tursunov Shohruh', date: '2025-06-18', duration: '2h' },
  ];

  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[8px] p-6 w-full max-w-full mx-auto">
      <h2 className="text-2xl font-medium text-primary-text mb-4 tracking-wide">Extra Lessons</h2>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="rounded-[8px] border border-border shadow-lg p-6 hover:scale-[1.01] duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-bold text-white mb-4">{lesson.title}</h3>
            <p className="text-primary-text mb-2 text-sm">
              <span className="font-semibold text-primary-text">Instructor: </span>{lesson.instructor}
            </p>

            <div className="flex items-center text-primary-text space-x-4 mb-1">
              <FaCalendarAlt className="text-sm" />
              <span className="text-sm">{lesson.date}</span>
            </div>
            <div className="flex items-center text-primary-text space-x-4">
              <FaClock className="text-sm" />
              <span className="text-sm">{lesson.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraLessons;
