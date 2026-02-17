# Legacy vs. New Site Comparison

Side-by-side comparison of what exists in the legacy GoDaddy site vs. the new React app.

---

## Global Elements

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Header tagline | "Call us for a free, no-obligation discussion of your sampling or remediation project." | None | MISSING |
| Navigation | Home, About, Services, Projects, Contact, Books | Home, About, Services, Projects, Books, Contact | Present (order differs) |
| Footer copyright | "Copyright 2025 FAST-TEK - All Rights Reserved." | Dynamic year + "FAST-TEK Engineering Support Services. All rights reserved." | Present |
| Footer tagline | "Providing Environmental Contracting Since 1990" | None | MISSING |
| Phone numbers | Tel: (510) 232-2728, Cell: (510) 590-1099 | None | MISSING |
| Email | info@fast-tek.com, geojimj@gmail.com | None | MISSING |
| Address | 247A Tewksbury Avenue, Point Richmond, CA 94801 | None | MISSING |
| Business hours | Mon-Fri 9-5, Sat by appointment, Sun closed | None | MISSING |
| og:image meta tag | GoDaddy CDN image | None | MISSING |
| Meta description | Only on Home page | Only on Home page (in index.html) | Partial |
| Social media links | None | None | N/A (legacy had none) |

---

## Home Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Hero image | `fast-tek_home_image.webp` (87KB, rotated 270deg) | None | MISSING |
| Hero heading | "Welcome to FAST-TEK: Soil and Water Sampling, Bench Testing, & Remediation" | "FAST-TEK Engineering Support Services" | Simplified |
| Three content cards with images | Remediation Experience, Project Management, Licenses & Expertise (each with photo) | Single one-liner paragraph | MISSING |
| Card images | 3 base64 JPEGs (home-image-1/2/3.jpg) | None | MISSING |
| Embedded contact form | Name, Email, Send + reCAPTCHA | None (separate Contact page has form) | Excluded (OK) |
| Remediation Experience text | Full paragraph about founding in 1990, services, long-term relationships | None | MISSING |
| Project Management text | Full paragraph about contracting, safety, compliance, staffing | None | MISSING |
| Licenses & Expertise text | Full paragraph about CSLB license #624461, certifications, Small Business cert | None | MISSING |

---

## About Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Team photo | `team.webp` (15KB) | None | MISSING |
| Experience section | Founded 1990, hundreds of clients, case closures | "Company background and team information." (placeholder) | MISSING |
| Benefits of working with FAST-TEK | 4 bullet points | None | MISSING |
| Types of services offered | 20 service categories listed | None | MISSING |
| Technical team section | 6 team member bios (Olivia Jacobs, James Jacobs PhD, Rob Nelson PG, Kevin Pope, Arron Wilder, Hermy Tam) | None | MISSING |
| Team member credentials | Full educational backgrounds, certifications, years of experience | None | MISSING |

---

## Services Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Litigation Services | Full description with court types | One-liner placeholder | MISSING |
| Remediation Feasibility Studies | Bench scale testing, chemical oxidizers, bioremediation, metals stabilization | None | MISSING |
| Sea Level Rise / Weather Stations | Flood sensors, groundwater sensors, weather station specs | None | MISSING |
| Water Reuse | Rainwater collection, garden design, stormwater | None | MISSING |
| Stormwater Pollution Prevention | Hydrocarbon filtration, source assessment | None | MISSING |
| Steep-Slope Erosion Control | Drainage evaluation, vegetation mapping | None | MISSING |
| Odor Assessment / Sewer Air Intrusion | Equipment list (Nasal Ranger, SUMMA), treatment methods | None | MISSING |
| Noise Assessment | Noise level meters, mitigation | None | MISSING |
| Data Management (GPS/GIS) | Mapping-grade GPS, Arc-View GIS | None | MISSING |
| Client references per service | Named clients per service | None | MISSING |

---

## Projects Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Intro sections | Investigations, Bench Testing, Well Design, Weather/Drilling/Safety headers | "Past and current project portfolio." (placeholder) | MISSING |
| 6 project images | project-image-1 through 4, project-stock-1 and 2 | None | MISSING |
| Subsurface Investigations 1 | 4 detailed project case studies | None | MISSING |
| Subsurface Investigations 2 | 4 detailed project case studies | None | MISSING |
| Drilling / Soil Vapor 1 | 4 detailed project case studies | None | MISSING |
| Drilling / Soil Vapor 2 | 4+ detailed project case studies | None | MISSING |
| Quarterly Monitoring | 5 detailed project descriptions with well counts and outcomes | None | MISSING |
| Results/cost savings | Per-project outcomes (e.g. "site closure obtained") | None | MISSING |

---

