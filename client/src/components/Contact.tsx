export default function ContactSection() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Start a Project</h2>
      <p className="text-slate-400 mb-10 max-w-lg mx-auto">
        Based in the EU, available for freelance missions and technical
        consulting.
      </p>
      <a
        href="mailto:contact@zplinux.eu"
        className="text-4xl md:text-4xl font-black text-blue-500 hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-8"
      >
        contact@zplinux.eu
      </a>
      <p className="mt-12 text-slate-500 font-medium">
        Paris, FR — Worldwide Remote
      </p>
    </div>
  );
}
