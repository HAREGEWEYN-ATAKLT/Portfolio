// function About() {
//   return (
//     <section
//       id="about"
//       className="bg-slate-900 text-white py-24"
//     >
//       <div className="max-w-7xl mx-auto px-8">

//         <h2 className="text-5xl font-bold mb-16">
//           About Me
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12">

//           <div className="bg-slate-800 p-8 rounded-3xl">
//             <h3 className="text-2xl font-bold mb-4 text-blue-400">
//               Education
//             </h3>

//             <p className="text-slate-300 leading-8">
//               Third-year Software Engineering student
//               passionate about software development,
//               artificial intelligence, and solving
//               real-world problems through technology.
//             </p>
//           </div>

//           <div className="bg-slate-800 p-8 rounded-3xl">
//             <h3 className="text-2xl font-bold mb-4 text-blue-400">
//               Experience & Goals
//             </h3>

//             <p className="text-slate-300 leading-8">
//               Learned AI and Machine Learning through
//               10 Academy and GCI World. I independently
//               studied React, JavaScript, Git, GitHub,
//               and modern frontend development. Currently
//               learning Node.js and Python to become a
//               Full-Stack Developer and AI Engineer.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;


// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 text-white">
//       <h2 className="text-3xl font-bold mb-4">About Me</h2>
//       <p className="text-slate-300">
//         I am a software engineering student passionate about React, Node.js and AI.
//       </p>
//     </section>
//   );
// };

// export default About;



const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* EDUCATION CARD */}
          <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
              Education
            </h3>

            <p className="text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">
              Third-year Software Engineering student passionate about software development,
              artificial intelligence, and solving real-world problems through technology.
            </p>

          </div>

          {/* EXPERIENCE CARD */}
          <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
              Experience & Goals
            </h3>

            <p className="text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">
              Learned AI and Machine Learning through 10 Academy and GCI World.
              I independently studied React, JavaScript, Git, GitHub, and modern frontend development.
              Currently learning Node.js and Python to become a Full-Stack Developer and AI Engineer.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;