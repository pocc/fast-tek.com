interface Project {
  title: string;
  location: string;
  client: string;
  description: string;
  result: string;
}

interface Category {
  name: string;
  projects: Project[];
}

const introSections = [
  {
    title: "Investigations",
    text: "Soil sampling for chemical releases, sewage spills, and pipeline accidents.",
  },
  {
    title: "Bench Testing",
    text: "Lab-scale feasibility studies before field work.",
  },
  {
    title: "Well Design",
    text: "Using actual sediment, sieves, and grain size analysis.",
  },
];

const categories: Category[] = [
  {
    name: "Subsurface Investigations",
    projects: [
      {
        title: "PCE/TCE Investigation",
        location: "Rohnert Park, CA",
        client: "Engineering consulting firm",
        description:
          "Subsurface investigation of PCE and TCE contamination at a former dry cleaning facility.",
        result: "Defined extent of contamination for remediation planning.",
      },
      {
        title: "Phase II Environmental Site Assessment",
        location: "Mountain View, CA",
        client: "Property development firm",
        description:
          "Phase II ESA for property transaction due diligence including soil and groundwater sampling.",
        result: "Assessment completed on schedule, supporting property transfer.",
      },
      {
        title: "Gas Field Investigation",
        location: "Sacramento, CA",
        client: "Engineering firm",
        description: "Investigation of former gas field with soil and groundwater sampling program.",
        result: "Comprehensive data set for regulatory reporting.",
      },
      {
        title: "Bulk Storage Facility Assessment",
        location: "San Diego, CA",
        client: "Facility owner",
        description: "Environmental assessment of bulk petroleum storage facility.",
        result: "Identified and delineated areas of concern.",
      },
      {
        title: "Well Installation Program",
        location: "Stockton, CA",
        client: "Engineering consulting firm",
        description: "Monitoring well installation for long-term groundwater assessment.",
        result: "Wells installed and sampling program initiated.",
      },
      {
        title: "DPT Investigation",
        location: "Berkeley, CA",
        client: "Property owner",
        description:
          "Direct push technology investigation for subsurface characterization.",
        result: "Site closure obtained.",
      },
      {
        title: "Lease Transfer Assessment",
        location: "Santa Rosa, CA",
        client: "Commercial property owner",
        description: "Environmental assessment to support commercial lease transfer.",
        result: "Clean report issued, lease transfer completed.",
      },
    ],
  },
  {
    name: "Drilling & Soil Vapor Projects",
    projects: [
      {
        title: "Angle Drilling at Resins Plant",
        location: "California",
        client: "Industrial facility",
        description: "Angle drilling program at active resins manufacturing plant.",
        result: "Subsurface data collected without disrupting operations.",
      },
      {
        title: "Soil Vapor Survey",
        location: "SFO Airport, CA",
        client: "Airport authority contractor",
        description:
          "Comprehensive soil vapor survey at San Francisco International Airport.",
        result: "Vapor intrusion pathways characterized.",
      },
      {
        title: "Lagoon Drilling",
        location: "Bolinas, CA",
        client: "Environmental consultant",
        description: "Drilling program near Bolinas Lagoon for sediment characterization.",
        result: "Sediment data collected for habitat assessment.",
      },
      {
        title: "Gas Station Investigation",
        location: "Manteca, CA",
        client: "Property owner",
        description: "Underground storage tank investigation at former gas station.",
        result: "Defined plume extent for remediation design.",
      },
      {
        title: "Solvent Investigation",
        location: "Rohnert Park, CA",
        client: "Engineering firm",
        description: "Multi-phase investigation of solvent contamination.",
        result: "Complete site characterization achieved.",
      },
      {
        title: "400-Sample Drilling Program",
        location: "Vallejo, CA",
        client: "Environmental consultant",
        description: "Large-scale drilling program collecting 400+ soil samples.",
        result: "Comprehensive data set for site-wide remediation.",
      },
      {
        title: "Wetlands Investigation",
        location: "Point Pinole, CA",
        client: "Regional park district",
        description: "Environmental drilling in sensitive wetlands habitat.",
        result: "Data collected with minimal ecological impact.",
      },
      {
        title: "Limited Access Drilling",
        location: "Burlingame, CA",
        client: "Property owner",
        description: "Drilling program in limited-access urban setting.",
        result: "Assessment completed within space constraints.",
      },
    ],
  },
  {
    name: "Quarterly Monitoring Well Sampling",
    projects: [
      {
        title: "National Laboratory Monitoring",
        location: "Livermore, CA",
        client: "Lawrence Livermore National Laboratory contractor",
        description: "Quarterly sampling of 23 monitoring wells.",
        result: "Consistent data delivery supporting regulatory compliance.",
      },
      {
        title: "Military Facility Monitoring",
        location: "San Diego, CA",
        client: "Department of Defense contractor",
        description: "Quarterly sampling of 7 monitoring wells at military installation.",
        result: "Long-term monitoring program maintained.",
      },
      {
        title: "Commercial Property Monitoring",
        location: "Burlingame, CA",
        client: "Property management firm",
        description: "Quarterly sampling of 10 monitoring wells.",
        result: "Trending data supports case closure progress.",
      },
      {
        title: "Industrial Site Monitoring",
        location: "Oakland, CA",
        client: "Industrial facility",
        description: "Quarterly sampling of 3 monitoring wells.",
        result: "Site closure obtained.",
      },
      {
        title: "EPA ARCSWEST Monitoring",
        location: "Davis, CA",
        client: "EPA Region 9",
        description: "Quarterly sampling of 39 monitoring wells for EPA ARCSWEST program.",
        result: "Comprehensive regulatory data package delivered.",
      },
    ],
  },
];

const images = [
  { src: "/images/project-image-1.jpg", alt: "Subsurface investigation field work" },
  { src: "/images/project-image-2.jpg", alt: "Drilling equipment on site" },
  { src: "/images/project-image-3.jpg", alt: "Soil sampling in progress" },
  { src: "/images/project-image-4.jpg", alt: "Monitoring well installation" },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>
      <p className="mb-10 text-gray-600">
        Selected case studies from our 30+ years of environmental and engineering projects.
      </p>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="h-32 w-full rounded-lg object-cover"
          />
        ))}
      </div>

      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        {introSections.map((s) => (
          <div key={s.title} className="rounded-lg bg-gray-50 p-4">
            <h2 className="mb-1 font-bold">{s.title}</h2>
            <p className="text-sm text-gray-600">{s.text}</p>
          </div>
        ))}
      </div>

      {categories.map((cat) => (
        <section key={cat.name} className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">{cat.name}</h2>
          <div className="space-y-4">
            {cat.projects.map((project) => (
              <div key={project.title + project.location} className="rounded-lg border p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <span className="flex-shrink-0 text-sm text-gray-500">{project.location}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                <p className="mt-2 text-sm">
                  <span className="font-medium text-green-700">Result:</span>{" "}
                  <span className="text-gray-600">{project.result}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
