export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-400 text-lg mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Surya <span className="text-blue-500">Narayanan</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-6">
              Web Developement,Java Backend Developer & AI Application Developer specializing in
              Spring Boot, REST APIs, MySQL, and AI-powered applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/suryanarayanan20"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl font-medium"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/surya-narayanan-590357242/"
                target="_blank"
                className="border border-gray-600 hover:border-blue-500 transition px-6 py-3 rounded-2xl font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40 animate-pulse"></div>

              {/* Profile Circle */}
              <div className="relative w-72 h-72 rounded-full p-[4px] bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_50px_rgba(168,85,247,0.5)]">

                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src="/profile.png"
                    alt="Surya"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-500">
            About Me
          </h2>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl">
            <p className="text-gray-300 text-lg leading-8">
             Software Engineering graduate with expertise in Java backend development, AI-powered applications, and modern web technologies. Experienced in building scalable REST APIs using Spring Boot, integrating MySQL databases, and developing intelligent systems that solve real-world problems efficiently. Passionate about creating clean, responsive, and high-performance applications with optimized backend architecture and user-focused design.

Skilled in AI integration, automation tools, and full-stack application development with hands-on experience in deploying real-world projects. Strong understanding of modern development practices, API integration, database management, and cloud deployment platforms.

As a freelancer, I enjoy collaborating with clients, startups, and businesses to build innovative digital solutions that are reliable, scalable, and visually appealing. Always eager to learn new technologies, improve problem-solving skills, and contribute to impactful projects that combine creativity with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-500">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Web Development',
              'Java',
              'Spring Boot',
              'REST APIs',
              'MySQL',
              'JDBC',
              'JavaScript',
              'HTML/CSS',
              'Git & GitHub',
              'LLaMA 3',
              'Hugging Face',
              'AI Integration',
              'Render Deployment',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-black border border-gray-800 hover:border-blue-500 transition rounded-2xl p-5 text-center text-gray-300 font-medium shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-500">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Project 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                AI Resume Analyzer
              </h3>

              <p className="text-gray-400 leading-7 mb-5">
                AI-powered resume analysis platform using Hugging Face and
                LLaMA 3 APIs with ATS scoring, keyword extraction, and smart
                resume feedback generation.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/suryanarayanan20/resume-analyzer"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                >
                  GitHub
                </a>

                <a
                  href="https://resume-analyzer-2edj.onrender.com"
                  target="_blank"
                  className="border border-gray-700 hover:border-blue-500 px-4 py-2 rounded-xl"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Coffee Shop POS
              </h3>

              <p className="text-gray-400 leading-7 mb-5">
                Full-stack POS application built with Java, JDBC, and MySQL for
                managing billing, orders, and transaction workflows.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://suryacoffeeshop.vercel.app/"
                  target="_blank"
                  className="border border-gray-700 hover:border-blue-500 px-4 py-2 rounded-xl"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                SWAG NLP System
              </h3>

              <p className="text-gray-400 leading-7 mb-5">
                Transformer-based Tamil NLP system with layered bi-directional
                attention mechanisms for intelligent query response generation.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/suryanarayanan20/SWAG-LLM-Tamil-QA-System"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Patent */}
      <section className="px-6 md:px-20 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-blue-500">
            Patent
          </h2>

          <div className="bg-black border border-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">
              SWAG-Based Query Response System
            </h3>

            <p className="text-gray-400 leading-8">
              Published patent focused on transformer-based NLP architecture
              using layered bi-directional attention mechanisms for intelligent
              multilingual query processing.
            </p>

            <p className="text-blue-400 mt-4">
              Application No: 202441074679 | Published: 2024
            </p>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
<section className="px-6 md:px-20 py-16 bg-black">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-blue-500 mb-6">
      Download Resume
    </h2>

    <p className="text-gray-400 text-lg leading-8 mb-8">
      Want to know more about my skills, projects, and experience? 
      Download my resume below.
    </p>

    <a
      href="/resume.pdf"
      download
      className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
    >
      Download Resume
    </a>

  </div>
</section>

      {/* Contact */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-8">
            Interested in collaborating, freelancing, or building amazing
            applications together? Feel free to connect with me.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="mailto:sn3139132@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl font-medium"
            >
              Email Me
            </a>

            <a
              href="https://github.com/suryanarayanan20"
              target="_blank"
              className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-2xl font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}