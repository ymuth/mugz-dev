import Image from "next/image";
import Link from "next/link";
import PerformancePreview from "@public/images/apex-performance.png";
import DetailingPreview from "@public/images/detailing-corp.png";
import FadeIn from "../ui/FadeIn";
import UpRightArrowIcon from "../ui/UpRightArrowIcon";

function PerformanceVisual() {
  return (
    <div className="work-visual bg-zinc-950">
      <Image
        src={PerformancePreview}
        alt="Automotive performance website concept preview"
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover object-top"
      />
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
    <div className="work-visual bg-zinc-950">
      <Image
        src={DetailingPreview}
        alt="Detailing Corp automotive detailing website concept preview"
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover object-left"
      />
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
    href: "https://automotive.mugz.dev",
  },
  {
    label: "Internal system",
    title: "Vehicle Operations",
    description: "A focused management interface for tracking vehicles, work status and day-to-day operations.",
    meta: "Dashboard · Workflow design · Data management",
    visual: <DashboardVisual />,
  },
  {
    label: "Full Stack Build",
    title: "Automotive Detailing",
    description: "A premium business website concept designed to make specialist services feel credible and considered.",
    meta: "Art direction · Business website · Enquiries",
    visual: <DetailingVisual />,
    href: "https://detailing.mugz.dev",
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
                  {"href" in project && (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link mt-7 inline-flex items-center gap-2"
                    >
                      View live demo
                      <UpRightArrowIcon className="size-4 shrink-0" />
                    </Link>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
