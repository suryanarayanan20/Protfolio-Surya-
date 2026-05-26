export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full mb-6 text-sm font-medium">
  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
  Available for Freelance Projects
</div>
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {[
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🌱' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'JDBC', icon: '⚙️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'LLaMA 3', icon: '🧠' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'AI Integration', icon: '🤖' },
    { name: 'Render Deployment', icon: '🚀' },
  ].map((skill) => (
    <div
      key={skill.name}
      className="bg-black border border-gray-800 hover:border-blue-500 transition rounded-2xl p-5 text-center text-gray-300 font-medium shadow-lg"
    >
      <div className="text-4xl mb-3">
        {skill.icon}
      </div>

      <p>{skill.name}</p>
    </div>
  ))}
</div>

      {/* Services */}
<section className="px-6 md:px-20 py-16">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-10 text-blue-500">
      Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Service 1 */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Web Development
        </h3>

        <p className="text-gray-400 leading-7">
          Modern, responsive, and high-performance websites built using
          React, Tailwind CSS, and modern frontend technologies.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Backend Development
        </h3>

        <p className="text-gray-400 leading-7">
          Scalable REST API development using Java, Spring Boot, MySQL,
          and optimized backend architecture for real-world applications.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          AI Integration
        </h3>

        <p className="text-gray-400 leading-7">
          AI-powered application development using LLMs, Hugging Face,
          automation tools, and intelligent system integrations.
        </p>
      </div>

      {/* Service 4 */}
<div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
  <h3 className="text-2xl font-semibold mb-4">
    Portfolio Design
  </h3>

  <p className="text-gray-400 leading-7">
    Modern and visually appealing portfolio websites designed for
    developers, freelancers, creators, and startups with responsive UI
    and smooth user experience.
  </p>
</div>

{/* Service 5 */}
<div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
  <h3 className="text-2xl font-semibold mb-4">
    UI/UX Optimization
  </h3>

  <p className="text-gray-400 leading-7">
    Improving website user experience with clean layouts, responsive
    interfaces, smooth animations, and modern design principles for
    better engagement and performance.
  </p>
</div>

{/* Service 6 */}
<div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">
  <h3 className="text-2xl font-semibold mb-4">
    Social Media Handling
  </h3>

  <p className="text-gray-400 leading-7">
    Professional social media management services including content
    planning, account handling, audience engagement, branding, and
    consistent growth strategies for businesses and personal brands.
  </p>
</div>

    </div>
  </div>
</section>

{/* Experience */}
<section className="px-6 md:px-20 py-16 bg-gray-950">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-blue-500">
      Experience
    </h2>

    <div className="space-y-8 border-l border-gray-700 pl-8">

      {/* Experience 1 */}
      <div className="relative">
        <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

        <h3 className="text-2xl font-semibold">
          Freelance Web Developer
        </h3>

        <p className="text-blue-400 mb-2">
          2025 - Present
        </p>

        <p className="text-gray-400 leading-7">
          Developing responsive websites, portfolio applications, and
          modern frontend interfaces for clients using React, Tailwind CSS,
          and modern web technologies.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="relative">
        <div className="absolute -left-[41px] top-2 w-4 h-4 bg-purple-500 rounded-full"></div>

        <h3 className="text-2xl font-semibold">
          Backend & API Developer
        </h3>

        <p className="text-purple-400 mb-2">
          2024 - Present
        </p>

        <p className="text-gray-400 leading-7">
          Building scalable backend systems and REST APIs using Java,
          Spring Boot, JDBC, and MySQL with optimized database
          integration and secure architecture.
        </p>
      </div>

      {/* Experience 3 */}
      <div className="relative">
        <div className="absolute -left-[41px] top-2 w-4 h-4 bg-green-500 rounded-full"></div>

        <h3 className="text-2xl font-semibold">
          AI Application Developer
        </h3>

        <p className="text-green-400 mb-2">
          2024 - Present
        </p>

        <p className="text-gray-400 leading-7">
          Developing AI-powered applications using LLMs, Hugging Face,
          automation tools, and intelligent systems for smart user
          interaction and workflow optimization.
        </p>
      </div>

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
{/* Contact Form */}
<section className="px-6 md:px-20 py-16 bg-gray-950">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-blue-500 mb-6">
      Contact Me
    </h2>

    <p className="text-gray-400 text-center mb-12 text-lg">
      Have a project idea, freelance opportunity, or collaboration?
      Feel free to send me a message.
    </p>

<form
  action="https://formsubmit.co/sn3139132@gmail.com"
  method="POST"
  className="space-y-6"
>

  <input type="hidden" name="_captcha" value="false" />

  <input
    type="hidden"
    name="_next"
    value="https://protfolio-surya-git-main-suryanarayanan20s-projects.vercel.app"
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 text-white"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 text-white"
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message"
    required
    className="w-full bg-black border border-gray-800 rounded-2xl px-5 py-4 text-white"
  ></textarea>

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold"
  >
    Send Message
  </button>

</form>
  </div>
</section>
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            Let's Connect

          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 text-gray-400">

  <a
    href="mailto:sn3139132@gmail.com"
    className="hover:text-blue-500 transition"
  >
    📧 sn3139132@gmail.com
  </a>

  <a
    href="tel:+919999999999"
    className="hover:text-blue-500 transition"
  >
    📱 +91 6282787553
  </a>

  <p>📍 Tamil Nadu,Coimbatore, India</p>

</div>

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