const colors = [
  ["Comet Blue", "#6D8BFF", "blue"],
  ["Comet Purple", "#8B5CFF", "purple"],
  ["Comet Pink", "#FF6EC7", "pink"],
  ["Neon Cyan", "#00E6FF", "cyan"],
  ["Light Star", "#F5F7FF", "white"],
];

const neutrals = ["#03050C", "#12162D", "#1E2235", "#283147", "#3A415C", "#687280", "#A1A8BC", "#F5F7FF"];
const iconSet = ["✦", "⌕", "◯", "▣", "♡", "▥", "◉", "♙", "›"];
const spacing = [4, 8, 12, 16, 24, 32, 40, 48, 64];

function Section({ number, title, children, className = "" }: { number: string; title: string; children: React.ReactNode; className?: string }) {
  return <section className={`ds-section ${className}`}><div className="section-title"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

function Swatch({ name, value, color }: { name: string; value: string; color?: string }) {
  return <div className="swatch-item"><div className={`swatch ${color ?? "neutral"}`} style={!color ? { backgroundColor: value } : undefined} /><strong>{name}</strong><small>{value}</small></div>;
}

function Button({ variant, children, disabled = false }: { variant: string; children: React.ReactNode; disabled?: boolean }) {
  return <button className={`sample-button ${variant}`} disabled={disabled}>{children}</button>;
}

export default function Home() {
  return (
    <main className="design-system">
      <div className="starfield" aria-hidden="true" />
      <div className="sheet-grid">
        <header className="intro panel">
          <div className="comet-mark"><span>◒</span><b>Comet<span>AI</span></b></div>
          <p className="eyebrow">Design System</p>
          <p className="intro-copy">A unified design language for CometAI building intelligent experiences that are fast, safe, seamless and out of this world.</p>
          <p className="meta">VERSION 1.0 <i /> AUG 2026</p>
        </header>

        <Section number="01" title="Colors" className="colors-section panel">
          <p className="label">Primary</p><div className="swatches primary-swatches">{colors.map(([name, value, color]) => <Swatch key={name} name={name} value={value} color={color} />)}</div>
          <p className="label neutral-label">Neutral</p><div className="swatches neutral-swatches">{neutrals.map((value, index) => <Swatch key={value} name={["Space Black", "Deep Space", "Slate", "Moon Gray", "Cloud", "Mist", "Neutral 50", "White"][index]} value={value} />)}</div>
        </Section>

        <Section number="02" title="Typography" className="typography panel">
          <div className="type-spec"><span className="type-sample grotesk">Ag</span><div><strong>Space Grotesk</strong><small>Bold <i /> Modern <i /> Friendly</small></div></div>
          <div className="type-spec"><span className="type-sample inter">Ag</span><div><strong>Inter</strong><small>Clean <i /> Readable <i /> Versatile</small></div></div>
        </Section>

        <Section number="03" title="Type Scale" className="type-scale panel">
          <div className="type-table"><div className="table-head"><span>Style</span><span>Font</span><span>Size / Line Height</span><span>Weight</span><span>Use</span></div>{[["Display 1","Space Grotesk","48 / 56","Bold","Page titles"],["Display 2","Space Grotesk","36 / 44","Bold","Section titles"],["Heading 1","Space Grotesk","28 / 36","Semi Bold","Card titles"],["Heading 2","Space Grotesk","22 / 30","Semi Bold","Sub section"],["Heading 3","Inter","18 / 26","Medium","Small titles"],["Body Large","Inter","16 / 24","Regular","Body copy"],["Body","Inter","14 / 20","Regular","Supporting text"],["Small","Inter","12 / 16","Regular","Captions, meta"]].map(row => <div className="table-row" key={row[0]}>{row.map(cell => <span key={cell}>{cell}</span>)}</div>)}</div>
        </Section>

        <Section number="04" title="Spacing System" className="spacing-system panel"><p className="label">Base unit: 4px</p><div className="spacing-list">{spacing.map(value => <div className="space-item" key={value}><div style={{ height: `${Math.max(value / 2, 5)}px`, width: `${Math.max(value / 2, 5)}px` }} /><strong>{value}</strong><small>{value === 4 ? "(0.25rem)" : `(${value / 16}rem)`}</small></div>)}</div></Section>

        <Section number="05" title="Radius & Shadows" className="radius-shadow panel"><p className="label">Radius</p><div className="radius-list">{["4px", "8px", "12px", "16px", "24px", "Full"].map((value, index) => <div key={value}><div className={`radius radius-${index}`} /><small>{value}<br />({index === 5 ? "circle" : ["xs", "sm", "md", "lg", "xl"][index]})</small></div>)}</div><p className="label shadow-label">Shadows</p><div className="shadow-list">{["Sm", "Md", "Lg", "Xl"].map(value => <div key={value}><strong>{value}</strong><small>0 1px 2px #000<br />rgba(11, 12, 26, .16)</small></div>)}</div></Section>

        <Section number="06" title="Icons" className="icons panel"><p className="label">Outline Style</p><div className="icon-row">{iconSet.map(icon => <span key={icon}>{icon}</span>)}</div><p className="label">Filled Style</p><div className="icon-row filled">{iconSet.map(icon => <span key={icon}>{icon}</span>)}</div><p className="label icon-spec-label">Icon Specs</p><ul><li>24x24px grid</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul></Section>

        <Section number="07" title="Buttons" className="buttons panel"><div className="button-grid"><span /><span>Primary</span><span>Secondary</span><span>Tertiary</span><span>Text</span><span>Default</span><Button variant="primary">Get Started</Button><Button variant="secondary">Explore</Button><Button variant="tertiary">View Lesson ↗</Button><Button variant="text">Watch Video ◉</Button><span>Hover</span><Button variant="primary">Get Started</Button><Button variant="secondary">Explore</Button><Button variant="tertiary">View Lesson ↗</Button><Button variant="text pink-text">Watch Video ◉</Button><span>Disabled</span><Button variant="primary" disabled>Get Started</Button><Button variant="secondary" disabled>Explore</Button><Button variant="tertiary" disabled>View Lesson ↗</Button><Button variant="text" disabled>Watch Video ◉</Button></div><div className="button-spec"><p className="label">Button Specs</p><ul><li>Height: 44px (default)</li><li>Padding: 0 16px (sm), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14-16px)</li></ul></div></Section>

        <Section number="08" title="Inputs" className="inputs panel"><label>Search / Text Input</label><div className="input-sample">⌕ <span>Search anything...</span><b>⌘ K</b></div><label>Select</label><select defaultValue="Most Relevant" aria-label="Sort results"><option>Most Relevant</option><option>Newest</option></select><p className="label">Field Specs</p><ul><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #283147</li><li>Padding: 0 16px</li><li>Focus: Border 6D8BFF</li></ul></Section>

        <Section number="09" title="Badges / Tags" className="badges panel"><div className="badge-row"><span>NEW</span><span>AI</span><span>BETA</span></div></Section>
        <Section number="10" title="Status / Indicators" className="status panel"><div className="status-row"><span className="in-progress">◔ In Progress</span><span className="completed">● Completed</span><span className="playing">● Now Playing</span><span className="locked">♙ Locked</span></div></Section>
        <Section number="11" title="Progress Bar" className="progress panel"><div className="progress-track"><div /><span /></div><small>35% complete</small></Section>

        <Section number="12" title="Cards" className="cards panel"><div className="card-grid"><article className="course-card"><div className="card-icon">N</div><strong>Next.js for Production</strong><p>Build scalable, high-performance web applications with Next.js.</p><small>▥ Intermediate &nbsp; ◷ 12h 24m &nbsp; ▣ 12 modules</small></article><article className="lesson-card video"><em>VIDEO</em><strong>Data Fetching in Server Components</strong><p>Learn how to fetch data on the server using async/await and Next.js best practices.</p><small>Lesson 5.1 &nbsp; ◷ 12:45 <b>◉ Watch from 12:45</b></small></article><article className="lesson-card"><em>LESSON</em><strong>Data Fetching & Caching</strong><p>Explore different data fetching methods in Next.js and how to cache and revalidate data.</p><small>Module 5.1 <b>View lesson ↗</b></small></article><article className="resource-card"><span>▤</span><strong>Caching and Revalidation Guide</strong><p>Deep dive into Next.js caching strategies.</p><small>PDF &nbsp;·&nbsp; 1.2 MB <b>↗</b></small></article></div></Section>

        <Section number="13" title="Navigation" className="navigation panel"><nav><div className="nav-logo">◒ Comet<span>AI</span></div><a className="active" href="#courses">Courses</a><a href="#learning">My Learning</a><span className="divider" /><small>Breadcrumbs</small><span>All Courses　›　Next.js for Production　›　Data Fetching & Caching</span><span className="divider" /><small>Pagination</small><div className="pagination"><button>‹</button><button className="current">1</button><button>2</button><button>3</button><span>...</span><button>8</button><button>›</button></div></nav></Section>

        <Section number="14" title="Principles" className="principles panel"><div><b>◉</b><strong>Clarity First</strong><small>Every element should communicate clearly.</small></div><div><b>⊞</b><strong>Consistency</strong><small>Use components and patterns consistently across the platform.</small></div><div><b>◉</b><strong>Focus & Calm</strong><small>Remove noise and help learners focus on what matters.</small></div><div><b>♙</b><strong>Accessible</strong><small>Design with accessibility and inclusivity in mind.</small></div></Section>
      </div>
    </main>
  );
}
