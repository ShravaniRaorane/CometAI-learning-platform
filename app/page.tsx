const courses = [
  { mark: "N", title: "Next.js for Production", description: "Build scalable, high-performance web applications with Next.js.", level: "Intermediate", duration: "18h 24m", modules: "12 modules", className: "next-mark" },
  { mark: "▦", title: "Docker Essentials", description: "Containerize applications and streamline your development workflow.", level: "Beginner", duration: "10h 12m", modules: "8 modules", className: "docker-mark" },
  { mark: "TS", title: "TypeScript Deep Dive", description: "Go beyond the basics and write safer, more expressive code.", level: "Intermediate", duration: "14h 36m", modules: "10 modules", className: "ts-mark" },
];

function CometLogo() {
  return <div className="logo" aria-label="CometAI"><span className="logo-comet" aria-hidden="true">◒</span><span>Comet<span>AI</span></span></div>;
}

export default function Home() {
  return (
    <main className="home-page">
      <div className="space-layer" aria-hidden="true" />
      <div className="home-frame">
        <header className="site-header">
          <CometLogo />
          <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#courses">Courses</a><a href="#learning">My Learning</a></nav>
          <div className="header-actions"><button className="icon-button notification" aria-label="Notifications">♧<span>1</span></button><button className="profile" aria-label="Open profile">A</button></div>
        </header>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-comet" aria-hidden="true" /><div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
          <p className="hero-badge">INTELLIGENT LEARNING</p><h1 id="hero-title">Search your learning<br />in plain <span>English.</span></h1>
          <p className="hero-copy">CometAI understands what you want to learn<br />and finds the exact lessons across all your courses.</p>
          <a className="primary-cta" href="#courses">Explore Courses <span>→</span></a>
          <label className="search-box"><span className="search-icon" aria-hidden="true">⌕</span><input type="search" placeholder="Ask anything about your learning..." aria-label="Search your learning" /><kbd>⌘ K</kbd></label>
        </section>
        <section className="courses-section" id="courses" aria-labelledby="courses-title">
          <div className="section-heading"><h2 id="courses-title">All Courses</h2><a href="#courses">View all courses <span>→</span></a></div>
          <div className="course-grid">{courses.map((course) => <article className="course-card" key={course.title}><div className={`course-mark ${course.className}`}>{course.mark}</div><h3>{course.title}</h3><p>{course.description}</p><div className="course-meta"><span>▥ {course.level}</span><span>◷ {course.duration}</span><span>▣ {course.modules}</span></div></article>)}</div>
        </section>
        <footer className="announcement"><div className="announcement-copy"><span>☆</span><p>New courses and lessons added every week.</p></div><div className="planet" aria-hidden="true" /></footer>
      </div>
    </main>
  );
}
