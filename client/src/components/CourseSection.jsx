import React from 'react';

const CoursesSection = ({ courses, renderStars }) => {
  return (
    <section
      id="courses"
      className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Courses
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Master the most in-demand technologies with our comprehensive programming courses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl p-6 shadow-lg border border-gray-100 text-center group transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: 'linear-gradient(145deg, #ffffff, #f8fafc)' }}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r ${course.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
            >
              <i className={`${course.icon} text-white text-2xl`}></i>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <div className="flex items-center justify-center text-yellow-500 text-xs mb-3">
              {renderStars(course.rating)}
              <span className="text-gray-500 ml-2">({course.rating})</span>
            </div>
            <button className={`w-full py-2 rounded-lg transition font-medium ${course.buttonColor}`}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
