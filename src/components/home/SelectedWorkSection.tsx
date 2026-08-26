import FadeIn from "../ui/FadeIn";

function PerformanceVisual() {
  return (
    <div className="work-visual performance-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar"><i /><i /><i /><span>PERFORMANCE / REFINED</span></div>
        <div className="performance-content">
          <span className="performance-kicker">Built beyond standard.</span>
          <strong>V<span>///</span>X</strong>
          <div className="performance-line" />
          <small>ENGINEERING · CALIBRATION · DETAIL</small>
        </div>
      </div>
    </div>
  );
}

function DashboardVisual() {
  const vehicles = ["A17 XPR", "WK22 VLM", "MX71 RDO"];
  return (
    <div className="work-visual dashboard-visual" aria-hidden="true">
      <div className="dashboard-shell">
        <div className="dashboard-side"><b>M</b><i /><i /><i /><i /></div>
        <div className="dashboard-main">
          <div className="dashboard-top"><span>Vehicle overview</span><em>Wednesday, 26 Aug</em></div>
          <div className="dashboard-stats"><span><small>On site</small>18</span><span><small>In progress</small>07</span><span><small>Ready</small>04</span></div>
          <div className="dashboard-list">
            {vehicles.map((vehicle, index) => <span key={vehicle}><b>{vehicle}</b><i>{index === 2 ? "Ready" : "In progress"}</i></span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailingVisual() {
  return (
    <div className="work-visual detailing-visual" aria-hidden="true">
      <div className="detail-word">FORM</div>
      <div className="detail-silhouette"><span /><i /><i /></div>
      <div className="detail-caption"><span>Automotive care</span><b>Precision in every finish.</b></div>
    </div>
  );
}

const projects = [
  {
    label: "Concept",
    title: "Automotive Performance",
    description: "A bold, conversion-focused website direction for a specialist automotive performance brand.",
    meta: "Brand direction · Responsive web design",
    visual: <PerformanceVisual />,
  },
  {
    label: "Internal system",
    title: "Vehicle Operations",
    description: "A focused management interface for tracking vehicles, work status and day-to-day operations.",
    meta: "Dashboard · Workflow design · Data management",
    visual: <DashboardVisual />,
  },
  {
    label: "Practice project",
    title: "Automotive Detailing",
    description: "A premium business website concept designed to make specialist services feel credible and considered.",
    meta: "Art direction · Business website · Enquiries",
    visual: <DetailingVisual />,
  },
] as const;

export default function SelectedWorkSection() {
  return (
    <section className="bg-[#e8e5df] text-zinc-950">
      <div className="site-shell section-space">
        <header className="grid gap-8 border-b border-zinc-400/70 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="eyebrow text-purple-700">Selected work</p>
          <div>
            <h2 className="display-heading section-heading max-w-3xl">Proof through the work.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">A selection of website concepts and software work that shows the range MUGZ can bring to a business.</p>
          </div>
        </header>

        <div className="mt-12 space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <FadeIn key={project.title} y={30}>
              <article className={`work-project grid gap-7 lg:grid-cols-12 lg:items-end ${index === 1 ? "work-project-reverse" : ""}`}>
                <div className={`lg:col-span-8 ${index === 1 ? "lg:col-start-5" : ""}`}>{project.visual}</div>
                <div className={`border-t border-zinc-400 pt-6 lg:col-span-4 ${index === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="eyebrow text-purple-700">{project.label}</p>
                  <h3 className="display-heading mt-4 text-3xl tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 leading-7 text-zinc-600">{project.description}</p>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{project.meta}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
