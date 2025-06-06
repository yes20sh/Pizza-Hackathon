import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Star, 
  Play, 
  Book, 
  Home, 
  Users, 
  Info, 
  MessageCircle,
  Target,
  Rocket,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Phone,
  Send
} from 'lucide-react';
import DesktopNavigation from '../components/DesktopNavigation';
import BottomNav from '../components/BottomNav';
import CoursesSection from '../components/CourseSection';
import FeedbackSection from '../components/FeedbackSection';


const CourseHub = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle mobile navigation
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  // Course data
  const courses = [
    {
      id: 1,
      title: 'React.js',
      description: 'Build dynamic user interfaces with React components, hooks, and state management.',
      icon: 'fab fa-react',
      bgColor: 'from-blue-500 to-cyan-500',
      buttonColor: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Express.js',
      description: 'Create powerful backend APIs and web applications with Node.js and Express.',
      icon: 'fab fa-js-square',
      bgColor: 'from-yellow-500 to-orange-500',
      buttonColor: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Node.js',
      description: 'Master server-side JavaScript development with Node.js runtime environment.',
      icon: 'fab fa-node-js',
      bgColor: 'from-green-500 to-emerald-500',
      buttonColor: 'bg-green-50 text-green-600 hover:bg-green-100',
      rating: 4.7
    },
    {
      id: 4,
      title: 'MongoDB',
      description: 'Learn NoSQL database design, queries, and integration with modern applications.',
      icon: 'fas fa-leaf',
      bgColor: 'from-green-600 to-green-700',
      buttonColor: 'bg-green-50 text-green-600 hover:bg-green-100',
      rating: 4.9
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Lead React Instructor',
      experience: '5+ years at Meta, React specialist',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      ringColor: 'ring-blue-100'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Backend Specialist',
      experience: '7+ years at Google, Node.js expert',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      ringColor: 'ring-purple-100'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Full Stack Developer',
      experience: '6+ years building scalable apps',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      ringColor: 'ring-green-100'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      experience: '4+ years designing user experiences',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      ringColor: 'ring-pink-100'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Active Students', color: 'text-blue-600' },
    { number: '20+', label: 'Expert Instructors', color: 'text-purple-600' },
    { number: '50+', label: 'Courses Available', color: 'text-green-600' },
    { number: '95%', label: 'Success Rate', color: 'text-orange-600' }
  ];

  const features = [
    { icon: 'fas fa-target', title: 'Excellence', description: 'Delivering high-quality content that meets industry standards and exceeds expectations.', bgColor: 'from-blue-500 to-purple-500' },
    { icon: 'fas fa-users', title: 'Community', description: 'Building a supportive learning community where students and instructors grow together.', bgColor: 'from-green-500 to-teal-500' },
    { icon: 'fas fa-rocket', title: 'Innovation', description: 'Staying ahead of technology trends and incorporating latest tools and methodologies.', bgColor: 'from-orange-500 to-red-500' }
  ];

  const benefits = [
    'Expert-led courses with industry experience',
    'Hands-on projects and real-world applications',
    '24/7 community support and mentorship',
    'Career guidance and job placement assistance'
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen" style={{ background: 'white' }}>

      <DesktopNavigation />
      {/* Mobile Navigation */}
     
      <BottomNav />
        
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 pb-24">
        {/* Hero Section */}
        <section id="home" className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium">
                <Star className="mr-2 text-yellow-500" size={16} />
                Premium Programming Courses
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CourseHub.com
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Master modern web development with our comprehensive courses. Learn from industry experts and build real-world projects.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
                  alt="Programming Code" 
                  className="rounded-2xl shadow-2xl object-cover w-full max-h-80"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20" style={{ animation: 'pulse 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite' }}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20" style={{ animation: 'pulse 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite', animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
     
        <CoursesSection courses={courses} renderStars={renderStars}/>
          

        {/* Our Aim Section */}
        <section className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Aim
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              At CourseHub.com, we believe that quality education should be accessible to everyone. Our mission is to bridge the gap between traditional learning and modern industry requirements by providing cutting-edge programming courses that prepare students for real-world challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About CourseHub.com
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded by passionate developers and educators, CourseHub.com has been at the forefront of online programming education. We combine theoretical knowledge with practical experience to create courses that truly prepare you for the tech industry.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our experienced team of developers and educators are here to guide you on your learning journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-2xl p-6 shadow-lg border border-gray-100 text-center transition-all hover:scale-105 hover:shadow-xl" style={{ background: 'linear-gradient(145deg, #ffffff, #f8fafc)' }}>
                <div className="relative mb-4">
                  <img src={member.image} alt="Team Member" className={`rounded-full w-20 h-20 object-cover ring-4 ${member.ringColor} mx-auto`} />
                  <div className="absolute -bottom-1 -right-6 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs mb-3">{member.experience}</p>
                <div className="flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 transition"><i className="fab fa-linkedin"></i></button>
                  <button className="text-gray-500 hover:text-gray-600 transition"><i className="fab fa-github"></i></button>
                  <button className="text-blue-400 hover:text-blue-500 transition"><i className="fab fa-twitter"></i></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        {/* <section id="feedback" className="rounded-3xl p-8 md:p-12 transition-all hover:shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Have questions or feedback? We'd love to hear from you. Reach out to our team anytime.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <i className="fas fa-envelope text-blue-600 text-2xl mb-3"></i>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">contact@coursehub.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <i className="fas fa-phone text-green-600 text-2xl mb-3"></i>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </div>
          </div>
        </section> */}

        <FeedbackSection />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 1; }
          80%, 100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CourseHub;