export default function CoreCompetencies() {
  const competencies = [
    {
      icon: "folder_managed",
      title: "Administrasi Operasional",
      description:
        "Pengelolaan dokumen kantor, surat-menyurat resmi, notulensi rapat, dan tata kelola pengarsipan terstruktur dengan keterlacakan tinggi.",
      tag: "SOP & Tata Kelola",
    },
    {
      icon: "table_chart",
      title: "Pengolahan & Validasi Data",
      description:
        "Rekapitulasi data berskala besar, cross-checking akurasi, pelaporan periodik, serta analisis komputasi menggunakan Microsoft Excel.",
      tag: "Akurasi & Reporting",
    },
    {
      icon: "diversity_3",
      title: "Koordinasi Lintas Tim",
      description:
        "Komunikasi efektif antar departemen, manajemen logistik acara dan operasional harian, serta mitigasi kendala operasional tepat waktu.",
      tag: "Kolaborasi & Eksekusi",
    },
  ];

  return (
    <section className="w-full py-space-lg bg-bg-surface/50 border-y border-border-subtle">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="bg-card-surface p-space-lg rounded-xl border border-border-subtle shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-text-primary font-bold">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-space-md flex items-center gap-1 text-primary-container font-label-sm text-label-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>{item.tag}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
