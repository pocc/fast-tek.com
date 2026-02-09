import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          {status === "sent" ? (
            <p className="rounded bg-green-50 p-4 text-green-800">
              Thank you! We will be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="rounded border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={5}
                required
                className="rounded border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded bg-brand-dark px-6 py-2 font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-2 font-bold">Address</h2>
            <address className="not-italic text-gray-700">
              FAST-TEK Engineering Support Services<br />
              247A Tewksbury Avenue<br />
              Point Richmond, CA 94801
            </address>
          </div>

          <div>
            <h2 className="mb-2 font-bold">Phone</h2>
            <p className="text-gray-700">
              Tel: <a href="tel:5102322728" className="text-brand-dark hover:underline">(510) 232-2728</a>
            </p>
            <p className="text-gray-700">
              Fax: (510) 232-2823
            </p>
            <p className="text-gray-700">
              Cell: <a href="tel:5105901099" className="text-brand-dark hover:underline">(510) 590-1099</a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-bold">Email</h2>
            <p>
              <a href="mailto:info@fast-tek.com" className="text-brand-dark hover:underline">info@fast-tek.com</a>
            </p>
            <p>
              <a href="mailto:geojimj@gmail.com" className="text-brand-dark hover:underline">geojimj@gmail.com</a>{" "}
              <span className="text-sm text-gray-500">(James Jacobs)</span>
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-bold">Hours</h2>
            <ul className="text-gray-700">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat: By Appointment</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
