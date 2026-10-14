export default function SkillsSection() {
  const excelSkills = [
    "Data Entry",
    "Data Sorting & Filtering",
    "IF / SUMIF / COUNTIF",
    "VLOOKUP & HLOOKUP",
    "PivotTable",
  ];

  const softSkills = [
    {
      icon: "lightbulb",
      title: "Berpikir Analitis & Problem Solving",
      desc: "Mengidentifikasi akar anomali data serta memberikan solusi taktis operasional.",
    },
    {
      icon: "verified_user",
      title: "Ketelitian & Akurasi Kerja",
      desc: "Fokus tinggi pada rincian angka, format dokumen baku, serta keandalan arsip.",
    },
    {
      icon: "schedule",
      title: "Manajemen Prioritas & Waktu",
      desc: "Mengatur tenggat waktu dinamis secara disiplin dan menjaga efisiensi proses.",
    },
    {
      icon: "forum",
      title: "Komunikasi & Lintas Tim",
      desc: "Mampu menjalin sinergi harmonis antar staf teknis, pimpinan, maupun pihak eksternal.",
    },
  ];

  return (
    <section className="w-full py-space-xl lg:py-24" id="keahlian">
      <div className="max-w-300 mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
          <div className="inline-flex items-center gap-1 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-base">psychology</span>
            <span>Kompetensi Inti</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
            Keahlian Teknis &amp; Interpersonal
          </h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Kombinasi kemahiran piranti lunak komputasi administrasi serta kecakapan koordinasi analitis.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="bg-card-surface rounded-xl p-space-md sm:p-space-lg border border-border-subtle shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">terminal</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Technical Skills (Hard Skills)
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-secondary">
                    Penguasaan aplikasi kantor dan olah data
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-bg-surface border border-border-subtle mb-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-title-md text-title-md text-text-primary font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-800">dataset</span>
                    Microsoft Excel Mastery
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-semibold">
                    Tingkat Lanjut
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                  Kemahiran formulasi spreadsheet, struktur audit, dan pengolahan data volume tinggi:
                </p>
                <div className="flex flex-wrap gap-2">
                  {excelSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-card-surface text-primary-container font-label-sm text-label-sm font-semibold border border-border-subtle shadow-2xs hover:border-border-hover transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-space-sm">
                <div className="p-space-sm rounded-lg bg-bg-primary/70 border border-border-subtle">
                  <span className="font-label-md text-label-md text-text-primary font-bold block mb-1">
                    Microsoft Office Suite
                  </span>
                  <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                    Microsoft Word (Penyusunan format resmi, korespondensi, mail merge), Microsoft PowerPoint (Presentasi korporat &amp; laporan visual).
                  </p>
                </div>

                <div className="p-space-sm rounded-lg bg-bg-primary/70 border border-border-subtle">
                  <span className="font-label-md text-label-md text-text-primary font-bold block mb-1">
                    Core Administrative Competencies
                  </span>
                  <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                    Administrasi Perkantoran dan Pengelolaan Dokumen; Pengolahan Data, Validasi Data, dan Penyusunan Laporan Berkala.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card-surface rounded-xl p-space-md sm:p-space-lg border border-border-subtle shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-10 h-10 rounded-lg bg-secondary-container text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">attribution</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Soft Skills (Interpersonal)
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-secondary">
                    Kecakapan kerja tim, adaptabilitas, dan integritas
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                {softSkills.map((skill) => (
                  <div
                    key={skill.title}
                    className="p-space-md rounded-xl bg-bg-surface/60 border border-border-subtle hover:bg-bg-surface transition-colors flex flex-col justify-between"
                  >
                    <div className="w-9 h-9 rounded-lg bg-card-surface text-primary-container flex items-center justify-center shadow-2xs mb-2">
                      <span className="material-symbols-outlined text-lg">{skill.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-text-primary font-bold mb-1">
                        {skill.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-text-secondary leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
