const services = [
  {
    title: "Litigation Services",
    description:
      "Investigation and analysis for hydrocarbon and solvent spills, erosion, and flooding. Settlement conferences and testimony in municipal, state, and Federal courts.",
    clients: "Various attorneys and law firms",
  },
  {
    title: "Remediation Feasibility Studies",
    description:
      "Bench scale and pilot testing for bioremediation, chemical oxidation, and metals stabilization. Chemical oxidizers include permanganates, peroxides, Fenton's Reagent, ozone, and H2O2. Metals stabilization for arsenic, chromium, lead, nickel, and zinc using calcium polysulfide.",
    clients: "Tetra Tech EMI, A&E Transportation, PES Environmental",
  },
  {
    title: "Sea Level Rise Flood Assessment & Weather Stations",
    description:
      "Real-time flood sensors and groundwater sensors. Portable digital weather station providing temperature, rainfall, barometric pressure, humidity, wind speed, evapotranspiration, and optional solar radiation monitoring.",
    clients: "Local community services districts",
  },
  {
    title: "Water Reuse: Rainwater Collection, Garden Design, Stormwater",
    description:
      "Sustainable garden design, composting, and drip irrigation systems. QSD/QSP stormwater design services. Water recycling and rainwater harvesting systems.",
    clients: "Private residences, commercial properties",
  },
  {
    title: "Stormwater Pollution Prevention & Monitoring",
    description:
      "Hydrocarbon filtration units for storm basins. Source assessment, site mapping, spill evaluation, and non-stormwater discharge identification.",
    clients: "Industrial facilities, construction sites",
  },
  {
    title: "Steep-Slope Erosion Control",
    description:
      "Drainage evaluation, vegetation mapping, detention basins, and roughness coefficient work. Specialized equipment including safety harnesses and lifting equipment for steep terrain.",
    clients: "Private land owners, municipalities",
  },
  {
    title: "Odor Assessment, Moisture Mitigation & Sewer Air Intrusion",
    description:
      "Equipment includes Nasal Ranger, passive sorbent samplers, SUMMA gas samplers, and GC/MS analysis. Treatment methods include oxygen infusion, ozone treatment, and oxidizers. Vapor seal assessment for wax-rings, P-traps, and cracked pipes.",
    clients: "Wineries, restaurants, private residences",
  },
  {
    title: "Noise Assessment & Mitigation",
    description:
      "Noise level metering, source mapping, and mitigation through insulation and barriers.",
    clients: "Commercial and residential properties",
  },
  {
    title: "Data Management Using GPS/GIS",
    description:
      "Mapping-grade GPS with sub-meter accuracy. Arc-View GIS for spatial data management and analysis.",
    clients: "Engineering and environmental consulting firms",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold">Our Services</h1>
      <p className="mb-10 text-gray-600">
        FAST-TEK provides a comprehensive range of environmental and engineering services. Below are
        our core capabilities.
      </p>

      <div className="space-y-8">
        {services.map((service) => (
          <section key={service.title} className="rounded-lg border p-6">
            <h2 className="mb-2 text-xl font-bold">{service.title}</h2>
            <p className="leading-relaxed text-gray-700">{service.description}</p>
            <p className="mt-3 text-sm text-gray-500">
              <span className="font-medium">Clients include:</span> {service.clients}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
