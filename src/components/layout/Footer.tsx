export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 font-bold">FAST-TEK Engineering Support Services</h3>
            <p className="text-sm text-white/70">Providing Environmental Contracting Since 1990</p>
            <address className="mt-3 text-sm not-italic text-white/70">
              247A Tewksbury Avenue<br />
              Point Richmond, CA 94801
            </address>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Contact</h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>
                Tel: <a href="tel:5103079943" className="hover:text-white">(510) 307-9943</a>
              </li>
              <li>
                Cell: <a href="tel:5105901099" className="hover:text-white">(510) 590-1099</a>
              </li>
              <li>
                <a href="mailto:geojimj@gmail.com" className="hover:text-white">geojimj@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Hours</h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat: By Appointment</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} FAST-TEK Engineering Support Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
