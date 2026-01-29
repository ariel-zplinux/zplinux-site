export default function ClientsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <a href="https://www.abilycare.com/" target="_blank">
        <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold">Sharecare</h3>
            <span className="text-[10px] font-bold py-1 px-3 border border-blue-500/50 text-blue-500 rounded-full">
              Backend Lead Developer
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Created a health/wellness backend from scratch using NodeJs,
            Express, and Azure. Implemented complex IAM flows and authorization
            patterns.
          </p>
          <div className="flex gap-4 text-xs font-mono text-slate-500">
            <span>#NodeJs</span>
            <span>#Express</span>
            <span>#AzureAdB2c</span>
            <span>#Azure</span>
          </div>
        </div>
      </a>
      <a href="https://www.sharecare.com/" target="_blank">
        <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold">Abily Care</h3>
            <span className="text-[10px] font-bold py-1 px-3 border border-emerald-500/50 text-emerald-500 rounded-full">
              Backend Developer
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Built a Micro Services Architecture for elderly dynamism analysis.
            Handled Docker orchestration and REST integrations.
          </p>
          <div className="flex gap-4 text-xs font-mono text-slate-500">
            <span>#NodeJs</span>
            <span>#Loopback</span>
            <span>#Keycloak</span>
            <span>#Python</span>
          </div>
        </div>
      </a>
    </div>
  );
}
