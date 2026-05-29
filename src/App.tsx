import Section from "./components/Section";
import Navbar from "./components/Navbar";
import TypeWriter from "./components/TypeWriter";

const skills = [
  "React",
  "Next JS",
  "Node.js",
  "Python",
  "PHP",
  "Laravel",
  "CorelDRAW",
  "Photoshop",
  "VHP",
];

const projects = [
  {
    tag: "Landing Page",
    title: "Jelajah Subang",
    description: "Landing page untuk rekomendasi wisata Subang.",
    link: "https://jelajahsubang.vercel.app/",
  },
  {
    tag: "Analytics App",
    title: "App Signal NR7",
    description:
      "Aplikasi analitik untuk monitoring sinyal NR7 dengan visualisasi data real-time.",
    link: "https://app-signal-nr7.streamlit.app/",
  },
  {
    tag: "Design",
    title: "Brand Identity",
    description: "Branding lengkap design untuk perusahaan.",
    link: "https://brand-identity.vercel.app/",
  },
  {
    tag: "Web App",
    title: "Sardjana Tempe",
    description: "Aplikasi e-commerce untuk jajanan oleh2 online.",
    link: "https://sardjanatempe.github.io/",
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
              "Graphic Designer",
              "Trader",
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
              window.open(
                "https://drive.google.com/file/d/1uRUyaPPu8Qef3KHmK7zjrTqcoBzLUAV2/view?usp=drive_link",
                "_blank",
              )
            }
          >
            Download CV
          </button>
        </div>

        {/* <div className="hero-cta !mt-6 gap-6">
          <a
            href="#"
            className="social-link !text-[color:var(--color-text-secondary)]"
          >
            <i className="fab fa-github text-[15px]" aria-hidden />
            GitHub
          </a>
          <a
            href="#"
            className="social-link !text-[color:var(--color-text-secondary)]"
          >
            <i className="fab fa-linkedin text-[15px]" aria-hidden />
            LinkedIn
          </a>
          <a
            href="#"
            className="social-link !text-[color:var(--color-text-secondary)]"
          >
            <i className="fab fa-twitter text-[15px]" aria-hidden />
            Twitter
          </a>
        </div> */}
      </section>

      <Section title="Proyek pilihan" id="work" contentClassName="works-grid">
        {projects.map((p) => (
          <article key={p.title} className="work-item work-item--interactive">
            <p className="work-tag">{p.tag}</p>
            <h3 className="work-title">{p.title}</h3>
            <p className="work-desc">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !mt-4"
            >
              Lihat Proyek
            </a>
          </article>
        ))}
      </Section>

      <Section title="Tentang" id="about">
        <p className="hero-bio !mb-0 max-w-none">
          I&apos;m a passionate full-stack developer, IT Support, design, and
          trader with over 5 years of experience building impactful digital
          products. I specialize in React, Node.js, and modern web technologies,
          delivering solutions that are not only functional but also delightful
          to use. When I&apos;m not coding, you can find me exploring design
          trends or analyzing market patterns. I&apos;m always eager to take on
          new challenges and collaborate on innovative projects.
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
            year: "2018 - 2019",
            title: "Admin Staff",
            company: "CV Mitra Surya Nugraha",
            description:
              "Mengelola administrasi dan operasional kantor, serta mendukung tim dalam berbagai tugas administratif",
          },
          {
            year: "2020 - present",
            title: "Design, IT Support, Web Developer, Accounting",
            company: "Lembah Ciater Resort",
            description:
              "Bertanggung jawab untuk desain grafis, dukungan IT, dan mengelola alur akuntansi, serta mengembangkan dan memelihara situs web perusahaan untuk meningkatkan pengalaman pelanggan",
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

      {/* <Section title="Blog">
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
      </Section> */}

      <Section title="Testimoni">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "Yoga's work is exceptional. He has a deep understanding IT industry and consistently delivers outstanding results.",
              name: "Sukaryanto",
              role: "ex RM Lembah Ciater Resort",
            },
            {
              quote:
                "I've worked with Yoga on multiple projects and he consistently exceeds expectations. His attention to detail is outstanding.",
              name: "Elmar",
              role: "Founder Jelajah Subang",
            },
            {
              quote:
                "Yoga is not only a talented person but also a great team player. He communicates effectively and delivers on time.",
              name: "Dita Eka Wahyudin",
              role: "Enterpreneur & Trader",
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
              title: "Certified Javascript Developer",
              organization: "Programmer Zaman Now",
              // icon: "https://via.placeholder.com/64x64",
            },
            {
              title: "Certified Python Developer",
              organization: "Sololearn",
              // icon: "https://via.placeholder.com/64x64",
            },
            {
              title: "Certified PHP Developer",
              organization: "Programmer Zaman Now",
              // icon: "https://via.placeholder.com/64x64",
            },
            {
              title: "Sekolah Pasar Modal",
              organization: "BEI (Bursa Efek Indonesia)",
              // icon: "https://via.placeholder.com/64x64",
            },
          ].map((award) => (
            <div key={award.title} className="award-row">
              {/* <img src={award.icon} alt="" /> */}
              <div>
                <h3 className="work-title !mb-1">{award.title}</h3>
                <p className="work-desc">{award.organization}</p>
                {/* <p className="work-tag !mb-0 !mt-1">{award.year}</p> */}
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
            <a href="https://wa.me/6281802090774" className="social-link">
              <i className="fab fa-whatsapp text-[15px]" aria-hidden /> Kirim
              pesan WhatsApp
            </a>
            <a href="mailto:yoga.qf@gmail.com" className="social-link">
              ✉ yoga.qf@gmail.com
            </a>
            {/* <a
              href="https://www.linkedin.com/in/yogaqf"
              className="social-link"
            >
              ↗ LinkedIn
            </a> */}
            <a href="https://github.com/yogaqf" className="social-link">
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
              placeholder="your@email.com"
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
        <span className="footer-copy">
          © {new Date().getFullYear()} Yoga Qodar Falah. All rights reserved.
        </span>
        <span className="available-dot">
          <span className="dot" />
          Available for freelance work
        </span>
      </div>
    </div>
  );
};

export default App;