## Books Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Author headshot | `Jim_Jacobs_headshot_230818.png` (466KB, 10em x 12em) | None | MISSING |
| 5 book cover slides | Slide1-5.JPG (9-12KB each) | None | MISSING |
| Hydraulic Fracturing book | Wiley, 576pp, 2019 + Amazon link | None | MISSING |
| Oil Spills and Gas Leaks book | McGraw-Hill, 578pp, 2014 + Amazon link | None | MISSING |
| Acid Mine Drainage book | Wiley, 520pp, 2014 + Amazon link | None | MISSING |
| Chromium(VI) Handbook | CRC Press, 800pp, 2004 + Amazon link | None | MISSING |
| MTBE book | CRC Press, 264pp, 2001 + Amazon link | None | MISSING |
| Book part descriptions | Part I-IV summaries for Acid Mine Drainage | None | MISSING |
| Research focus statement | Exposure pathway analysis, sensitive receptors, remediation of volatile toxins | None | MISSING |

---

## Contact Page

| Element | Legacy | New (React) | Status |
|---------|--------|-------------|--------|
| Contact form | Name, Email, Send + reCAPTCHA | Name, Email, Message, Send (no reCAPTCHA) | Present (improved — has message field) |
| Email addresses | info@fast-tek.com, geojimj@gmail.com | None displayed | MISSING |
| Physical address | 247A Tewksbury Avenue, Pt. Richmond, CA 94801 | None | MISSING |
| Phone number | (510) 232-2728 | None | MISSING |
| Embedded map | Mapbox/OpenStreetMap with "Get directions" | None | MISSING |
| Business hours | Displayed dynamically | None | MISSING |

---

## Images Inventory

All 17 images have been extracted to `public/images/`:

| File | Size | Source | Used On | Notes |
|------|------|--------|---------|-------|
| `fast-tek_home_image.webp` | 87K | Legacy file | Home hero | Rotated 270deg in legacy CSS |
| `home-image-1.jpg` | 33K | Base64 in HTML | Home cards | Remediation Experience card |
| `home-image-2.jpg` | 47K | Base64 in HTML | Home cards | Project Management card |
| `home-image-3.jpg` | 40K | Base64 in HTML | Home cards | Licenses & Expertise card |
| `team.webp` | 15K | Legacy file | About | Team photo |
| `Jim_Jacobs_headshot_230818.png` | 466K | Legacy file | Books | Author headshot (consider converting to WebP) |
| `Slide1.JPG` | 11K | Legacy cached | Books | Book cover 1 (low-res thumbnail) |
| `Slide2-0002.JPG` | 12K | Legacy cached | Books | Book cover 2 (low-res thumbnail) |
| `Slide3-0002.JPG` | 9.4K | Legacy cached | Books | Book cover 3 (low-res thumbnail) |
| `Slide4-0001.JPG` | 9.5K | Legacy cached | Books | Book cover 4 (low-res thumbnail) |
| `Slide5-0001.JPG` | 9.4K | Legacy cached | Books | Book cover 5 (low-res thumbnail) |
| `project-image-1.jpg` | 16K | Legacy cached | Projects | Project photo 1 (low-res) |
| `project-image-2.jpg` | 24K | Legacy cached | Projects | Project photo 2 (low-res) |
| `project-image-3.jpg` | 20K | Legacy cached | Projects | Project photo 3 (low-res) |
| `project-image-4.jpg` | 5.8K | Legacy cached | Projects | Project photo 4 (low-res) |
| `project-stock-1.jpg` | 24K | Legacy cached | Projects | GoDaddy stock photo |
| `project-stock-2.jpg` | 19K | Legacy cached | Projects | GoDaddy stock photo |

**Note:** Book slides and project images are low-resolution thumbnails (388px wide) cached by monolith. Higher-resolution originals may be available from `img1.wsimg.com` while the GoDaddy account is active.

---

## Intentionally Excluded

| Element | Reason |
|---------|--------|
| GoDaddy template CSS/JS | Replaced by Tailwind CSS + React |
| Inline reCAPTCHA on home page | Home page doesn't need a contact form; Contact page has one |
| GoDaddy polyfill scripts | Modern browsers don't need them |
| Yellowtail / Lora fonts | Design decision — new site uses system/Tailwind default fonts |
| "More" dropdown in nav | All links fit in the main nav bar |
| Duplicate responsive inline markup | GoDaddy rendered multiple viewport variants inline; React handles responsive with CSS |
| GoDaddy CDN og:image | Will be replaced with self-hosted image once deployment works |
| Mapbox/OpenStreetMap embed | Can be re-added later if needed; Google Maps or static map is also an option |
| Stock images (project-stock-1/2) | GoDaddy stock photos likely not licensed for use outside GoDaddy |
