import Section from "./components/Section";
import Navbar from "./components/Navbar";
import TypeWriter from "./components/TypeWriter";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "MongoDB",
  "Docker",
  "UI Design",
  "PostgreSQL",
];

const projects = [
  {
    tag: "UI/UX · 2024",
    title: "Dashboard Analytics",
    description:
      "Sistem visualisasi data untuk startup fintech dengan fokus pada kejelasan metrik.",
  },
  {
    tag: "Web App · 2024",
    title: "E-Commerce Platform",
    description:
      "Platform belanja dengan pengalaman checkout yang dioptimalkan end-to-end.",
  },
  {
    tag: "Branding · 2023",
    title: "Visual Identity",
    description:
      "Identitas merek untuk perusahaan teknologi pendidikan.",
  },
  {
    tag: "Mobile · 2023",
    title: "Health Tracker App",
    description:
      "Aplikasi kesehatan dengan fokus pada kebiasaan harian dan insight ringkas.",
  },
];

const App = () => {
  return (
    <div className="lp-root">
      <Navbar />

      <section className="hero" aria-labelledby="hero-heading">
        <p className="hero-eyebrow">Full Stack Developer</p>
        <h1 id="hero-heading" className="hero-name">
          Yoga
          <br />
          <em>Qodar Falah</em>
        </h1>
        <p className="hero-bio">
          Saya membangun produk digital yang terasa nyata — dari konsep hingga
          kode, dengan perhatian penuh pada detail dan pengalaman pengguna.
        </p>
        <div className="hero-bio !mb-8 !mt-[-1rem] max-w-[480px]">
          <TypeWriter
            texts={[
              "Full Stack Developer",
              "React Specialist",
              "TypeScript Enthusiast",
              "UI/UX Designer",
            ]}
            className="text-[16px] font-light text-[color:var(--color-text-secondary)]"
          />
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Hubungi saya
          </a>
          <button
            type="button"
            className="btn-ghost"
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Lihat karya
          </button>
        </div>

        <div className="hero-cta !mt-6 gap-6">
          <a href="#" className="social-link !text-[color:var(--color-text-secondary)]">
            <i className="fab fa-github text-[15px]" aria-hidden />
            GitHub
          </a>
          <a href="#" className="social-link !text-[color:var(--color-text-secondary)]">
            <i className="fab fa-linkedin text-[15px]" aria-hidden />
            LinkedIn
          </a>
          <a href="#" className="social-link !text-[color:var(--color-text-secondary)]">
            <i className="fab fa-twitter text-[15px]" aria-hidden />
            Twitter
          </a>
        </div>
      </section>

      <Section title="Proyek pilihan" id="work" contentClassName="works-grid">
        {projects.map((p) => (
          <article key={p.title} className="work-item work-item--interactive">
            <p className="work-tag">{p.tag}</p>
            <h3 className="work-title">{p.title}</h3>
            <p className="work-desc">{p.description}</p>
          </article>
        ))}
      </Section>

      <Section title="Tentang" id="about">
        <p className="hero-bio !mb-0 max-w-none">
          I&apos;m a passionate full-stack developer with 5 years of experience
          in building web applications. I specialize in React, Node.js, and
          TypeScript. When I&apos;m not coding, you can find me contributing to
          open-source projects or writing technical blog posts.
        </p>
      </Section>

      <Section title="Keahlian" id="skills" contentClassName="skills-row">
        {skills.map((name) => (
          <span key={name} className="skill-pill">
            {name}
          </span>
        ))}
      </Section>

      <Section title="Pengalaman" contentClassName="timeline-list">
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
        ].map((item) => (
          <div key={item.title} className="timeline-item">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-meta">
              {item.company} · {item.year}
            </p>
            <p className="timeline-desc">{item.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Blog">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          ].map((post) => (
            <article key={post.title} className="blog-card">
              <img src={post.image} alt="" />
              <div className="blog-card-body">
                <p className="blog-card-date">{post.date}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Testimoni">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          ].map((t) => (
            <blockquote key={t.name} className="quote-card">
              <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
              <p className="quote-name">{t.name}</p>
              <p className="quote-role">{t.role}</p>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section title="Penghargaan & sertifikasi">
        <div className="flex flex-col gap-3">
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
          ].map((award) => (
            <div key={award.title} className="award-row">
              <img src={award.icon} alt="" />
              <div>
                <h3 className="work-title !mb-1">{award.title}</h3>
                <p className="work-desc">{award.organization}</p>
                <p className="work-tag !mb-0 !mt-1">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <hr className="divider" />

      <section id="contact" className="section-block">
        <div className="contact-block">
          <h2 className="contact-heading">
            Punya proyek? <em>Ayo bicara.</em>
          </h2>
          <div className="social-links">
            <a href="mailto:hello@example.com" className="social-link">
              ✉ hello@example.com
            </a>
            <a href="#" className="social-link">
              ↗ LinkedIn
            </a>
            <a href="#" className="social-link">
              ↗ GitHub
            </a>
          </div>
        </div>

        <form
          className="mt-12 max-w-md space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="contact-name" className="lp-field-label">
              Nama
            </label>
            <input
              id="contact-name"
              type="text"
              className="lp-input"
              placeholder="Nama Anda"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="lp-field-label">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className="lp-input"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div className="!mb-6">
            <label htmlFor="contact-message" className="lp-field-label">
              Pesan
            </label>
            <textarea
              id="contact-message"
              rows={4}
              className="lp-textarea"
              placeholder="Ceritakan proyek Anda…"
            />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Kirim pesan
          </button>
        </form>
      </section>

      <div className="footer-bar">
        <span className="footer-copy">© {new Date().getFullYear()} Emil Abdul N</span>
        <span className="available-dot">
          <span className="dot" />
          Tersedia untuk proyek baru
        </span>
      </div>
    </div>
  );
};

export default App;
