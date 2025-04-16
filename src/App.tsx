import Section from "./components/Section";
import Navbar from "./components/Navbar";
import TypeWriter from "./components/TypeWriter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <section className="relative h-[calc(100vh)] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/80 to-purple-900/90"></div>
          </div>

          <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-10 text-white">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                alt="Profile"
                className="relative rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 border-2 border-white/50 shadow-lg transform hover:scale-105 transition-all duration-300 object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              Yoga QF
            </h1>
            <div className="h-8 mb-4">
              <TypeWriter
                texts={[
                  "Full Stack Developer",
                  "React Specialist",
                  "TypeScript Enthusiast",
                  "UI/UX Designer",
                ]}
                className="text-lg sm:text-xl opacity-90"
              />
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-github text-xl sm:text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-twitter text-xl sm:text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
        <Section title="About Me" className="bg-white dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg max-w-prose">
            I'm a passionate full-stack developer with 5 years of experience in
            building web applications. I specialize in React, Node.js, and
            TypeScript. When I'm not coding, you can find me contributing to
            open-source projects or writing technical blog posts.
          </p>
        </Section>
        <Section title="Skills" className="bg-white dark:bg-gray-900">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                name: "React",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500",
              },
              {
                name: "TypeScript",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500",
              },
              {
                name: "Node.js",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500",
              },
              {
                name: "Python",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500",
              },
              {
                name: "MongoDB",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-500",
              },
              {
                name: "Docker",
                hoverClass:
                  "hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className={`bg-white border dark:bg-gray-700 dark:text-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 text-center font-medium hover:text-white ${skill.hoverClass}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </Section>
        <Section
          title="Featured Projects"
          className="bg-white dark:bg-gray-900"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Project 1",
                description:
                  "A React-based dashboard application with real-time data visualization",
                tech: ["React", "D3.js", "Firebase"],
              },
              {
                title: "Project 2",
                description:
                  "Full-stack e-commerce platform with headless CMS integration",
                tech: ["Next.js", "Strapi", "PostgreSQL"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs sm:text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section
          title="Education & Experience"
          className="bg-white dark:bg-gray-900"
        >
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            {[
              {
                year: "2020 - Present",
                title: "Senior Full Stack Developer",
                company: "Tech Corp Inc.",
                description:
                  "Leading development of enterprise web applications",
              },
              {
                year: "2018 - 2020",
                title: "Frontend Developer",
                company: "Digital Solutions Co.",
                description: "Developed customer-facing web applications",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                <h3 className="text-lg font-semibold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.company} • {item.year}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Contact" className="bg-white dark:bg-gray-900">
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>

        <Section title="Blog" className="bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Building Modern Web Apps with React",
                date: "April 15, 2025",
                excerpt:
                  "A comprehensive guide to building scalable web applications using React and TypeScript",
                image: "https://via.placeholder.com/400x250",
              },
              {
                title: "Optimizing React Performance",
                date: "March 20, 2025",
                excerpt:
                  "Key strategies for improving React application performance and user experience",
                image: "https://via.placeholder.com/400x250",
              },
              {
                title: "Introduction to TypeScript",
                date: "February 10, 2025",
                excerpt:
                  "Getting started with TypeScript and its benefits for modern web development",
                image: "https://via.placeholder.com/400x250",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {post.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Testimonials" className="bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Yoga's work is exceptional. He has a deep understanding of modern web technologies and delivers high-quality solutions.",
                name: "John Smith",
                role: "CEO, Tech Corp Inc.",
              },
              {
                quote:
                  "I've worked with Yoga on multiple projects and he consistently exceeds expectations. His attention to detail is outstanding.",
                name: "Sarah Johnson",
                role: "CTO, Digital Solutions Co.",
              },
              {
                quote:
                  "Yoga is not only a talented developer but also a great team player. He communicates effectively and delivers on time.",
                name: "Michael Brown",
                role: "Project Manager, Startup Hub",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 border dark:bg-gray-700 p-6 rounded-lg text-center"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-lg font-semibold dark:text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Awards & Certifications"
          className="bg-white dark:bg-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Certified React Developer",
                organization: "React Academy",
                year: "2023",
                icon: "https://via.placeholder.com/64x64",
              },
              {
                title: "Advanced TypeScript",
                organization: "TypeScript Institute",
                year: "2022",
                icon: "https://via.placeholder.com/64x64",
              },
              {
                title: "Best Open Source Contribution",
                organization: "GitHub",
                year: "2021",
                icon: "https://via.placeholder.com/64x64",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white border dark:bg-gray-700 p-6 rounded-lg flex items-center gap-4"
              >
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {award.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact" className="bg-white dark:bg-gray-900">
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </div>
    </>
  );
};

export default App;
