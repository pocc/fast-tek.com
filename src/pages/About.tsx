const teamMembers = [
  {
    name: "Olivia P. Jacobs",
    title: "Co-founder, President/CEO, Senior Project Manager, Principal Environmental Specialist",
    bio: "Bachelor's from Saint John's College (Annapolis), Master's from Texas Women's University (Houston). Thomas J. Watson Fellow. CDPH-certified Lead inspector assessor. Majority owner since 1990.",
  },
  {
    name: "James A. Jacobs, Ph.D., P.G., C.H.G., C.P.G., C.Pet.G., FSG, ToR QISP/QSP/QSD",
    title: "Principal Scientist and Hydrogeologist",
    bio: "40+ years experience. Four-time Fulbright Senior Specialist. 100+ technical articles, 4 technical books. Degrees from Franklin & Marshall College, University of Texas at Austin, Ph.D. from UC Santa Cruz. Publicly elected board member of local community services district (2003–2026).",
  },
  {
    name: "Rob Nelson, P.G., C.E.G.",
    title: "Senior Geologist and Project Manager",
    bio: "Certified Engineering Geologist. 20+ years experience. Degree from Humboldt State University.",
  },
  {
    name: "Kevin Pope",
    title: "Senior Field Manager",
    bio: "20+ years designing and implementing field services. Expert in direct push sampling. Associate's from Lassen College, Bachelor's from Fresno State.",
  },
  {
    name: "Arron Wilder",
    title: "Senior Soil Scientist and Geologist",
    bio: "Approximately 20 years experience. Bachelor's in soil science from Humboldt State University.",
  },
  {
    name: "Hermy Tam",
    title: "Administrative Assistant",
    bio: "Clearwater Group support staff.",
  },
];

const serviceCategories = [
  "Staffing of Geologists, Engineers and Technicians",
  "Soil and Water Sampling and Monitoring",
  "Steep Hillside Erosion Control Design",
  "Water Recycling and Stormwater Sampling",
  "Industrial/Oil/Mine Cleanup",
  "Excavation/Surface Restoration",
  "Soil Recycling using Cold Mix Asphalt (CMA)",
  "Water/Soil Remediation (Oxidation, Bioremediation, Geochemical Stabilization)",
  "Surface Restoration using Advanced Natural Staining",
  "Third-Party Health and Safety Inspection",
  "On-Site Construction Management",
  "Noise and Odor Assessment",
  "Sustainable Garden Design and Rainwater Collection",
  "Waterproofing / Mold / Fungi Mitigation",
  "VOC Exposure Pathway Evaluation (TCE, PCE, benzene)",
  "Sewer Air Vapor Intrusion Conceptual Models",
  "Safety Plans, Dust Control, Valley Fever Fungi Modeling",
  "Erosion Control and Dust Control Plans",
  "Maher Ordinance Sampling (San Francisco)",
  "Remediation Feasibility Studies",
];

const benefits = [
  "A free no-obligation discussion about your project",
  "Rapid response on your environmental or engineering project",
  "Professional project management",
  "Business insurance (general, professional E&O, workers' comp, vehicle)",
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">About FAST-TEK</h1>

      <section className="mb-12">
        <img
          src="/images/team.webp"
          alt="FAST-TEK team"
          className="mb-6 w-full rounded-lg"
        />
        <h2 className="mb-3 text-2xl font-bold">Experience</h2>
        <p className="leading-relaxed text-gray-700">
          Founded in 1990, FAST-TEK Engineering Support Services (a division of The Auger Group, Inc.)
          has helped hundreds of land owners and engineering firms obtain case closure for contamination
          challenges. Our team is located in Point Richmond, California, with projects completed in
          California, Oregon, Washington, Arizona, Nevada, Montana, Florida, Pennsylvania, Canada, and
          Argentina.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold">Benefits of Working with FAST-TEK</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold">Types of Services Offered</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {serviceCategories.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-dark" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Technical Team</h2>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-lg border p-6">
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm font-medium text-brand-dark">{member.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
