// function Skills() {

//   const skills = [
//     "React",
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Python",
//     "SQL",
//     "Node.js",
//     "Git",
//     "GitHub",
//     "Machine Learning",
//     "Tailwind CSS",
//     "Problem Solving"
//   ];

//   return (
//     <section
//       id="skills"
//       className="bg-slate-950 text-white py-24"
//     >
//       <div className="max-w-7xl mx-auto px-8">

//         <h2 className="text-5xl font-bold mb-16">
//           Skills
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {skills.map((skill) => (

//             <div
//               key={skill}
//               className="bg-slate-800 p-8 rounded-2xl text-center font-semibold hover:scale-105 transition duration-300 hover:bg-blue-600"
//             >
//               {skill}
//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;







const Skills = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Node.js",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-950">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
          Skills
        </h2>

        {/* GRID FIXED */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-slate-800 text-white py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-slate-700 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;