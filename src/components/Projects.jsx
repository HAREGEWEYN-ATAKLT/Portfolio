function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}

          <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="../image/deplloyedforfinan.png"
              alt="Project"
              className="w-full"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                Financial News Sentiment Dashboard
              </h3>

              <p className="text-slate-300 mb-5">
                An AI-powered dashboard that analyzes
                financial news and visualizes sentiment
                trends through interactive charts.
              </p>

              <div className="flex gap-4">

                <a
                href="https://financial-news-dashboard-mu.vercel.app"
                  target="_blank"
 rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/HAREGEWEYN-ATAKLT/financial-news-dashboard.git"
                  target="_blank"
  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* Project 2 */}

          <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

            <img
              src="https://via.placeholder.com/600x300"
              alt="Project"
              className="w-full"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                Job Application Tracker
              </h3>

              <p className="text-slate-300 mb-5">
                A full-stack application that helps users
                organize and manage job applications
                efficiently.
              </p>

              <div className="flex gap-4">

                <a
                  href="https://job-tracker-swart-psi.vercel.app"
                   target="_blank"
 rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/HAREGEWEYN-ATAKLT/job-tracker.git"
                   target="_blank"
 rel="noopener noreferrer"
                  className="border px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;





