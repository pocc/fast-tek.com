# Image Migration

## Status: Extracted

All 17 images have been extracted from the legacy monolith HTML files and copied to `public/images/`. They are not yet referenced by any React components.

## Extracted Images

### Home Page (4 images)

| File | Size | Usage |
|------|------|-------|
| `fast-tek_home_image.webp` | 87K | Hero background (legacy CSS: `transform: rotate(270deg)`) |
| `home-image-1.jpg` | 33K | "Remediation Experience" content card thumbnail |
| `home-image-2.jpg` | 47K | "Project Management" content card thumbnail |
| `home-image-3.jpg` | 40K | "Licenses & Expertise" content card thumbnail |

### About Page (1 image)

| File | Size | Usage |
|------|------|-------|
| `team.webp` | 15K | Team photo |

### Books Page (6 images)

| File | Size | Usage |
|------|------|-------|
| `Jim_Jacobs_headshot_230818.png` | 466K | Author headshot (legacy CSS: `width:10em; height:12em`). Consider converting to WebP. |
| `Slide1.JPG` | 11K | Book cover slide 1 (low-res 388px thumbnail) |
| `Slide2-0002.JPG` | 12K | Book cover slide 2 (low-res thumbnail) |
| `Slide3-0002.JPG` | 9.4K | Book cover slide 3 (low-res thumbnail) |
| `Slide4-0001.JPG` | 9.5K | Book cover slide 4 (low-res thumbnail) |
| `Slide5-0001.JPG` | 9.4K | Book cover slide 5 (low-res thumbnail) |

### Projects Page (6 images)

| File | Size | Usage |
|------|------|-------|
| `project-image-1.jpg` | 16K | Project photo (low-res 388px thumbnail) |
| `project-image-2.jpg` | 24K | Project photo (low-res thumbnail) |
| `project-image-3.jpg` | 20K | Project photo (low-res thumbnail) |
| `project-image-4.jpg` | 5.8K | Project photo (low-res thumbnail) |
| `project-stock-1.jpg` | 24K | GoDaddy stock photo — may not be licensed for reuse |
| `project-stock-2.jpg` | 19K | GoDaddy stock photo — may not be licensed for reuse |

### Not Yet Downloaded

The og:image used across all legacy pages for social sharing is hosted on GoDaddy CDN:
```
https://img1.wsimg.com/isteam/ip/a4215523-7ab5-4d47-8fcc-837feb6ea49e/9859f315ac20df119d08219b73530fdf.JPG
```
Download it before the GoDaddy account is deactivated:
```bash
curl -L -o public/images/og-image.jpg "https://img1.wsimg.com/isteam/ip/a4215523-7ab5-4d47-8fcc-837feb6ea49e/9859f315ac20df119d08219b73530fdf.JPG"
```

Higher-resolution book slides and project images may also be available from `img1.wsimg.com` while the GoDaddy account is active.

## Usage in React Components

Since the app is served under `/demo/`, use Vite's `base`-relative paths in `src` attributes:

```tsx
// Vite resolves import paths to the correct /demo/images/... URL
<img src="/images/team.webp" alt="FAST-TEK team" />
```

This works because Vite's `base: "/demo/"` rewrites asset paths automatically at build time when using the `public/` directory pattern.
