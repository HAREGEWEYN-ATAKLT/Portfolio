

// // const Contact = () => {
// //   return (
// //     <section id="contact" className="bg-slate-900 py-20 px-6 text-white">

// //       <div className="max-w-3xl mx-auto text-center">

// //         <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

// //         <p className="text-slate-300 mb-6">
// //           I’m open to internships, collaborations, and job opportunities in software development and AI.
// //         </p>

// //         {/* ADDRESS ONLY */}
// //         <div className="bg-slate-800 p-5 rounded-lg mb-8">
// //           📍 Addis Ababa, Ethiopia
// //         </div>

// //         {/* LINKS */}
// //         <div className="flex flex-col sm:flex-row justify-center gap-4">

// //           <a
// //             href="https://www.linkedin.com/in/haregeweyn-ataklt-reda-79b412394"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="bg-slate-800 px-5 py-3 rounded-lg hover:bg-slate-700"
// //           >
// //             LinkedIn
// //           </a>

// //           <a
// //             href="https://t.me/Serk_23"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="bg-slate-800 px-5 py-3 rounded-lg hover:bg-slate-700"
// //           >
// //             Telegram
// //           </a>

// //           <a
// //             href="tel:0919259702"
// //             className="bg-slate-800 px-5 py-3 rounded-lg hover:bg-slate-700"
// //           >
// //             Phone
// //           </a>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default Contact;



// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-900"
//     >
//       <div className="max-w-3xl mx-auto text-center">

//         {/* TITLE */}
//         <h2 className="text-4xl font-bold mb-6 text-slate-800">
//           Contact Me
//         </h2>

//         {/* DESCRIPTION */}
//         <p className="text-slate-700 mb-8 leading-relaxed">
//           I’m open to internships, collaborations, and job opportunities in
//           software development and AI engineering. Feel free to reach out anytime.
//         </p>

//         {/* ADDRESS CARD */}
//         <div className="bg-white shadow-md rounded-xl p-6 mb-8 border border-slate-200">
//           <p className="text-slate-700">
//             📍 <span className="font-semibold">Bahir Dar, Ethiopia</span>
//           </p>
//         </div>

//         {/* CONTACT LINKS */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4">

//           <a
//             href="https://www.linkedin.com/in/haregeweyn-ataklt-reda-79b412394"
//             target="_blank"
//             rel="noreferrer"
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
//           >
//             💼 LinkedIn
//           </a>

//           <a
//             href="https://t.me/Serk_23"
//             target="_blank"
//             rel="noreferrer"
//             className="bg-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition shadow-md"
//           >
//             📨 Telegram
//           </a>

//           <a
//             href="tel:0919259702"
//             className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-md"
//           >
//             📞 Call Me
//           </a>

//         </div>

//         {/* FOOTER NOTE */}
//         <p className="text-sm text-slate-600 mt-10">
//           Let’s build something amazing together 🚀
//         </p>

//       </div>
//     </section>
//   );
// };

// export default Contact;


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-100 text-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-sm sm:text-base mb-6">
          Let’s work together on exciting projects 🚀
        </p>

        {/* ADDRESS */}
        <div className="bg-white p-5 rounded-xl shadow mb-8">
          📍 Bahir Dar, Ethiopia
        </div>

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://www.linkedin.com/in/haregeweyn-ataklt-reda-79b412394"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://t.me/Serk_23"
            target="_blank"
            rel="noreferrer"
            className="bg-sky-500 text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-sky-600 transition"
          >
            Telegram
          </a>

          <a
            href="tel:0919259702"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-green-700 transition"
          >
            Phone
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;