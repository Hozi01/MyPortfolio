import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.gif';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      
        <div className="md: text-center md:text mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, we are
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            NLE Design Team
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">We provide services of </span>
              
          </h3>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                  <ReactTypingEffect
              text={[
                '2d/3d Animations',
                '3d Brand Ads',
                'Graphics Designing',
                '3d Modeling',
                'Cgi Designing',
                'Motion Graphics',
                'Logo Designing',
              ]}
            
            
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Welcome to NLE Design Team! We specialize in creating visually stunning animations, graphics, and designs that capture your brand's essence. Our team offers a wide range of services, including 2D and 3D animation, 3D ads designing, brand ads, 2D graphics, poster designs, graphics designing, and motion graphics. We're passionate about delivering high-quality designs that exceed your expectations and help bring your vision to life. Let us collaborate to create something amazing for your brand!
In need of a stunning CGI 3D product animation, intricate 3D product design, mesmerizing VFX animation, captivating 3D NFT, dynamic 3D character animation, or detailed exploded view & 4K image rendering? Look no further! Contact us today.
          </p>
          {/* Resume Button */}
          <a
            href="mailto:Jimi@nle.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            CONTACT NOW!
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default About;
