
// function Hero() {

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center">

//       <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

//         <div>

//           <p className="text-blue-400 font-semibold mb-4">
//             SOFTWARE ENGINEERING STUDENT
//           </p>

//           <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//             Hi,
//             <br />
//             I'm
//             <span className="text-blue-500">
//               {" "}Haregeweyn
//             </span>
//           </h1>

//           <p className="mt-8 text-xl text-slate-300 leading-relaxed">
//             Aspiring Full-Stack Developer and AI Engineer
//             passionate about building modern web applications,
//             machine learning solutions, and impactful digital
//             experiences.
//           </p>

//           <div className="mt-10 flex gap-4">

//            <a
//   href="#projects"
//   className="bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700"
// >
//   View Projects
// </a>

// <a
//   href="#contact"
//   className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
// >
//   Contact Me
// </a>

//           </div>

//         </div>

//         <div className="flex justify-center">

//           <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl"></div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;




// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">

//       <div className="max-w-3xl w-full">

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
//           Hi, I'm <span className="text-blue-500">Haregeweyn</span>
//         </h1>

//         <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6">
//           Aspiring Full-Stack Developer & AI Engineer
//         </p>

//         <p className="text-sm sm:text-base text-slate-400 mb-8 px-2">
//           I build modern web applications, intelligent systems, and scalable digital experiences.
//         </p>

//         {/* BUTTONS */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">

//           <a
//             href="#projects"
//             className="w-full sm:w-auto bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
//           >
//             View Projects
//           </a>

//           <a
//             href="#contact"
//             className="w-full sm:w-auto bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
//           >
//             Contact Me
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;





const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-center">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ROLE TEXT */}
        <p className="text-blue-400 font-semibold mb-4 text-sm sm:text-base">
          SOFTWARE ENGINEERING STUDENT
        </p>

        {/* NAME */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi,
          <br />
          I'm{" "}
          <span className="text-blue-500">Haregeweyn</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
          Aspiring Full-Stack Developer and AI Engineer passionate about building modern web applications,
          machine learning solutions, and impactful digital experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">

          <a
            href="#projects"
            className="bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-black transition w-full sm:w-auto text-center"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;