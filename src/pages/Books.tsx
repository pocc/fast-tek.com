const books = [
  {
    title: "Environmental Considerations Associated with Hydraulic Fracturing Operations",
    authors: "James A. Jacobs and Stephen M. Testa",
    publisher: "Wiley",
    pages: 576,
    year: 2019,
    image: `${import.meta.env.BASE_URL}images/Slide1.JPG`,
    amazonUrl:
      "https://www.amazon.com/Environmental-Considerations-Associated-Fracturing-Operations/dp/1119336090/",
    description:
      "Comprehensive coverage of the environmental considerations of hydraulic fracturing (fracking) operations.",
  },
  {
    title: "Oil Spills and Gas Leaks: Environmental Response, Prevention, and Cost Recovery",
    authors: "Stephen M. Testa and James A. Jacobs",
    publisher: "McGraw-Hill",
    pages: 578,
    year: 2014,
    image: `${import.meta.env.BASE_URL}images/Slide2-0002.JPG`,
    amazonUrl: "https://www.amazon.com/s?k=jacobs+testa+oil+spills",
    description:
      "Covers environmental response, prevention, and cost recovery for oil spills and gas leaks.",
  },
  {
    title: "Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils",
    authors: "James A. Jacobs, Jay H. Lehr, and Stephen M. Testa",
    publisher: "Wiley",
    pages: 520,
    year: 2014,
    image: `${import.meta.env.BASE_URL}images/Slide3-0002.JPG`,
    amazonUrl: "https://www.amazon.com/s?k=jacobs+testa+acid+mine+drainage",
    description:
      "Jacobs co-authored 18 of 36 chapters. Part I: Causes of Acid Mine Drainage focuses on biogeochemistry. Part II–III cover assessment and case studies. Part IV: Remediation examines passive and active cleanup methods.",
  },
  {
    title: "Chromium(VI) Handbook",
    authors: "Jacques Guertin, James A. Jacobs, and Cynthia P. Avakian",
    publisher: "CRC Press",
    pages: 800,
    year: 2004,
    image: `${import.meta.env.BASE_URL}images/Slide4-0001.JPG`,
    amazonUrl: "https://www.amazon.com/s?k=jacobs+chromium+book",
    description:
      "Comprehensive resource on hexavalent chromium. Features chapters on chromium sources, geology and geochemistry, toxicity, treatment, remediation, legal issues, and recommendations.",
  },
  {
    title: "MTBE: Effects on Soil and Groundwater Resources",
    authors: "James A. Jacobs, Jacques Guertin, and Christy Herron",
    publisher: "CRC Press",
    pages: 264,
    year: 2001,
    image: `${import.meta.env.BASE_URL}images/Slide5-0001.JPG`,
    amazonUrl: "https://www.amazon.com/s?k=jacobs+mtbe+book",
    description:
      "Covers the effects of methyl tertiary-butyl ether (MTBE) on soil and groundwater resources.",
  },
];

export default function Books() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Books</h1>

      <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          src={`${import.meta.env.BASE_URL}images/Jim_Jacobs_headshot_230818.png`}
          alt="James A. Jacobs, Ph.D."
          className="h-48 w-40 flex-shrink-0 rounded-lg object-cover"
        />
        <div>
          <h2 className="mb-2 text-xl font-bold">James A. Jacobs, Ph.D.</h2>
          <p className="leading-relaxed text-gray-700">
            Research focuses on exposure pathway analysis, sensitive receptors, contaminants in the
            environment, assessment and remediation of volatile toxins, and sewer/plumbing vapor
            intrusion into indoor air. Author of 100+ technical articles and co-author of 4 technical
            books on environmental topics.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {books.map((book) => (
          <div key={book.title} className="flex flex-col gap-4 rounded-lg border p-6 sm:flex-row sm:gap-6">
            <img
              src={book.image}
              alt={book.title}
              className="h-40 w-full rounded object-cover sm:h-32 sm:w-64 sm:flex-shrink-0"
            />
            <div>
              <h3 className="font-bold">{book.title}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {book.authors} &middot; {book.publisher}, {book.year} &middot; {book.pages} pages
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{book.description}</p>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-brand-dark hover:underline"
              >
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
