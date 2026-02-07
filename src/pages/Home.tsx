import { Link } from "react-router-dom";

const cards = [
  {
    image: `${import.meta.env.BASE_URL}images/home-image-1.jpg`,
    title: "Remediation Experience",
    text: "Since 1990, The Auger Group, Inc. dba FAST-TEK Engineering Support Services has provided environmental and engineering remediation of contaminated soils and groundwater, waterproofing, erosion control, and site restoration to leading consultants and land owners. Our focus has been project-specific and we have developed long-term relationships with a variety of project owners over the years.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/home-image-2.jpg`,
    title: "Project Management",
    text: "Contracting small and large assessment and remediation projects for engineering firms has been our specialty. Our project managers are focused on safety and compliance, directed by in-house Professional Geologists and environmental project managers. FAST-TEK provides professional staff for contracted projects and trained equipment operators.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/home-image-3.jpg`,
    title: "Licenses & Expertise",
    text: "The Auger Group, Inc, dba FAST-TEK Engineering Support Services is licensed by the California Contractor State License Board (CSLB license #624461) for engineering contracting (A), building (B), water well drilling (C-57), hazardous material removal (HAZ), asbestos abatement (ASB) and home improvement contracting (HIC). The Auger Group, Inc., is certified as a Small Business (SB) Supplier #1467 with the State of California, Department of General Services (DGS).",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-brand-dark py-20 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/fast-tek_home_image.webp)` }}
        />
        <div className="relative mx-auto max-w-4xl px-4">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to FAST-TEK: Soil and Water Sampling, Bench Testing, &amp; Remediation
          </h1>
          <p className="text-lg text-white/80">
            Soil and water sampling, feasibility testing, site remediation, erosion control and dust
            control.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded bg-white px-6 py-3 font-medium text-brand-dark hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-lg border">
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-3 text-xl font-bold">{card.title}</h2>
                <p className="text-sm leading-relaxed text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
