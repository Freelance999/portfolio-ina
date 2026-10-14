export default function WorkExperience() {
  const experiences = [
    {
      role: "Admin Chef",
      company: "PT Pawon Sentra Tama",
      category: "Food & Beverage Operations",
      period: "Mei 2026 - Juli 2026",
      points: [
        "Melaksanakan administrasi operasional dapur, mencakup pencatatan bahan baku, pendataan resep, dan pengelolaan kebutuhan produksi.",
        "Menyusun, memperbarui, dan mengarsipkan laporan operasional serta dokumen produksi secara terstruktur untuk mendukung ketepatan dan kelengkapan data.",
        "Berkoordinasi dengan tim chef dan departemen terkait dalam mendukung efisiensi operasional, pemantauan persediaan bahan baku, dan kelancaran proses produksi.",
      ],
    },
    {
      role: "National Event and Collaboration Officer",
      company: "Maritim Muda Nusantara",
      category: "Youth & Maritime Organization",
      period: "Agustus 2024 - Desember 2024",
      points: [
        "Mengelola administrasi kegiatan, termasuk pendataan dan validasi peserta, pengarsipan dokumen, serta penyusunan rekapitulasi data.",
        "Mengoordinasikan komunikasi dengan peserta, panitia, dan narasumber untuk memastikan informasi kegiatan tersampaikan secara tepat waktu.",
        "Mendukung operasional acara melalui koordinasi registrasi, logistik, penerimaan tamu, dan kesiapan teknis.",
        "Menyampaikan materi pada kegiatan maritim mengajar secara komunikatif serta membangun interaksi yang positif untuk mendukung tercapainya tujuan program.",
        "Menyusun laporan dan dokumentasi kegiatan sebagai bahan evaluasi serta pertanggungjawaban program.",
      ],
    },
  ];

  return (
    <section className="w-full py-space-xl lg:py-24" id="pengalaman">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
          <div className="inline-flex items-center gap-1 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-base">work_history</span>
            <span>Rekam Jejak Profesional</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
            Pengalaman Kerja Profesional
          </h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Kontribusi nyata dalam administrasi operasional, pemantauan logistik, dan pengelolaan kegiatan berskala nasional.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col">
            {experiences.map((exp, index) => {
              const isFirst = index === 0;
              const isLast = index === experiences.length - 1;
              return (
              <div
                key={exp.role}
                className={`group flex gap-4 sm:gap-6 ${isLast ? "" : "pb-8 sm:pb-12"}`}
              >
                <div aria-hidden="true" className="flex flex-col items-center shrink-0 w-7 sm:w-8">
                  <span
                    className={`w-0.5 h-6 rounded-full ${isFirst ? "bg-transparent" : "bg-border-hover/60"}`}
                  />
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-card-surface flex items-center justify-center border-2 border-primary-container shadow-2xs group-hover:scale-110 group-hover:border-primary group-hover:shadow-sm transition-all duration-300 z-10 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container group-hover:bg-primary transition-colors" />
                  </span>
                  {!isLast && (
                    <span className="w-0.5 flex-1 rounded-full bg-border-hover/60" />
                  )}
                </div>
                <div className="flex-1 min-w-0 bg-card-surface p-space-md sm:p-space-lg rounded-xl border border-border-subtle shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs border-b border-border-subtle pb-space-sm mb-space-md">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold mb-1">
                        {exp.category}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                        {exp.role}
                      </h3>
                      <p className="font-title-md text-title-md text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-secondary font-label-sm text-label-sm bg-bg-surface px-3 py-1.5 rounded-full self-start sm:self-auto border border-border-subtle shrink-0">
                      <span className="material-symbols-outlined text-base">calendar_today</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-space-sm font-body-md text-body-md text-text-secondary">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-space-sm">
                        <span
                          className="material-symbols-outlined text-primary-container text-xl shrink-0 mt-0.5"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
