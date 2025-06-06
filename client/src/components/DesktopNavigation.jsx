import React from 'react';
import { Code } from 'lucide-react'; // or wherever your Code icon comes from

const DesktopNavigation = () => {
  const handleNavClick = (section) => {
    // Implement navigation logic here
    console.log('Navigate to:', section);
  };

  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4 hidden md:block"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CourseHub.com
          </span>
        </div>
        <div className="flex items-center space-x-6">
          {['home', 'courses', 'about', 'team', 'feedback'].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="text-gray-700 hover:text-blue-600 transition font-medium capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
